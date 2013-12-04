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
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts.min/bugs.open-xchange.com/report.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts.min/bugs.open-xchange.com/report.user.js
// @homepage     https://github.com/solygen/userscripts
// ==/UserScript==
!function(){"use strict";setTimeout(function(){for(var a=$($(".yui-dt-rec")),b=a.length-1;b>=0;b--){var c=$(a[b]),d=!!c.find("a").length;d||c.remove()}//put total to top
var e=$('div[align="center"]').children("table"),f=$(e.splice(e.length-2,1)),g=f.clone();f.remove(),$('div[align="center"]').prepend(g);var h=$('div[align="center"]').children("h2"),i=$(h.splice(h.length-1,1)),j=i.clone();i.remove(),$('div[align="center"]').prepend(j)},500)}();