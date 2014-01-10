// ==UserScript==
// @name         wants: add prices
// @description  magiccardmarket.eu, magickartenmarkt.de
// @version      0.0.1
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js
//
// @include      https://www.magickartenmarkt.de/?mainPage=showWants*
// @include      https://www.magiccardmarket.eu/?mainPage=showWants*
// @include      https://fr.magiccardmarket.eu/?mainPage=showWants*
// @include      https://es.magiccardmarket.eu/?mainPage=showWants*
// @include      https://id.magiccardmarket.eu/?mainPage=showWants*
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts-min/magickartenmarkt.de/wants-min.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts-min/magickartenmarkt.de/wants-min.user.js
// @homepage     https://github.com/solygen/userscripts
// ==/UserScript==
!function(){"use strict";var a=$($.find(".col_2")).find("a");//replace start price column with average price (sold) 
$.each(a,function(a,b){var c=$(b),d=$(c.parent().parent()),e=c.text(),f=localStorage.getItem(e)||"";//set cell
d.find(".col_12").text(f?(f+"  €").replace(".",","):"")});//adjust header (keep it sortable)
var b=$(".headerCell_10").html().split("<");b[0]="&empty;",$(".headerCell_12").html(b.join("<"))}();