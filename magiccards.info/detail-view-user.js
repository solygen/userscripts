// ==UserScript==
// @name         link to mkm/mcm when clicking on card image
// @description  magiccards.info
// @version      0.0.1
// @namespace    https://github.com/solygen/userscripts-and-bookmarklets
// @repository   https://github.com/solygen/userscripts-and-bookmarklets.git
// @license      MIT
//
// @include      http://magiccards.info/*.html
//
// @updateURL    https://rawgithub.com/solygen/userscripts-and-bookmarklets/master/magiccards.info/detail-view-bookmarklet.js
// @downloadURL  https://rawgithub.com/solygen/userscripts-and-bookmarklets/master/magiccards.info/detail-view-bookmarklet.js
// @homepage     https://github.com/solygen/userscripts-and-bookmarklets

// ==/UserScript==

'use strict';

var cardname, image, container, link,
    url = ((navigator.language || navigator.userLanguage) === 'de' ? 'http://www.magickartenmarkt.de' : 'http://www.magiccardmarket.eu'),
    query = '/?mainPage=showSearchResult&searchFor=',
    getImage = function () {
        var list = document.getElementsByTagName('img');
        for (var i = 0; i < list.length; i++) {
            if(list[i].getAttribute('src').indexOf('jpg') >= 0) {
                return list[i];
            }
        }
    },
    copyToClipboard = function () {
        window.prompt ('Copy to clipboard: Ctrl+C, Enter', name);
    };

//get image
image = getImage();
cardname = image.getAttribute('alt');
container = image.parentNode;

//create link
link = document.createElement('a');
link.href = url + query + cardname;

//create dom struct (container -> link -> image)
link.appendChild(image);
container.appendChild(link);
