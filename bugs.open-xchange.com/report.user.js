// ==UserScript==
// @name         reports with multiple tables: remove empty rows and put total tabel to top
// @description  bugs.open-xchange.com
// @version      0.0.1
// @namespace    https://github.com/solygen/userscripts-and-bookmarklets
// @repository   https://github.com/solygen/userscripts-and-bookmarklets.git
// @license      MIT
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js
//
// @include      https://bugs.open-xchange.com/report.cgi?x_axis_field=*
//
// @updateURL    https://rawgithub.com/solygen/userscripts-and-bookmarklets/master/bugs.open-xchange.com/report.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts-and-bookmarklets/master/bugs.open-xchange.com/report.user.js
// @homepage     https://github.com/solygen/userscripts-and-bookmarklets

// ==/UserScript==

(function () {
    'use strict';

    setTimeout(function(){

        //remove empty rows
        var $rows = $($('.yui-dt-rec'));
        for (var i = $rows.length - 1; i >= 0; i--) {
            var $row = $($rows[i]),
                links = !!($row.find('a').length);
            if (!links)
                 $row.remove();
        }

        //put total to top
        var tables = $('div[align="center"]').children('table'),
            total = $(tables.splice(tables.length-2, 1)),
            totalclone = total.clone();
        total.remove();
        $('div[align="center"]').prepend(totalclone);

        var headlines = $('div[align="center"]').children('h2'),
            headline = $(headlines.splice(headlines.length-1, 1)),
            headlineclone = headline.clone();
        headline.remove();
        $('div[align="center"]').prepend(headlineclone);
    }, 500);

})();
