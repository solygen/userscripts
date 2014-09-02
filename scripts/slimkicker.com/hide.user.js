// ==UserScript==
// @name         slimkicker.com: hide some ui elements
// @description  slimkicker.com
// @version      0.0.1
// @icon         https://raw2.github.com/solygen/userscripts/master/doc/icon/icon_032.png
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
//
// @include      http://www.slimkicker.com/*
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts/slimkicker.com/hide.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts/slimkicker.com/hide.user.js
// @homepage     https://github.com/solygen/userscripts

// ==/UserScript==

(function () {

    'use strict';

    $($.find('#tabNutrition')).remove();
	$($.find('#tabForums')).remove();
	$($.find('#tabFriends')).remove();
	$($.find('#tabBlog')).remove();

	$($.find('.box.menu')).remove();
	$($.find('#banner')).remove();
	$($.find('#footer')).remove();
	$($.find('#header')).addClass('top');
	//$($($.find('#sidebar')).find('img')).remove();

	$($.find('#tabs2-bt')).click();
})();
