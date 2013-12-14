// ==UserScript==
// @name         fastfoodpreise: write prices to console as json
// @description  fastfoodpreise.de
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
!function(){"use strict";var a,b=document.querySelectorAll("tr"),c={};[].forEach.call(b,function(b){b.querySelector(".size")&&b.querySelector(".price")&&(a=b.querySelector("a")?b.querySelector("a").innerHTML.split("<")[0].replace("&nbsp;","").trim():a,size=b.querySelector(".size").innerHTML,key=""!==size?a+" "+b.querySelector(".size").innerHTML:a,c[key]={name:a,size:size,price:b.querySelector(".price").innerHTML})}),console.log(JSON.stringify(c,void 0,4))}();