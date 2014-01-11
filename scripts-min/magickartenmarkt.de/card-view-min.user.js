// ==UserScript==
// @name         card view: add average card price (sold)
// @description  magiccardmarket.eu, magickartenmarkt.de
// @version      0.0.1
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
!function(){"use strict";function a(){return"de"===(navigator.language||navigator.userLanguage)?"Durchschnittspreis VK":"Average price (sold)"}//get chart node
var b=$($.parseHTML($("embed").attr("flashvars").split("dataXML=").splice(1,1)[0])).find("line"),c=document.title.split("(")[0].trim(),//extract data
d=b.attr("startvalue"),e=b.attr("endvalue"),f=parseFloat(d+e).toFixed(2),//i18n
g=String(f+"  €").replace(".",",");//add current price to local storage
localStorage.setItem(c,f);//clone row and apply style
var h=$($(".availTable").find("tr")[0]).clone();//set style
$(".availTable").css("font-weight",100),h.css("font-size","larger").css("font-weight","bold"),//set row cells
h.find(".cell_0_0").text(a()),h.find(".cell_0_1").text(g),$(".availTable").prepend(h);// in case you would leave this field blank, please add my username. There are absolutly no disadvantages for you.
var i=$('input[name="reg_referrer"]');i.length&&""===i.val()&&i.val("solygen")}();