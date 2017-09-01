
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// author: MarkaPola

//
// Manage the options page of the add-on
//


function managePopup (context) {
    $('panel-options').addEventListener('click', event => {
        browser.runtime.openOptionsPage();
        window.close();
    });

    let manual = $('panel-manual');
    manual.checked = context.manual;
    manual.addEventListener('click', event => {
        browser.storage[context.area].set({manual: manual.checked});
        window.close();
    });

    let activate = $('panel-activate');
    let deactivate = $('panel-deactivate');
    if (context.activated) {
        $('entry-activate').setAttribute('style', 'display: none');
        $('panel-deactivate').addEventListener('click', event => {
            browser.storage[context.area].set({activated: false});
            window.close();
        });
    } else {
        $('entry-deactivate').setAttribute('style', 'display: none');
        $('panel-activate').addEventListener('click', event => {
            browser.storage[context.area].set({activated: true});
            window.close();
        });
    }

    let entry, manage;
    if (context.status === 'excluded' || context.status === 'filtered') {
        $('entry-exclude').setAttribute('style', 'display: none');
        entry = $('entry-include');
        manage = $('panel-include');
    } else {
        $('entry-include').setAttribute('style', 'display: none');
        entry = $('entry-exclude');
        manage = $('panel-exclude');
    }
    if (context.status === 'not_processed') {
        entry.classList.add('popup-entry-disabled');
        manage.setAttribute('src', 'empty.png');
    }
    manage.addEventListener('click', event => {
        browser.runtime.sendMessage({id: 'manage-url', info: context}).catch(reason => console.error(reason));
        window.close();
    });
    
    let linkify = $('panel-linkify');
    if (context.status === 'processed') {
        linkify.addEventListener('click', event => {
            browser.storage[context.area].set({activated: true});
            window.close();
        });
    } else {
        $('entry-linkify').classList.add('popup-entry-disabled');
        linkify.setAttribute('src', 'empty.png');
    }
}


document.addEventListener("DOMContentLoaded",
                          () => {
                              // query current tab status
                              browser.runtime.sendMessage({id: 'tab-context'}).then(context => {
                                  managePopup(context);
                              }).catch(reason => console.error(reason));
                          }, 
                          {
                              capture: true,
                              passive: true,
                              once: true
                          });
