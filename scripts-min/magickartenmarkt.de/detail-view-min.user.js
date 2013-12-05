// ==UserScript==
// @name         add average card price (sold)
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
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts-min/magickartenmarkt.de/detail-view-min.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts-min/magickartenmarkt.de/detail-view-min.user.js
// @homepage     https://github.com/solygen/userscripts
// ==/UserScript==
!function(){"use strict";//get chart node
var a=$($.parseHTML($("embed").attr("flashvars").split("dataXML=").splice(1,1)[0])).find("line"),b=a.attr("startvalue"),c=a.attr("endvalue"),d=String(parseFloat(b+c).toFixed(2)+"  €").replace(".",",");//remoe old one
$(".custom").remove();//add data to dom
var e=$($(".availTable").find("tr")[0]).clone();e.css("font-size","larger").css("color","chartreuse").addClass("custom"),e.find(".cell_0_1").text(d),e.find(".cell_0_0").text("Durchschnittspreis VK"),$(".availTable").prepend(e)}();