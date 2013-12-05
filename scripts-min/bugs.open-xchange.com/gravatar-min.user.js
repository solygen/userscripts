// ==UserScript==
// @name           Add Gravatar Everywhere
// @namespace      http://docwhat.gerf.org/
// @description    Adds gravatars to all a@href="mailto:" links
// @include      https://bugs.open-xchange.com/show_bug.cgi*
// ==/UserScript==
!function(){/* bits per input character. 8 - ASCII; 16 - Unicode      */
/*
     * These are the functions you'll usually want to call
     * They take string arguments and return either hex or base-64 encoded strings
     */
function a(a){return k(b(j(a),a.length*m))}/*
     * Calculate the MD5 of an array of little-endian words, and a bit length
     */
function b(a,b){/* append padding */
a[b>>5]|=128<<b%32,a[(b+64>>>9<<4)+14]=b;for(var c=1732584193,i=-271733879,j=-1732584194,k=271733878,l=0;l<a.length;l+=16){var m=c,n=i,o=j,p=k;c=d(c,i,j,k,a[l+0],7,-680876936),k=d(k,c,i,j,a[l+1],12,-389564586),j=d(j,k,c,i,a[l+2],17,606105819),i=d(i,j,k,c,a[l+3],22,-1044525330),c=d(c,i,j,k,a[l+4],7,-176418897),k=d(k,c,i,j,a[l+5],12,1200080426),j=d(j,k,c,i,a[l+6],17,-1473231341),i=d(i,j,k,c,a[l+7],22,-45705983),c=d(c,i,j,k,a[l+8],7,1770035416),k=d(k,c,i,j,a[l+9],12,-1958414417),j=d(j,k,c,i,a[l+10],17,-42063),i=d(i,j,k,c,a[l+11],22,-1990404162),c=d(c,i,j,k,a[l+12],7,1804603682),k=d(k,c,i,j,a[l+13],12,-40341101),j=d(j,k,c,i,a[l+14],17,-1502002290),i=d(i,j,k,c,a[l+15],22,1236535329),c=e(c,i,j,k,a[l+1],5,-165796510),k=e(k,c,i,j,a[l+6],9,-1069501632),j=e(j,k,c,i,a[l+11],14,643717713),i=e(i,j,k,c,a[l+0],20,-373897302),c=e(c,i,j,k,a[l+5],5,-701558691),k=e(k,c,i,j,a[l+10],9,38016083),j=e(j,k,c,i,a[l+15],14,-660478335),i=e(i,j,k,c,a[l+4],20,-405537848),c=e(c,i,j,k,a[l+9],5,568446438),k=e(k,c,i,j,a[l+14],9,-1019803690),j=e(j,k,c,i,a[l+3],14,-187363961),i=e(i,j,k,c,a[l+8],20,1163531501),c=e(c,i,j,k,a[l+13],5,-1444681467),k=e(k,c,i,j,a[l+2],9,-51403784),j=e(j,k,c,i,a[l+7],14,1735328473),i=e(i,j,k,c,a[l+12],20,-1926607734),c=f(c,i,j,k,a[l+5],4,-378558),k=f(k,c,i,j,a[l+8],11,-2022574463),j=f(j,k,c,i,a[l+11],16,1839030562),i=f(i,j,k,c,a[l+14],23,-35309556),c=f(c,i,j,k,a[l+1],4,-1530992060),k=f(k,c,i,j,a[l+4],11,1272893353),j=f(j,k,c,i,a[l+7],16,-155497632),i=f(i,j,k,c,a[l+10],23,-1094730640),c=f(c,i,j,k,a[l+13],4,681279174),k=f(k,c,i,j,a[l+0],11,-358537222),j=f(j,k,c,i,a[l+3],16,-722521979),i=f(i,j,k,c,a[l+6],23,76029189),c=f(c,i,j,k,a[l+9],4,-640364487),k=f(k,c,i,j,a[l+12],11,-421815835),j=f(j,k,c,i,a[l+15],16,530742520),i=f(i,j,k,c,a[l+2],23,-995338651),c=g(c,i,j,k,a[l+0],6,-198630844),k=g(k,c,i,j,a[l+7],10,1126891415),j=g(j,k,c,i,a[l+14],15,-1416354905),i=g(i,j,k,c,a[l+5],21,-57434055),c=g(c,i,j,k,a[l+12],6,1700485571),k=g(k,c,i,j,a[l+3],10,-1894986606),j=g(j,k,c,i,a[l+10],15,-1051523),i=g(i,j,k,c,a[l+1],21,-2054922799),c=g(c,i,j,k,a[l+8],6,1873313359),k=g(k,c,i,j,a[l+15],10,-30611744),j=g(j,k,c,i,a[l+6],15,-1560198380),i=g(i,j,k,c,a[l+13],21,1309151649),c=g(c,i,j,k,a[l+4],6,-145523070),k=g(k,c,i,j,a[l+11],10,-1120210379),j=g(j,k,c,i,a[l+2],15,718787259),i=g(i,j,k,c,a[l+9],21,-343485551),c=h(c,m),i=h(i,n),j=h(j,o),k=h(k,p)}return Array(c,i,j,k)}/*
     * These functions implement the four basic operations the algorithm uses.
     */
function c(a,b,c,d,e,f){return h(i(h(h(b,a),h(d,f)),e),c)}function d(a,b,d,e,f,g,h){return c(b&d|~b&e,a,b,f,g,h)}function e(a,b,d,e,f,g,h){return c(b&e|d&~e,a,b,f,g,h)}function f(a,b,d,e,f,g,h){return c(b^d^e,a,b,f,g,h)}function g(a,b,d,e,f,g,h){return c(d^(b|~e),a,b,f,g,h)}/*
     * Add integers, wrapping at 2^32. This uses 16-bit operations internally
     * to work around bugs in some JS interpreters.
     */
function h(a,b){var c=(65535&a)+(65535&b),d=(a>>16)+(b>>16)+(c>>16);return d<<16|65535&c}/*
     * Bitwise rotate a 32-bit number to the left.
     */
function i(a,b){return a<<b|a>>>32-b}/*
     * Convert a string to an array of little-endian words
     * If chrsz is ASCII, characters >255 have their hi-byte silently ignored.
     */
function j(a){for(var b=Array(),c=(1<<m)-1,d=0;d<a.length*m;d+=m)b[d>>5]|=(a.charCodeAt(d/m)&c)<<d%32;return b}/*
     * Convert an array of little-endian words to a hex string.
     */
function k(a){for(var b=l?"0123456789ABCDEF":"0123456789abcdef",c="",d=0;d<4*a.length;d++)c+=b.charAt(a[d>>2]>>d%4*8+4&15)+b.charAt(a[d>>2]>>d%4*8&15);return c}// md5 function from http://pajhome.org.uk/crypt/md5/
/*
     * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
     * Digest Algorithm, as defined in RFC 1321.
     * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
     * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
     * Distributed under the BSD License
     * See http://pajhome.org.uk/crypt/md5 for more info.
     */
/*
     * Configurable variables. You may need to tweak these to be compatible with
     * the server-side, but the defaults work in most cases.
     */
var l=0,m=8,n=function(b){var c=GM_getValue(b);return c||(c=a(b),GM_setValue(b,c)),c},o=function(a){"string"==typeof a&&(a=document.getElementById(a));var b=a.href.replace(/^mailto:/,"").replace(/\?.*$/,"").toLowerCase(),c=["http://www.gravatar.com/avatar.php?gravatar_id=",n(b),"&d=identicon",//"&d=wavatar",
//"&d=monsterid",
"&s=",24].join("");a.innerHTML='<img src="'+c+'" style="border: none; vertical-align: middle"/> '+a.innerHTML},p=function(){try{var a,b,c=document.getElementsByTagName("a"),d=c.length,e=/^mailto:.*@/;for(b=0;d>b;b++)a=c[b],e.test(a.href)&&!function(){var b=a;setTimeout(function(){o(b)},10)}()}catch(f){}};window.addEventListener("load",p,!1)}();