// ==UserScript==
// @name         fastfoodpreise: write prices to console as json
// @description  deckstats.net
// @version      0.0.1
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
//
// @include      http://www.fastfoodpreise.de/preisliste/*.html
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts-min/fastfoodpreise.de/toJson-min.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts-min/fastfoodpreise.de/toJson-min.user.js
// @homepage     https://github.com/solygen/userscripts
// ==/UserScript==
!function(){"use strict";var a=document.querySelectorAll("tr"),b={};[].forEach.call(a,function(a){a.querySelector("a")&&a.querySelector(".size")&&a.querySelector(".price")&&(b[a.querySelector("a").innerHTML.split("<")[0].replace("&nbsp;","").trim()]={size:a.querySelector(".size").innerHTML,price:a.querySelector(".price").innerHTML})}),console.log(JSON.stringify(b,void 0,4))}();