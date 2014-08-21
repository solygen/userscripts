// ==UserScript==
// @name         browse view: cleaner view by hiding duplicate name information
// @description  https://github.com/solygen/userscripts/blob/master/doc/magickartenmarkt.de.md#browse-viewuserjs
// @version      0.0.2
// @icon         https://www.magickartenmarkt.de/Products/Singles/Magic+2010/img/c0a10b062a8c3b48a5c29b779b3ac51e/static/misc/favicon-96x96.png
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
!function(){"use strict";function a(a){var b=$(a.children()[10]).clone();b.addClass("col_price_sold").insertBefore($(a.children()[13]))}function b(a,b,c){var d=$(c.children()[14]);a&&(b<=parseFloat(a,10)+l?d.css("color","green"):d.css("color","red"))}function c(a){var b=$(a.children()[13]).text().replace(",",".").replace("€","").trim();return parseFloat(b,10)}function d(a){var b=$(".favorite").text()===n;b?($(".favorite").text(NOFAVORITE),localStorage.removeItem("favorite:"+a)):($(".favorite").text(n),localStorage.setItem("favorite:"+a,!b))}function e(){var a,b=$(".H1_PageTitle").text().split(" ")[2],c=0;//sum
$.each(m,function(){c+=parseFloat(this)||0}),//average
a=Math.round(c/m.length*100)/100,//add level to dom/local storage
$(".H1_PageTitle").text($(".H1_PageTitle").text()+" ("+a+")"),a=localStorage.setItem("seller:"+b,a);//add star
var e=localStorage.getItem("favorite:"+b)?n:NOFAVORITE,f=$('<span class="favorite" style="color: red; cursor: pointer">').on("click",function(){d(b)}).append(e);$(".H1_PageTitle").append(f)}var f,g,h=$(".navBarTopText").length?$($(".navBarTopText").children()[0]):$($("#siteContents").children()[2]),i=$("tbody"),j=$("tbody").find("tr"),k=0,//flag green
l=.1,m=[],n=" ★";//' \u2665',
NOFAVORITE=" ☆",//'\u2661';
//sort cards (name, price)
function(){j.sort(function(a,b){function c(a){{var b=parseFloat($($(a).children()[13]).text().trim().replace(",",".").replace("€",""),10);$(a)}//hack: +1000 to get right sort order (e.g. 8, 12, 102)
//consider playset
return $($(a).children()[9]).find("img").size()&&(b/=4),$($(a).children()[2]).find("a").text()+b+1e3}var d=c(a),e=c(b);return d.localeCompare(e)})}(),//apply order
function(){i.empty(),$.each(j,function(a,b){i.append(b)})}(),//add column header
function(){var a=$(".col_price").clone();a.removeClass("col_price").addClass("col_price_sold").html("&empty;").insertBefore($(".col_price")),//expand footer row
$(".footerCell_0").attr("colspan",13)}(),//process entries
f=$($.find(".dualTextDiv")).find("a"),$.each(f,function(d,e){var f=$(e),h=$(f.parent().parent().parent().parent()),i=f.text(),j=localStorage.getItem(i),l=c(h);//consider playset
$(h.children()[10]).find("img").size()&&(l/=4),//average price (sold)
a(h),b(j,l,h),//set content of new cell and apply style
i===g?($(h.children()[2]).empty(),h.css("font-weight",100).find(".col_price_sold").empty()):(k++,m.push(l/(j||l)),h.find(".col_price_sold").text(j?(j+"  €").replace(".",","):"")),//remember name
g=i}),//show price level
e(),//update hits value
h.text(k+" hits")}();