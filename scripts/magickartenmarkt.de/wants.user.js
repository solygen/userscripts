// ==UserScript==
// @name         wants: add prices
// @description  https://github.com/solygen/userscripts/blob/master/doc/magickartenmarkt.de.md#wants-viewuserjs
// @version      1.0.2
// @grant        none
// @icon         https://www.magickartenmarkt.de/Products/Singles/Magic+2010/img/c0a10b062a8c3b48a5c29b779b3ac51e/static/misc/favicon-96x96.png
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js
//
// @include      https://www.magickartenmarkt.de/?mainPage=showWants*
// @include      https://www.magiccardmarket.eu/?mainPage=showWants*
// @include      https://fr.magiccardmarket.eu/?mainPage=showWants*
// @include      https://es.magiccardmarket.eu/?mainPage=showWants*
// @include      https://id.magiccardmarket.eu/?mainPage=showWants*
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts/magickartenmarkt.de/wants.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts/magickartenmarkt.de/wants.user.js
// @homepage     https://github.com/solygen/userscripts

// ==/UserScript==

(function () {

    'use strict';

    var list = $($.find('.wantsTable tr td:nth-child(3)')).find('a'),
        FAVORITE = ' \u2605',
        NOFAVORITE = ''; //'\u2606';

    // adjust header (keep it sortable)
    $('.wantsTable th:nth-child(13)').find('span').text('∅')

    // replace start price with average price sold
    $.each(list, function (index, value) {
        var $elem = $(value),
            $row = $($elem.parent().parent()),
            name = $elem.text().trim(),
            price = localStorage.getItem(name) || '';
        $row.find('td:nth-child(13)')
            .text(price ? (parseFloat(price).toFixed(2) + '  €')
            .replace('.', ',') : '');
    });

    // get price level gather by browse view
    list = $($.find('.sellerTable td:nth-child(2)'));
    $.each(list, function (index, value) {
        var $elem = $(value),
            $row = $($elem.parent()),
            $level = $row.find(':nth-child(4)'),
            name = $elem.text().split('(')[0].trim(),
            level = localStorage.getItem('seller:' + name) || undefined;
        if (level) {
            $level.text('(' + level + ') ');
        }
        //flag favorite users
        var star = localStorage.getItem('favorite:' + name) ? FAVORITE : NOFAVORITE,
            fav = $('<span class="favorite" style="color: red;">').on('click', function () {toggle(name);} ).append(star);
        $elem.append(fav);
    });

})();
