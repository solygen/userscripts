// ==UserScript==
// @name         mcdonalds: add prices
// @description  mcdonalds.de
// @version      1.0.1
// @grant        none
// @icon         http://www.google.com/s2/favicons?domain=www.mcdonalds.de
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
//
// @include      http://www.mcdonalds.de/produkte/alle-produkte
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts/fastfoodpreise.de/prices.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts/fastfoodpreise.de/prices.user.js
// @homepage     https://github.com/solygen/userscripts

// ==/UserScript==

(function () {

    'use strict';

    var prices = {
        'timestamp': 1386700763608,
        'data' : {
            'Big Mac': {
                'name': 'Big Mac',
                'size': '',
                'price': '€ 3,59'
            },
            'Big Tasty Bacon': {
                'name': 'Big Tasty Bacon',
                'size': '',
                'price': '€ 4,79'
            },
            'Hamburger Royal TS': {
                'name': 'Hamburger Royal TS',
                'size': '',
                'price': '€ 3,69'
            },
            'Hamburger Royal Käse': {
                'name': 'Hamburger Royal Käse',
                'size': '',
                'price': '€ 3,69'
            },
            'McChicken': {
                'name': 'McChicken',
                'size': '',
                'price': '€ 3,49'
            },
            'McRib': {
                'name': 'McRib',
                'size': '',
                'price': '€ 3,49'
            },
            'Filet-o-Fish': {
                'name': 'Filet-o-Fish',
                'size': '',
                'price': '€ 3,19'
            },
            'Hamburger': {
                'name': 'Hamburger',
                'size': '',
                'price': '€ 1,00'
            },
            'Cheeseburger': {
                'name': 'Cheeseburger',
                'size': '',
                'price': '€ 1,19'
            },
            'Chickenburger': {
                'name': 'Chickenburger',
                'size': '',
                'price': '€ 1,19'
            },
            'Chickenburger TS': {
                'name': 'Chickenburger TS',
                'size': '',
                'price': '€ 1,59'
            },
            'Veggieburger TS': {
                'name': 'Veggieburger TS',
                'size': '',
                'price': '€ 1,59'
            },
            'McDouble': {
                'name': 'McDouble',
                'size': '',
                'price': '€ 1,59'
            },
            'McWrap Italian Chicken Mozzarella': {
                'name': 'McWrap Italian Chicken Mozzarella',
                'size': '',
                'price': '€ 3,79'
            },
            'McWrap Thai Curry Chicken': {
                'name': 'McWrap Thai Curry Chicken',
                'size': '',
                'price': '€ 3,79'
            },
            'McWrap Marokko Veggie': {
                'name': 'McWrap Marokko Veggie',
                'size': '',
                'price': '€ 3,79'
            },
            'Snack Wrap TS': {
                'name': 'Snack Wrap TS',
                'size': '',
                'price': '€ 1,59'
            },
            'Pommes Frites klein': {
                'name': 'Pommes Frites',
                'size': 'klein',
                'price': '€ 1,59'
            },
            'Pommes Frites mittel': {
                'name': 'Pommes Frites',
                'size': 'mittel',
                'price': '€ 2,19'
            },
            'Pommes Frites groß': {
                'name': 'Pommes Frites',
                'size': 'groß',
                'price': '€ 2,29'
            },
            '4 Chicken McNuggets': {
                'name': 'Chicken Mc Nuggets',
                'size': '4 Stück',
                'price': '€ 2,19'
            },
            '6 Chicken McNuggets': {
                'name': 'Chicken Mc Nuggets',
                'size': '6 Stück',
                'price': '€ 3,39'
            },
            '9 Chicken McNuggets': {
                'name': 'Chicken Mc Nuggets',
                'size': '9 Stück',
                'price': '€ 3,99'
            },
            'Chicken Mc Nuggets 20 Stück': {
                'name': 'Chicken Mc Nuggets',
                'size': '20 Stück',
                'price': '€ 7,49'
            },
            'Snack Salat Classic': {
                'name': 'Snack Salat Classic',
                'size': '',
                'price': '€ 1,49'
            },
            'Snack Salat Couscous': {
                'name': 'Snack Salat Couscous',
                'size': '',
                'price': '€ 2,49'
            },
            'Snack Salat Chef': {
                'name': 'Snack Salat Chef',
                'size': '',
                'price': '€ 2,49'
            },
            'Snack Salat Tomate Mozzarella': {
                'name': 'Snack Salat Tomate Mozzarella',
                'size': '',
                'price': '€ 2,49'
            },
            'Cola 0,25 l': {
                'name': 'Cola',
                'size': '0,25 l',
                'price': '€ 1,19'
            },
            'Cola 0,4 l': {
                'name': 'Cola',
                'size': '0,4 l',
                'price': '€ 1,79'
            },
            'Cola 0,5 l': {
                'name': 'Cola',
                'size': '0,5 l',
                'price': '€ 2,19'
            },
            'Limonade 0,25 l': {
                'name': 'Limonade',
                'size': '0,25 l',
                'price': '€ 1,19'
            },
            'Limonade 0,4 l': {
                'name': 'Limonade',
                'size': '0,4 l',
                'price': '€ 1,79'
            },
            'Limonade 0,5 l': {
                'name': 'Limonade',
                'size': '0,5 l',
                'price': '€ 2,19'
            },
            'Apfelschorle 0,25 l': {
                'name': 'Apfelschorle',
                'size': '0,25 l',
                'price': '€ 1,19'
            },
            'Apfelschorle 0,4 l': {
                'name': 'Apfelschorle',
                'size': '0,4 l',
                'price': '€ 1,79'
            },
            'Apfelschorle 0,5 l': {
                'name': 'Apfelschorle',
                'size': '0,5 l',
                'price': '€ 2,19'
            },
            'Mineralwasser 0,25 l': {
                'name': 'Mineralwasser',
                'size': '0,25 l',
                'price': '€ 1,19'
            },
            'Mineralwasser 0,4 l': {
                'name': 'Mineralwasser',
                'size': '0,4 l',
                'price': '€ 1,79'
            },
            'Mineralwasser 0,5 l': {
                'name': 'Mineralwasser',
                'size': '0,5 l',
                'price': '€ 2,19'
            },
            'Stilles Mineralwasser 0,5 l': {
                'name': 'Stilles Mineralwasser',
                'size': '0,5 l',
                'price': '€ 2,19'
            },
            'Orangensaft 0,25 l': {
                'name': 'Orangensaft',
                'size': '0,25 l',
                'price': '€ 1,59'
            },
            'Biomilch 0,25 l': {
                'name': 'Biomilch',
                'size': '0,25 l',
                'price': '€ 1,29'
            },
            'Bier 0,33 l': {
                'name': 'Bier',
                'size': '0,33 l',
                'price': '€ 2,19'
            },
            'Kaffee klein': {
                'name': 'Kaffee',
                'size': 'klein',
                'price': '€ 1,00'
            },
            'Kaffee groß': {
                'name': 'Kaffee',
                'size': 'groß',
                'price': '€ 1,49'
            },
            'Cappuccino klein': {
                'name': 'Cappuccino',
                'size': 'klein',
                'price': '€ 1,49'
            },
            'Cappuccino groß': {
                'name': 'Cappuccino',
                'size': 'groß',
                'price': '€ 2,19'
            },
            'Latte Macchiato groß': {
                'name': 'Latte Macchiato',
                'size': 'groß',
                'price': '€ 2,19'
            },
            'Heißes Kakaogetränk klein': {
                'name': 'Heißes Kakaogetränk',
                'size': 'klein',
                'price': '€ 1,49'
            },
            'Tee klein': {
                'name': 'Tee',
                'size': 'klein',
                'price': '€ 1,39'
            },
            'McSundae Eisbecher': {
                'name': 'McSundae Eisbecher',
                'size': '',
                'price': '€ 1,00'
            },
            'McFlurry': {
                'name': 'McFlurry',
                'size': '',
                'price': '€ 1,99'
            },
            'Milchshake klein': {
                'name': 'Milchshake',
                'size': 'klein',
                'price': '€ 1,69'
            },
            'Milchshake groß': {
                'name': 'Milchshake',
                'size': 'groß',
                'price': '€ 1,99'
            },
            'Bio Apfeltüte': {
                'name': 'Bio Apfeltüte',
                'size': '',
                'price': '€ 1,29'
            },
            'Heiße Apfeltasche': {
                'name': 'Heiße Apfeltasche',
                'size': '',
                'price': '€ 1,00'
            }
        }
    };

    var data = prices.data,
        list = $('li.isotope-item');

    [].forEach.call(list, function (item) {
        var $item = $(item),
            link = $item.find('span.title'),
            node = link.clone(),
            title;
        //ignore 'new' tags
        node.find('em').remove();
        title = node.text().replace('®', '').trim();
        //update text
        if (data[title]) {
            link.text(title + ' (' + data[title].price + ')');
        }
    });


})();
