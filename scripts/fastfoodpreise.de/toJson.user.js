// ==UserScript==
// @name         fastfoodpreise: write prices to console as json
// @description  fastfoodpreise.de
// @version      1.0.0
// @grant        none
// @icon         http://www.google.com/s2/favicons?domain=www.fastfoodpreise.de
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
//
// @include      http://www.fastfoodpreise.de/preisliste/*.html
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts/fastfoodpreise.de/toJson.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts/fastfoodpreise.de/toJson.user.js
// @homepage     https://github.com/solygen/userscripts

// ==/UserScript==

(function () {

    'use strict';

    var list = document.querySelectorAll('tr'),
        data = {}, last;

    [].forEach.call(list, function (row) {
        if (row.querySelector('.size') && row.querySelector('.price')) {
            last = row.querySelector('a') ? row.querySelector('a').innerHTML.split('<')[0].replace('&nbsp;', '').trim() : last;
            size = row.querySelector('.size').innerHTML;
            key = size !== '' ? (last + ' ' + row.querySelector('.size').innerHTML) : last;
            data[key] = {
                name: last,
                size: size,
                price: row.querySelector('.price').innerHTML
            };
        }
    });

    console.log(
        JSON.stringify(data, undefined, 4)
    );

})();
