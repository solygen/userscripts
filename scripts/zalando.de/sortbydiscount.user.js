// ==UserScript==
// @name         sort by discount
// @description  zalando.de
// @version      0.0.1
// @icon         http://www.google.com/s2/favicons?domain=www.zalando.de
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
//
// @include      http://www.zalando.de/*
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts/zalando.de/sortbydiscount.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts/zalando.de/sortbydiscount.user.js
// @homepage     https://github.com/solygen/userscripts
//
// ==/UserScript==

//redirect to calling page after added proxies
(function () {

    'use strict';

    var container = $('.sortBySelect');

    function sortByDiscount() {

        var parent = $('.productsGridList').first(),
            nodes = parent.first().children();

        nodes.sort(function (a, b) {
            var vala = parseInt($(a).find('.salePercentFlag').text().replace('%', '')),
                valb = parseInt($(b).find('.salePercentFlag').text().replace('%', ''));
            if (vala < valb)
                return -1;
            else if (vala > valb)
                return 1;
            else
                return 0;
        });

        parent.empty();
        parent.append(nodes);

    }
    if (container.length)
        container.parent().append(
            $('<label>')
                .css('padding-left', '8px')
                .append(
                    $('<a class="userscript">')
                        .text('Sort (current page) by discount')
                        .click(sortByDiscount)
                )
            );

})();
