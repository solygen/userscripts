// ==UserScript==
// @name         marks external transfers
// @description  transfermarkt.de
// @version      1.0.0
// @icon         http://www.google.com/s2/favicons?domain=www.transfermarkt.de
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
//
// @include      http://www.transfermarkt.de/*/transfers/wettbewerb/L*/saison_id/*
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts/transfermarkt.de/transfer-externals.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts/transfermarkt.de/transfer-externals.user.js
// @homepage     https://github.com/solygen/userscripts

// ==/UserScript==

(function () {

    'use strict';

    var nodelist = $('.spielprofil_tooltip'),
        list = Array.prototype.slice.call(nodelist,0),
        hash = {};

    list.forEach(function (node) {
        var id = $(node).attr('id');
        hash[id] = hash[id] || [];
        hash[id].push(node);
    });

    (Object.keys(hash)).forEach(function (id) {
        var list = hash[id];
        if (list.length === 1) {
            list.forEach(function (node) {
                $(node).parent().parent().css('backgroundColor', 'rgba(19, 155, 232, 0.29)');
            });
        }
    });

})();
