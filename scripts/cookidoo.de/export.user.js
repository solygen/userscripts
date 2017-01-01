// ==UserScript==
// @name         export recipie as JSON to console
// @description  cookidoo.de
// @version      1.0.0
// @grant        none
// @icon         http://www.google.com/s2/favicons?domain=www.cookidoo.de
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
//
// @include      http://cookidoo.de/vorwerkWebapp/app*
// @include      https://cookidoo.de/vorwerkWebapp/app*

// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts/cookidoo.de/export.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts/cookidoo.de/export.user.js
// @homepage     https://github.com/solygen/userscripts

// ==/UserScript==

(function () {

    'use strict';

    setTimeout(function () {

        var title = $('.qv-recipe-head span').text(),
            prep = $('.qv-recipe-section:first .icon-preparation-time').parent().find('p').text().replace('m', ''),
            total = $('.qv-recipe-section:first .icon-total-time').parent().find('p').text().replace('m', ''),
            portions = $('.qv-recipe-section:first .icon-portion').parent().find('p').text().replace('m', ''),
            img = $('.qv-image-section:first').css('background-image').match(/\((.*?)\)/)[1].replace(/('|')/g, ''),
            ingredients = [],
            steps = [];

        // ingredients
        $('.qv-recipe-list li').each(function (list, node) {
            ingredients.push({
                'quantity': 1,
                'unit': 'gr',
                'name': $(node).text().trim()
            });
        });
        // steps
        $('#qv-preparation-section li').each(function (list, node) { steps.push($(node).text().trim()); });

        // write JSON to console
        console.log(JSON.stringify({
            'id': title.toLowerCase(),
            'image': img,
            'name': title,
            'tags': [ 'tm' ],
            'time': {
                'active': parseInt(prep, 10),
                'passive': parseInt(total, 10)
            },
            'servings': parseInt(portions, 10),
            'kilocalories': '',
            'ingredients': ingredients,
            'steps': steps,
            'source': window.location.href
        }, undefined, 4));

    }, 4000);

})();
