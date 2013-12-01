// ==UserScript==
// @name	magiccardmarket/magickartenmarkt (mkm) skip meta card page
// @version	0.0.1
// @namespace	https://github.com/solygen/userscripts-and-bookmarklets
// @repository	https://github.com/solygen/userscripts-and-bookmarklets.git
// @include	https://www.magickartenmarkt.de/?mainPage=showMetacard&idMetacard=*
// @include	https://www.magiccardmarket.eu/?mainPage=showMetacard&idMetacard=*
// @include	https://fr.magiccardmarket.eu/?mainPage=showMetacard&idMetacard=*
// @include	https://es.magiccardmarket.eu/?mainPage=showMetacard&idMetacard=*
// @include	https://id.magiccardmarket.eu/?mainPage=showMetacard&idMetacard=*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js
// @downloardURL https://raw.github.com/solygen/userscripts-and-bookmarklets/master/magickartenmarkt.de/metacard-bookmarklet.js
// @license	MIT

// ==/UserScript==

//redirect to first 'appears in' link
document.location = $($('.standard_content').find('a')[1]).attr('href')
