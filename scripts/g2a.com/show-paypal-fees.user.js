// ==UserScript==
// @name         show paypal fees
// @description  g2a.com
// @version      1.0.0
// @grant        none
// @icon         http://www.google.com/s2/favicons?domain=www.g2a.com
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
//
// @include      https://www.g2a.com/checkout/cart/*
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts/g2a.com/show-paypal-fees.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts/g2a.com/show-paypal-fees.user.js
// @homepage     https://github.com/solygen/userscripts

// ==/UserScript==

(function () {

    'use strict';

    //https://www.g2a.com/payments.pdf
    window.setTimeout(function () {
        var node = jQuery('.total_prince .price');

        var text = node.text(),
            pricestr = text.replace('€', '').trim(),
            price = parseFloat(pricestr.replace(',', '.')), newprice;
        // paypal fees
        newprice = ((price * 1.04) + 0.35).toFixed(2).replace('.', ',') + ' €';
        node.html(newprice + '&nbsp;' + '<span style="color: #ccc; width: auto;"> (' + pricestr + ')</span>');
    }, 200);
})();
