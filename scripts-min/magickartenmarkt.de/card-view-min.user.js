// ==UserScript==
// @name         card view: add average card price to localstorage (used by other scripts)
// @description  https://github.com/solygen/userscripts/blob/master/doc/magickartenmarkt.de.md#card-viewuserjs
// @version      0.0.2
// @icon         https://raw2.github.com/solygen/userscripts/master/doc/icon/icon_032.png
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
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts-min/magickartenmarkt.de/card-view-min.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts-min/magickartenmarkt.de/card-view-min.user.js
// @homepage     https://github.com/solygen/userscripts
// ==/UserScript==
!function(){"use strict";//get chart node
var a=document.title.split("(")[0].trim(),b=document.querySelector(".availTable .cell_2_1"),c=parseFloat(b.textContent.replace("€","").replace(",","."),10);//add current price to local storage
localStorage.setItem(a,c)}();