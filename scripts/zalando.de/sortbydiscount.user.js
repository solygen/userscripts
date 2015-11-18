// ==UserScript==
// @name         sort by discount
// @description  zalando.de
// @version      2.0.1
// @grant        none
// @icon         http://www.google.com/s2/favicons?domain=www.zalando.de
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
//
// @include      http://www.zalando.de/*
// @include      https://www.zalando.de/*
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts/zalando.de/sortbydiscount.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts/zalando.de/sortbydiscount.user.js
// @homepage     https://github.com/solygen/userscripts
//
// ==/UserScript==

//redirect to calling page after added proxies
(function () {

    'use strict';

    var container = $('.catalogSorting_dropdown');

    function sortByDiscount() {

        var parent = $('.catalogArticlesList').first(),
            nodes = parent.find('li.catalogArticlesList_item');

        nodes.sort(function (a, b) {
            var vala = parseInt($(a).find('.catalogArticlesList_flagDiscountRate').text().replace('%', '').replace('-', ''), 10),
                valb = parseInt($(b).find('.catalogArticlesList_flagDiscountRate').text().replace('%', '').replace('-', ''), 10);
            if (vala < valb) {
                return 1;
            } else if (vala > valb) {
                return -1;
            }
            return 0;
        });

        parent.empty();
        parent.append(nodes);
    }

    if (container.length) {
        container.parent().append(
            $('<label>')
                .css('padding-left', '8px')
                .append(
                    $('<a class="userscript">')
                        .text('Sort (current page) by discount')
                        .click(sortByDiscount)
                )
            );
    }

})();
