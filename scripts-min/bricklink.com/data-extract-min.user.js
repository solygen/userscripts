// ==UserScript==
// @name         bricklink
// @description  extract prices as json to browser console
// @version      0.0.1
// @icon         https://raw2.github.com/solygen/userscripts/master/doc/icon/icon_032.png
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
// @require      https://code.jquery.com/jquery-2.1.0.min.js
//
// @include     http://www.bricklink.com/catalogPG.asp?P=*
//
// ==/UserScript==
!function(){var a=$($("table.fv")[7]).find("tr"),b=[];$.each(a,function(a,c){var d=$(c).children(),e=$($(d[0]).find("img")[1]).attr("src"),f=parseInt($(d[1]).text(),10),g=parseFloat($(d[2]).text().replace("~EUR",""),10);//ignore headlines
e&&(//get flag from filename
e=e.split("/")[1].split(".")[0],//add to list
b.push({quantity:f,unit_price:g,seller_country:e}))}),console.log(JSON.stringify(b,2,void 0))}();