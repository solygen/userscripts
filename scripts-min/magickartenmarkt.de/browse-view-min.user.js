// ==UserScript==
// @name         browse view: cleaner view by hiding duplicate name information
// @description  https://github.com/solygen/userscripts/blob/master/doc/magickartenmarkt.de.md#browser-viewuserjs
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
!function(){"use strict";function a(a){var b=a.find(".col_9").clone();b.removeClass("col_9").addClass("col_9a").insertBefore(a.find(".col_9"))}function b(a,b,c){a&&(b<=parseFloat(a,10)+k?c.find(".col_9").css("color","green"):c.find(".col_9").css("color","red"))}function c(a){var b=a.find(".col_9").text().replace(",",".").replace("€","").trim();return parseFloat(b,10)}function d(){var a,b=0;//sum
$.each(l,function(){b+=parseFloat(this)||0}),//average
a=Math.round(b/l.length*100)/100,//add level to dom
$(".H1_PageTitle").text($(".H1_PageTitle").text()+" ("+a+")")}var e,f,g=$(".navBarTopText").length?$($(".navBarTopText").children()[0]):$($("#siteContents").children()[2]),h=$("tbody"),i=$("tbody").find("tr"),j=0,//flag green
k=.1,l=[];//sort cards (name, price)
!function(){i.sort(function(a,b){function c(a){var b=parseFloat($(a).find(".col_9").text().trim(),10),c=$(a);//hack: +1000 to get right sort order (e.g. 8, 12, 102)
//consider playset
return c.find(".col_7").find("img").size()&&(b/=4),c.find(".col_2").text()+b+1e3}var d=c(a),e=c(b);return d.localeCompare(e)})}(),//apply order
function(){h.empty(),$.each(i,function(a,b){h.append(b)})}(),//add column header
function(){var a=$(".col_price").clone();a.removeClass("col_price").addClass("col_price_sold").html("&empty;").insertBefore($(".col_price")),//expand footer row
$(".footerCell_0").attr("colspan",13)}(),//process entries
e=$($.find(".col_2")).find("a"),$.each(e,function(d,e){var g=$(e),h=$(g.parent().parent()),i=g.text(),k=localStorage.getItem(i),m=c(h);//consider playset
h.find(".col_7").find("img").size()&&(m/=4),//average price (sold)
a(h),b(k,m,h),//set content of new cell and apply style
i===f?(g.empty(),h.css("font-weight",100).find(".col_9a").empty()):(j++,l.push(m/(k||m)),h.find(".col_9a").text(k?(k+"  €").replace(".",","):"")),//remember name
f=i}),//show price level
d(),//update hits value
g.text(j+" hits")}();