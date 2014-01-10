// ==UserScript==
// @name         browse view: cleaner view by hiding duplicate name information
// @description  magiccardmarket.eu, magickartenmarkt.de
// @version      0.0.1
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js
//
// @include      https://www.magickartenmarkt.de/?mainPage=browseUserProducts*
// @include      https://www.magiccardmarket.eu/?mainPage=browseUserProducts*
// @include      https://fr.magiccardmarket.eu/?mainPage=browseUserProducts*
// @include      https://es.magiccardmarket.eu/?mainPage=browseUserProducts*
// @include      https://id.magiccardmarket.eu/?mainPage=browseUserProducts*
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts-min/magickartenmarkt.de/browse-view-min.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts-min/magickartenmarkt.de/browse-view-min.user.js
// @homepage     https://github.com/solygen/userscripts
// ==/UserScript==
!function(){"use strict";function a(a){var b=a.find(".col_9").clone();b.removeClass("col_9").addClass("col_9a").insertBefore(a.find(".col_9"))}function b(a,b,c){a&&(b<=parseFloat(a,10)+j?c.find(".col_9").css("color","green"):c.find(".col_9").css("color","red"))}function c(a){var b=a.find(".col_9").text().replace(",",".").replace("€","").trim();return parseFloat(b,10)}var d,e=$(".navBarTopText").length?$($(".navBarTopText").children()[0]):$($("#siteContents").children()[2]),f=$("tbody"),g=$("tbody").find("tr"),h=$($.find(".col_2")).find("a"),i=0,//flag green
j=.1;//sort cards (name, price)
!function(){g.sort(function(a,b){//TODO: price > 9.99
var c=$(a).find(".col_2").text()+$(a).find(".col_9").text().trim(),d=$(b).find(".col_2").text()+$(b).find(".col_9").text().trim();return c.localeCompare(d)})}(),//apply order
function(){f.empty(),$.each(g,function(a,b){f.append(b)})}(),//add column header
function(){var a=$(".col_price").clone();a.removeClass("col_price").addClass("col_price_sold").html("&empty;").insertBefore($(".col_price")),//expand footer row
$(".footerCell_0").attr("colspan",13)}(),//process entries
$.each(h,function(e,f){var g=$(f),h=$(g.parent().parent()),j=g.text(),k=localStorage.getItem(j);//average price (sold)
a(h),b(k,c(h),h),//set content of new cell and apply style
j===d?(g.empty(),h.css("font-weight",100).find(".col_9a").empty()):(i++,h.find(".col_9a").text(k?(k+"  €").replace(".",","):"")),//remember name
d=j}),//update hits value
e.text(i+" hits")}();