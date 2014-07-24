// ==UserScript==
// @name         hide ads
// @description  kleinanzeigen.ebay.de
// @version      0.0.1
// @icon         https://raw2.github.com/solygen/userscripts/master/doc/icon/icon_032.png
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
//
// @include      http://kleinanzeigen.ebay.de/*
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts-min/kleinanzeigen.ebay.de/hide-ads-min.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts-min/kleinanzeigen.ebay.de/hide-ads.user.js
// @homepage     https://github.com/solygen/userscripts
// ==/UserScript==
!function(){"use strict";$("#srp_adsense-top, #srp_adsense-middle, #srp_adsense-bottom, #srchrslt-adtable-topads").remove()}();