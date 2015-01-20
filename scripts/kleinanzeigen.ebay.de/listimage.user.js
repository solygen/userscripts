// ==UserScript==
// @name         listimage
// @description  kleinanzeigen.ebay.de
// @version      1.0.0
// @icon         http://www.google.com/s2/favicons?domain=kleinanzeigen.ebay.de
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
//
// @include      http://kleinanzeigen.ebay.de/anzeigen/*
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts/kleinanzeigen.ebay.de/listimage.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts/kleinanzeigen.ebay.de/listimage.user.js
// @homepage     https://github.com/solygen/userscripts

// ==/UserScript==

(function () {

    'use strict';
    var count = 0, list, nodelist,
        imagelist, image, url, link,
        id;

    id = setInterval(
        function () {
            imagelist = $('#srchrslt-adtable .c-img-imgbx');

            if (count !== imagelist.length) {

                nodelist = $('#srchrslt-adtable .ad-listitem-image a:not(".placeholder-image")');
                list = Array.prototype.slice.call(nodelist,0);

                list.forEach(function (node) {
                    node = $(node);
                    image = node.find('img');
                    url = image.attr('src') || '';

                    if (url.length) {
                        //remove img tag
                        image.remove();

                        //get full size url
                        url = url.replace('_9.', '_3.')
                                 .replace('(', '');
                        link = "url(" + url + ")";

                        //change style
                        node.css({
                            'height': '140px',
                            'width': '140px',
                            'background-image': encodeURI(link),
                            'background-position': 'center',
                            'background-size': 'cover',
                            '-webkit-background-size': 'cover',
                            '-moz-background-size': 'cover',
                            '-o-background-size': 'cover'
                        });
                    }
                });
                count = imagelist.length;
                //done
                if (count === list.count)
                    clearInterval(id);
            }
        }, 500);

})();
