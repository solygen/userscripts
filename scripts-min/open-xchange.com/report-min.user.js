// ==UserScript==
// @name         reports with multiple tables: remove empty rows and put total tabel to top
// @description  bugs.open-xchange.com
// @version      0.0.1
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js
//
// @include      https://bugs.open-xchange.com/report.cgi?x_axis_field=*
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts-min/open-xchange.com/report-min.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts-min/open-xchange.com/report-min.user.js
// @homepage     https://github.com/solygen/userscripts
// ==/UserScript==
!function(){"use strict";setTimeout(function(){for(var a=$($(".yui-dt-rec")),b=a.length-1;b>=0;b--){var c=$(a[b]),d=!!c.find("a").length;d||c.remove()}//bigger font size and map email address to name
var e=[].slice.call(document.querySelectorAll(".yui-dt-liner"));e.forEach(function(a){a.setAttribute("style","font-size: 13pt"),-1!==a.textContent.indexOf("@open-xchange.com")&&(a.textContent=a.textContent.replace("@open-xchange.com",""),a.textContent=a.textContent.replace("."," "),a.textContent=a.textContent.replace(/\w\S*/g,function(a){return a.charAt(0).toUpperCase()+a.substr(1).toLowerCase()}))});//put total to top
var f=$('div[align="center"]').children("table"),g=$(f.splice(f.length-2,1)),h=g.clone();g.remove(),$('div[align="center"]').prepend(h);var i=$('div[align="center"]').children("h2"),j=$(i.splice(i.length-1,1)),k=j.clone();j.remove(),$('div[align="center"]').prepend(k)},500)}();