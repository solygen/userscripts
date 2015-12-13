// ==UserScript==
// @name         pandoc.org: extend textarea
// @description  pandoc.org
// @version      1.0.1
// @grant        none
// @icon
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js
// @require      https://rawgit.com/jackmoore/autosize/master/dist/autosize.min.js
// @license      MIT
//
// @include      http://pandoc.org/try/*
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts/pandoc.org/expand.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts/pandoc.org/expand.user.js
// @homepage     https://github.com/solygen/userscripts

// ==/UserScript==


(function () {

    'use strict';

    // use full space
    $('.container').addClass('container-fluid').removeClass('container');

    // 3.000 -> 100.000
    $('textarea').attr('maxlength', '100000');

    // add autosize feature
    autosize($('textarea'));

    // do not overwrite predefined from/to selection
    if (!window.location.search) {
        $('#from')
            .find('option').removeAttr('selected')
            .end()
            .find('option[value="mediawiki"]').attr('selected', 'true');

        $('#to')
            .find('option').removeAttr('selected')
            .end()
            .find('option[value="markdown_github"]').attr('selected', 'true');
    }
})();
