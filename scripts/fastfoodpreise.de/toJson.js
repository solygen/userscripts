// ==UserScript==
// @name         fastfoodpreise: write prices to console as json
// @description  deckstats.net
// @version      0.0.1
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
//
// @include      http://www.fastfoodpreise.de/preisliste/*.html
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts-min/fastfoodpreise.de/toJson.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts-min/fastfoodpreise.de/toJson.user.js
// @homepage     https://github.com/solygen/userscripts

// ==/UserScript==

(function () {

    'use strict';

    var list = document.querySelectorAll('tr'),
        data = {};

    [].forEach.call(list, function (row) {
        if (row.querySelector('a') && row.querySelector('.size') && row.querySelector('.price')) {
            data[row.querySelector('a').innerHTML.split('<')[0].replace('&nbsp;', '').trim()] = {
                size: row.querySelector('.size').innerHTML,
                price: row.querySelector('.price').innerHTML
            };
        }
    });

    console.log(
        JSON.stringify(data, undefined, 4)
    );

})();
