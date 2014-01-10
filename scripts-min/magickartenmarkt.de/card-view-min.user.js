// ==UserScript==
// @name         card view: add average card price (sold)
// @description  magiccardmarket.eu, magickartenmarkt.de
// @version      0.0.2
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js
//
// @include      https://www.magickartenmarkt.de/*.prod
// @include      https://www.magiccardmarket.eu/*.prod
// @include      https://fr.magiccardmarket.eu/*.prod
// @include      https://es.magiccardmarket.eu/*.prod
// @include      https://id.magiccardmarket.eu/*.prod
//
// @include      https://www.magickartenmarkt.de/?mainPage=register
// @include      https://www.magiccardmarket.eu/?mainPage=register
// @include      https://fr.magiccardmarket.eu/?mainPage=register
// @include      https://es.magiccardmarket.eu/?mainPage=register
// @include      https://id.magiccardmarket.eu/?mainPage=register
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts-min/magickartenmarkt.de/card-view-min.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts-min/magickartenmarkt.de/card-view-min.user.js
// @homepage     https://github.com/solygen/userscripts
// ==/UserScript==
!function(){"use strict";//get chart node
var a=$($.parseHTML($("embed").attr("flashvars").split("dataXML=").splice(1,1)[0])).find("line"),//i18n
b="de"===(navigator.language||navigator.userLanguage)?"Durchschnittspreis VK":"Average price (sold)",//extract data
c=a.attr("startvalue"),d=a.attr("endvalue"),e=String(parseFloat(c+d).toFixed(2)+"  €").replace(".",","),f=document.title.split("(")[0].trim();//add current price to local storage
localStorage.setItem(f,parseFloat(c+d).toFixed(2)),//remoe old one
$(".custom").remove();//add data to dom
var g=$($(".availTable").find("tr")[0]).clone();g.css("font-size","larger").css("color","chartreuse").addClass("custom"),g.find(".cell_0_1").text(e),g.find(".cell_0_0").text(b),$(".availTable").prepend(g);// in case you would leave this field blank, please add my username. There are absolutly no disadvantages for you.
var h=$('input[name="reg_referrer"]');h.length&&""===h.val()&&h.val("solygen")}();