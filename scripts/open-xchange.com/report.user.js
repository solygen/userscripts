// ==UserScript==
// @name         reports with multiple tables: remove empty rows and put total tabel to top
// @description  bugs.open-xchange.com
// @version      1.0.1
// @grant        none
// @icon         http://www.google.com/s2/favicons?domain=www.bugzilla.org
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js
//
// @include      https://bugs.open-xchange.com/report.cgi?x_axis_field=*
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts/open-xchange.com/report.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts/open-xchange.com/report.user.js
// @homepage     https://github.com/solygen/userscripts

// ==/UserScript==

(function () {

    'use strict';

    setTimeout(function () {

        //remove empty rows
        var $rows = $($('.yui-dt-rec'));
        for (var i = $rows.length - 1; i >= 0; i--) {
            var $row = $($rows[i]),
                links = !!($row.find('a').length);
            if (!links) {
                $row.remove();
            }
        }

        function transform(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }

        //bigger font size and map email address to name
        var cells = [].slice.call(document.querySelectorAll('.yui-dt-liner'));
        cells.forEach(function logArrayElements(element, index, array) {
            element.setAttribute('style', 'font-size: 13pt');
            if (element.textContent.indexOf('@open-xchange.com') !== -1) {
                element.textContent = element.textContent.replace('@open-xchange.com', '');
                element.textContent = element.textContent.replace('.', ' ');
                element.textContent = element.textContent.replace(/\w\S*/g, transform);
            }
        });

        //put total to top
        var tables = $('div[align="center"]').children('table'),
            total = $(tables.splice(tables.length - 2, 1)),
            totalclone = total.clone();
        total.remove();
        $('div[align="center"]').prepend(totalclone);

        var headlines = $('div[align="center"]').children('h2'),
            headline = $(headlines.splice(headlines.length - 1, 1)),
            headlineclone = headline.clone();
        headline.remove();
        $('div[align="center"]').prepend(headlineclone);
    }, 500);

})();
