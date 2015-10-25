// ==UserScript==
// @name         hide ads and add paypal fees to main price quotes
// @description  g2a.com
// @version      1.0.0
// @grant        none
// @icon         http://www.google.com/s2/favicons?domain=www.g2a.com
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
//
// @include      https://www.g2a.com/*
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts/g2a.com/hide-ads.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts/g2a.com/hide-ads.user.js
// @homepage     https://github.com/solygen/userscripts

// ==/UserScript==

(function () {

    'use strict';

    jQuery('#body_clicker').css('background-image', 'none');
    jQuery('.banner-shield').hide();
    jQuery('#container2').css('padding-bottom', '100px');
    jQuery('.mp-head-giftcard').hide();
    jQuery('.mp-head-bar').hide();
    jQuery('.mp-head-like').hide();
    jQuery('.mp-head-goldmine').hide();
    jQuery('.mp-head-stc').hide();
    jQuery('#footer-wrap').hide();
    jQuery('.banner-shield-small').hide();

    //https://www.g2a.com/payments.pdf
    window.setTimeout(function () {
        var list = jQuery('.mp-Price, .mp-pi-price-min');

        jQuery.each(list, function (index, node) {
            node = jQuery(node);
            var text = node.text(),
                pricestr = text.replace('€', '').trim(),
                price = parseFloat(pricestr.replace(',', '.')), newprice;
            // paypal fees
            newprice = ((price * 1.04) + 0.35).toFixed(2).replace('.', ',') + ' €';
            node.html(newprice + '<span style="color: #ccc"> (' + pricestr + ')</span>');
        });
    }, 200);
})();
