// ==UserScript==
// @name         deck view: link to mkm/mcm when clicking on card image
// @description  magiccards.info
// @version      0.0.3
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js
//
// @include      http://magiccards.info/*.html
// @include      http://magiccards.info/query?*
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts-min/magiccards.info/detail-view-min.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts-min/magiccards.info/detail-view-min.user.js
// @homepage     https://github.com/solygen/userscripts
//
// ==/UserScript==
!function(){"use strict";var a,b,c,d,e="de"===(navigator.language||navigator.userLanguage)?"http://www.magickartenmarkt.de":"http://www.magiccardmarket.eu",f="/?mainPage=showSearchResult&searchFor=",g=function(){for(var a=document.getElementsByTagName("img"),b=[],c=0;c<a.length;c++)a[c].getAttribute("src").indexOf("jpg")>=0&&b.push(a[c]);return b},// copyToClipboard = function () {
//     window.prompt ('Copy to clipboard: Ctrl+C, Enter', name);
// },
h=function(){this.setAttribute("style","opacity: 0.90; border: 1px solid black")},i=function(){this.setAttribute("style","opacity: 1; border: 1px solid black")};//get image
b=g();//process each card image
for(var j=0;j<b.length;j++){var k=b[j];//add hover effect
$(k).hover(h,i),//gather data
a=k.getAttribute("alt"),c=k.parentNode,//create link and flag url for mkm/mcm user script
d=document.createElement("a"),d.href=e+f+a+"&redirect=true",d.title=e,//create dom hierarchy (container > link > image)
d.appendChild(k),c.appendChild(d)}// in case you would leave this field blank, please add my username. There are absolutly no disadvantages for you.
if($('input[name="reg_referrer"]').length){var l=$('input[name="reg_referrer"]');l.val("solygen")}}();