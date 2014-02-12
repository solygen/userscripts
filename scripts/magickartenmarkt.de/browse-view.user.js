// ==UserScript==
// @name         browse view: cleaner view by hiding duplicate name information
// @description  https://github.com/solygen/userscripts/blob/master/doc/magickartenmarkt.de.md#browse-viewuserjs
// @version      0.0.2
// @icon         https://raw2.github.com/solygen/userscripts/master/doc/icon/icon_032.png
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js
//
// @include      https://www.magickartenmarkt.de/?mainPage=browseUserProducts*
// @include      https://www.magiccardmarket.eu/?mainPage=browseUserProducts*
// @include      https://fr.magiccardmarket.eu/?mainPage=browseUserProducts*
// @include      https://es.magiccardmarket.eu/?mainPage=browseUserProducts*
// @include      https://id.magiccardmarket.eu/?mainPage=browseUserProducts*
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts-min/magickartenmarkt.de/browse-view-min.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts-min/magickartenmarkt.de/browse-view-min.user.js
// @homepage     https://github.com/solygen/userscripts

// ==/UserScript==

(function () {

    'use strict';

    var $summary = $('.navBarTopText').length ? $($('.navBarTopText').children()[0]) : $($('#siteContents').children()[2]),
        $table = $('tbody'),
        $rows = $('tbody').find('tr'),
        list,
        hits = 0,
        //flag green
        tolerance = 0.1,
        pricelevel = [],
        lastname,
        FAVORITE = ' \u2665'; //' \u2605',
        NOFAVORITE = ' \u2661'; //'\u2606';


    //sort cards (name, price)
    (function sortCards() {
        $rows.sort(function(a, b){
            function getKey(node) {
                var price = parseFloat($($(node).children()[13]).text().trim().replace(',', '.').replace('€', ''), 10),
                    $node = $(node);
                //consider playset
                if ($($(node).children()[9]).find('img').size())
                    price = price / 4;
                //hack: +1000 to get right sort order (e.g. 8, 12, 102)
                return $($(node).children()[2]).find('a').text() + price + 1000;
            }
            var keyA = getKey(a),
                keyB = getKey(b);
            return keyA.localeCompare(keyB);
        });
    }());

    //apply order
    (function applyOrder() {
        $table.empty();
        $.each($rows, function (index, row){
            $table.append(row);
        });
    }());

    //add column header
    (function addColumnHeader() {
        var header = $('.col_price').clone();
        header
            .removeClass('col_price')
            .addClass('col_price_sold')
            .html('&empty;')
            .insertBefore($('.col_price'));
        //expand footer row
        $('.footerCell_0').attr('colspan', 13);
    }());


    function addCell(row) {
        var cell = $(row.children()[10]).clone();
        cell
             .addClass('col_price_sold')
            .insertBefore($(row.children()[13]));
    }

    function colorizePrice(price, saleprice, row) {

        var field = $(row.children()[14]);
        if (!price) {
            return;
        } else if (saleprice <= parseFloat(price, 10) + tolerance) {
            field.css('color', 'green');
        } else {
            field.css('color', 'red');
        }
    }

    function getSalePrice($row) {
        var salesprice = $($row.children()[13])
                            .text()
                            .replace(',', '.')
                            .replace('€', '')
                            .trim();
        return parseFloat(salesprice, 10);
    }

    function toggle(name) {
        var isfav = $('.favorite').text() === FAVORITE;
        if (isfav) {
            $('.favorite').text(NOFAVORITE);
            localStorage.removeItem('favorite:' + name);
        } else {
            $('.favorite').text(FAVORITE);
            localStorage.setItem('favorite:' + name, !isfav);
        }
    }


    function setLevel() {
        var level,
            name = $('.H1_PageTitle').text().split(' ')[2],
            sum = 0;
        //sum
        $.each(pricelevel, function() {
            sum += parseFloat(this) || 0;
        });
        //average
        level = Math.round(sum/pricelevel.length*100)/100;
        //add level to dom/local storage
        $('.H1_PageTitle').text($('.H1_PageTitle').text() + ' (' + level + ')');
        level = localStorage.setItem('seller:' + name, level);
        //add star
        var star = localStorage.getItem('favorite:' + name) ? FAVORITE : NOFAVORITE,
            fav = $('<span class="favorite" style="color: red; cursor: pointer">').on('click', function () {toggle(name);} ).append(star);
        $('.H1_PageTitle').append(fav);
    }

    //process entries
    list = $($.find('.dualTextDiv')).find('a');
    $.each(list, function (index, value) {
        var $namecell = $(value),
            $row = $($namecell.parent().parent().parent().parent()),
            name = $namecell.text(),
            price = localStorage.getItem(name),
            salesprice = getSalePrice($row);

        //consider playset
        if ($($row.children()[10]).find('img').size())
            salesprice = salesprice / 4;

        //average price (sold)
        addCell($row);
        colorizePrice(price, salesprice, $row);

        //set content of new cell and apply style
        if (name === lastname) {
            $($row.children()[2]).empty();
            $row.css('font-weight', 100)
                .find('.col_price_sold').empty();
        } else {
            hits++;
            pricelevel.push(salesprice / (price || salesprice));
            $row.find('.col_price_sold')
                .text(price ? (price + '  €')
                .replace('.', ',') : '');
        }
        //remember name
        lastname = name;
    });


    //show price level
    setLevel();

    //update hits value
    $summary.text(hits + ' hits');
})();
