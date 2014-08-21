// ==UserScript==
// @name         marks external transfers
// @description  transfermarkt.de
// @version      0.0.1
// @icon         http://www.google.com/s2/favicons?domain=www.transfermarkt.de
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
//
// @include      http://www.transfermarkt.de/*/transfers/wettbewerb/L*/saison_id/*
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts-min/transfermarkt.de/transfer-externals-min.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts-min/transfermarkt.de/transfer-externals.user.js
// @homepage     https://github.com/solygen/userscripts
// ==/UserScript==
!function(){"use strict";var a=$(".spielprofil_tooltip"),b=Array.prototype.slice.call(a,0),c={};b.forEach(function(a){var b=$(a).attr("id");c[b]=c[b]||[],c[b].push(a)}),Object.keys(c).forEach(function(a){var b=c[a];1===b.length&&b.forEach(function(a){$(a).parent().parent().css("backgroundColor","rgba(19, 155, 232, 0.29)")})})}();