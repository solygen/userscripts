// ==UserScript==
// @name         Add Gravatar Everywhere
// @namespace    http://docwhat.gerf.org/
// @description  Adds gravatars to all a@href="mailto:" links
// @require      https://rawgithub.com/solygen/userscripts/masterlib/md5.js
// @include      https://bugs.open-xchange.com/show_bug.cgi*
// ==/UserScript==

(function () {

    'use strict';

    var isBookmarklet = typeof GM_getValue === 'undefined';

    var md5cached = function (str) {
        var hash;
        if (isBookmarklet)
            hash = md5(str);
        else {
            hash = GM_getValue(str);
            if (!hash) {
                hash = md5(str);
                GM_setValue(str, hash);
            }
        }
        return hash;
    };

    var addGravatar = function addGravatar(el) {
        if (typeof el === 'string') {
            el = document.getElementById(el);
        }
        var email = el.href.replace(/^mailto:/, '').replace(/\?.*$/, '').toLowerCase(),
            grav_url = ['http://www.gravatar.com/avatar.php?gravatar_id=',
                        md5cached(email),
                        '&d=identicon',
                        //'&d=wavatar',
                        //'&d=monsterid',
                        '&s=',
                        24].join('');

        el.innerHTML = '<img src="' + grav_url + '" style="border: none; vertical-align: middle"/> ' + el.innerHTML;
    };

    var doAll = function doAll() {
        try {
            var list = document.getElementsByTagName('a'),
            len = list.length,
            re = /^mailto:.*@/,
            el,
            i;
            for (i = 0; i < len; i++) {
                el = list[i];
                if (re.test(el.href)) {
                    (function () {
                        var local_el = el;
                        setTimeout(function () {
                                addGravatar(local_el);
                            }, 10);
                    })();
                }
            }
        } catch (e) {
            alert('debug: ' + e);
        }
    };
    if (isBookmarklet)
        doAll();
    else
        window.addEventListener('load', doAll, false);
})();
