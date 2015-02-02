// ==UserScript==
// @name         hide ads and premium
// @description  kleinanzeigen.ebay.de
// @version      1.0.2
// @grant        none
// @icon         http://www.google.com/s2/favicons?domain=kleinanzeigen.ebay.de
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
//
// @include      http://kleinanzeigen.ebay.de/*

// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts/kleinanzeigen.ebay.de/hide-ads.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts/kleinanzeigen.ebay.de/hide-ads.user.js
// @homepage     https://github.com/solygen/userscripts

// ==/UserScript==

(function () {

    'use strict';

    function rearrange () {
        var itemnodes = $('.managead-listitem-features');

        $.each(itemnodes, function (i, node) {
            node = $(node);

            // remove premium options and move statistics node
            node.empty()
                .append(
                    node.parent().find('.horizontal-list').last()
                ).css({
                    'font-size': '30px',
                    'padding-left': '350px'
                });

            // auto extend
            $('.my-manageads-adlist .managead-listitem-action-extend').trigger('click');

            // stats
            $.each(node.find('li'), function (i, node) {
                node = $(node);

                var img = node.find('i'),
                    label = $('<strong>').text(
                                            node.text()
                                                .replace('Besucher', '')
                                                .replace('mal gemerkt', '')
                                                .trim()
                                        )
                                        .css('padding-left', '6px');

                node.empty()
                    .css('display', 'block');

                // do not show '0' values
                if (label.text() === '0' || label.text() === '')
                    return;
                node.append(img, label);
            });
        });
    }

    // hide adds
    setTimeout(function () {
        // simply remove premium stuff
        $('#srp_adsense-top, #srp_adsense-middle, #srp_adsense-bottom, #srchrslt-adtable-topads, .headerbox.t-border-yellow, #home-gallery').remove();

        // re-arrange 'meine kleinanzeigen'
        if (!$('.managead-listitem-features').length) return;
        rearrange();

    }, 400);

    // clear title
    document.title = (document.title.split('|')[0]).trim();

})();
