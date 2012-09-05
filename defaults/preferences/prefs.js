
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* Linkificator preferences - Linkificator's module
 * author: MarkaPola */

pref("extensions.linkificator@markapola.activated", true);
pref("extensions.linkificator@markapola.hotkey", "control-shift-y");
pref("extensions.linkificator@markapola.displayWidget", true);
pref("extensions.linkificator@markapola.useRegExp", true);
pref("extensions.linkificator@markapola.filterMode", "black");
pref("extensions.linkificator@markapola.whitelist", "");
pref("extensions.linkificator@markapola.blacklist", "^about: localhost www\\.google\\..*");
pref("extensions.linkificator@markapola.overrideTextColor", false);
pref("extensions.linkificator@markapola.linkColor", "#006620");
pref("extensions.linkificator@markapola.overrideBackgroundColor", false);
pref("extensions.linkificator@markapola.backgroundColor", "#fff9ab");
pref("extensions.linkificator@markapola.supportEmail", true);
pref("extensions.linkificator@markapola.supportAbout", false);
pref("extensions.linkificator@markapola.supportStandardURLs", true);
pref("extensions.linkificator@markapola.supportCustomRulesBefore", false);
pref("extensions.linkificator@markapola.supportCustomRulesAfter", false);
pref("extensions.linkificator@markapola.customRules", "{\"beforeList\":[],\"afterList\":[{\"name\":\"URN:NBN Resolver, Redirect to document itself\",\"pattern\":\"urn:nbn:[a-z0-9]{2,}[:-][^[\\\\]{}<>\\\\\\\\|~^\\\"`\\\\s]+\",\"url\":\"http://nbn-resolving.org/redirect/$&\",\"active\":true},{\"name\":\"URN:NBN Resolver, All Links\",\"pattern\":\"urn:nbn:[a-z0-9]{2,}[:-][^[\\\\]{}<>\\\\\\\\|~^\\\"`\\\\s]+\",\"url\":\"http://nbn-resolving.org/$&\",\"active\":false}]}");
pref("extensions.linkificator@markapola.protocols", "h..p~http#2;h..ps~https#2;ftp~ftp#2;news~news#0;nntp~nntp#2;telnet~telnet#2;irc~irc#2;file~file#3");
pref("extensions.linkificator@markapola.subdomains", "www~www\\d{0,3}~http://;ftp~ftp~ftp://;irc~irc~irc://");
pref("extensions.linkificator@markapola.excludedElements", "a;applet;area;embed;frame;frameset;head;iframe;img;map;meta;noscript;object;option;param;script;select;style;textarea;title;@onclick;@onmousedown;@onmouseup");
pref("extensions.linkificator@markapola.sync", false);
// sync management, deactivated by default
pref("services.sync.prefs.sync.extensions.linkificator@markapola.hotkey", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.displayWidget", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.useRegExp", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.filterMode", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.whitelist", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.blacklist", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.overrideTextColor", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.linkColor", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.overrideBackgroundColor", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.backgroundColor", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.supportEmail", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.supportAbout", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.supportStandardURLs", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.supportCustomRulesBefore", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.supportCustomRulesAfter", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.customRules", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.protocols", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.subdomains", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.excludedElements", false);
