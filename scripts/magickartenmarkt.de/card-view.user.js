// ==UserScript==
// @name         card view: add average card price to localstorage (used by other scripts)
// @description  https://github.com/solygen/userscripts/blob/master/doc/magickartenmarkt.de.md#card-viewuserjs
// @version      0.0.2
// @icon         https://www.magickartenmarkt.de/Products/Singles/Magic+2010/img/c0a10b062a8c3b48a5c29b779b3ac51e/static/misc/favicon-96x96.png
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js
//
// @include      https://www.magickartenmarkt.de/Products/Singles/*
// @include      https://www.magiccardmarket.eu/Products/Singles/*
// @include      https://fr.magiccardmarket.eu/Products/Singles/*
// @include      https://es.magiccardmarket.eu/Products/Singles/*
// @include      https://id.magiccardmarket.eu/Products/Singles/*
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts/magickartenmarkt.de/card-view.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts/magickartenmarkt.de/card-view.user.js
// @homepage     https://github.com/solygen/userscripts

// ==/UserScript==

(function () {

    'use strict';

    //get chart node
    var name = document.title.split('(')[0].trim(),
        node = document.querySelector('.availTable .cell_2_1'),
        average = parseFloat(node.textContent.replace('€', '').replace(',', '.'), 10);

    //add current price to local storage
    localStorage.setItem(name, average);

})();
