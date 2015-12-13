// ==UserScript==
// @name         add percent
// @description  fddb.com
// @version      1.1.0
// @grant        none
// @icon         http://www.google.com/s2/favicons?domain=www.fddb.com
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
//
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js
// @include      http://fddb.info/db/i18n/myday20*
// @include      http://fddb.info/db/i18n/listdetails/*
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts/fddb.info/add-percents.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts/fddb.info/add-percents.user.js
// @homepage     https://github.com/solygen/userscripts

// ==/UserScript==

(function () {

    'use strict';

    var $ = $ || jQuery;

    var total;

    // update total demand
    if (window.location.href.indexOf('myday20') > 0) {
        total = $($('b')[4]).text().replace(' kJ', '');
        total = parseInt(total, 10);
        localStorage.setItem('total', total);
    }

    // use latest 'total'
    total = total || parseInt(localStorage.getItem('total') || 0, 10);

    if (!total) return;

    var list = $('.myday-table-std tr');

    $.each(list, function (index, row) {
        row = $(row);
        var cell = $(row.find('td')[1]).find('.stext'),
            value = cell.text().replace(' KJ', ''),
            real = parseInt(value, 10);

        cell.text(parseInt((real / total) * 100, 10) + '%');
    });
})();
