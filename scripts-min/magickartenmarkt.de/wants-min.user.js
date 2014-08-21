// ==UserScript==
// @name         wants: add prices
// @description  https://github.com/solygen/userscripts/blob/master/doc/magickartenmarkt.de.md#wants-viewuserjs
// @version      0.0.2
// @icon         https://www.magickartenmarkt.de/Products/Singles/Magic+2010/img/c0a10b062a8c3b48a5c29b779b3ac51e/static/misc/favicon-96x96.png
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
!function(){"use strict";var a=$($.find(".col_2")).find("a"),b=" ★",c="";//'\u2606';
//replace start price with average price sold
$.each(a,function(a,b){var c=$(b),d=$(c.parent().parent()),e=c.text().trim(),f=localStorage.getItem(e)||"";d.find(".col_12").text(f?(f+"  €").replace(".",","):"")});//adjust header (keep it sortable)
var d=$(".headerCell_10").html().split("<");d[0]="&empty;",$(".headerCell_12").html(d.join("<")),//get price level gather by browse view
a=$($.find(".sellerTable .col_0")),$.each(a,function(a,d){var e=$(d),f=$(e.parent()),g=f.find(".col_3"),h=e.text().split("(")[0].trim(),i=localStorage.getItem("seller:"+h)||void 0;i&&g.text("("+i+") ");//flag favorite users
var j=localStorage.getItem("favorite:"+h)?b:c,k=$('<span class="favorite" style="color: red;">').on("click",function(){toggle(h)}).append(j);e.append(k)})}();