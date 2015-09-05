#!/bin/csh -f
#
# Build Firefox add-on xpi package with some extensions
#

if ("$*" == "--help") then
	python ${ADDON_HOME_PATH}/bin/cfx --help
	exit 0;
endif

# goto add-on root directory
cd `dirname $0`/..

if (! -f package.json) then
	echo "Not found package.json... Potentially corrupted add-on!";
	exit 1;
endif

set APP_EXTENSION = ${ADDON_HOME_PATH}/app-extension
if (-d ${ADDON_HOME_PATH}/python-lib/cuddlefish/app-extension) then
	set APP_EXTENSION = ${ADDON_HOME_PATH}/python-lib/cuddlefish/app-extension
endif
cp -f ${APP_EXTENSION}/{application.ini,bootstrap.js} app-extension

set XPI_OPTIONS = ""

#
# packaging add-on
#
python ${ADDON_HOME_PATH}/bin/cfx xpi --pkgdir=$cwd --templatedir=app-extension $XPI_OPTIONS $*

#
# patch options.xul for a correct UI behavior
#
if ($?TMP) then
	set TDIR = ${TMP}/$$
else
	set TDIR = /tmp/$$
endif

# noglob option generates sed errors
unsetenv MSYS

#
# Add inline options and custom version of preferences
#
zip linkificator.xpi options.xul defaults/preferences/prefs.js

set version=`cat package.json | perl -e 'use JSON; undef $/; my $text=<STDIN>; $/ = "\n"; print from_json($text)->{"version"};'`

echo "Renaming extension to linkificator${version}.xpi"
# work-around: remove erroneous / empty folder
set zd = $cwd
unzip -q -d ${TDIR} linkificator.xpi
cd ${TDIR}; zip -q -r ${zd}/linkificator${version}.xpi *; cd ${zd}
rm -rf ${TDIR}
rm -rf linkificator.xpi
