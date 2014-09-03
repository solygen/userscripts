// ==UserScript==
// @name         hide ads and premium
// @description  kleinanzeigen.ebay.de
// @version      0.0.1
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

    // hide adds
    setTimeout(function () {
        $('#srp_adsense-top, #srp_adsense-middle, #srp_adsense-bottom, #srchrslt-adtable-topads, .managead-listitem-features, .headerbox.t-border-yellow').remove();
    }, 100)

    // clear title
    document.title = (document.title.split('|')[0]).trim();

})();
