// ==UserScript==
// @name steamdb.info/sales
// @description filter irrelevant entries
// @version 0.0.2
// @icon http://www.google.com/s2/favicons?domain=www.steamdb.info
// @namespace https://github.com/solygen/userscripts
// @repository https://github.com/solygen/userscripts.git
// @license MIT
//
// @include https://steamdb.info/sales/*
//
// @updateURL https://rawgithub.com/solygen/userscripts/master/scripts/steamdb.info/sales.user.js
// @downloadURL https://rawgithub.com/solygen/userscripts/master/scripts/steamdb.info/sales.user.js
// @homepage https://github.com/solygen/userscripts
//
// ==/UserScript==
(function () {

    'use strict';

    $('.panel-ownership').hide();
    $($('.motd')[1]).hide();
    $($('.motd')[0]).hide();

    // each section
    $('.sales-section').each(function (index, section) {

        // each item
        section.find('tr.app').each(function (index, row) {
            row = $(row);

            var score = $(row.find('td')[6]),
                scorevalue = parseInt(score.attr('data-sort')),
                discount = row.find('td.price-discount, td.price-discount-minor'),
                discountvalue = parseInt(discount.attr('data-sort')),
                price = row.find('td.price-final'),
                pricevalue = parseInt(price.attr('data-sort'));

            // remove
            if (scorevalue < 75 || pricevalue > 500 || discountvalue < 75) {
                row.hide();
            }
        });

        // update badge
        section.find('.badge').text(
            $('tr.app:visible').length
        );

    });

}) ();
