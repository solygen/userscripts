// ==UserScript==
// @name         appsuite: age
// @version      0.0.1
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
// 
// @include      http://ox/appsuite/*
// @include      https://appsuite-dev.open-xchange.com*
// @include      https://appsuite-sprint.open-xchange.com*
// @include      http://docs-dev-cont-nightly.oxhh.int/appsuite*
// @include      https://ui-dev.open-xchange.com*
//
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts-min/open-xchange.com/appsuite-min.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts-min/open-xchange.com/appsuite-min.user.js
// @homepage     https://github.com/solygen/userscripts
// ==/UserScript==

(function () {

    'use strict';
    
    function ago(time) {
        var periods = ['sec', 'min', 'hour', 'day', 'week', 'month', 'year', 'decade'],
            lengths = ['60','60','24','7','4.35','12','10'],
            now = new Date(),
            difference = ((now - time) / 1000) - 3600;
        
        for(var j = 0; difference >= lengths[j] && j < lengths.length-1; j++) {
            difference /= lengths[j];
        }
        
        difference = Math.round(difference);
        
        if(difference !== 1) {
            periods[j] += "s";
        }
        
        return difference + ' ' + periods[j];
    }
    
    var id = setInterval(function () {

        var da = new Date(),
            node = $($('.launchers').find('li')[0]).clone();
        
        if (!node.length) return false;
        
        
        //set date by ox version
        da.setYear(ox.version.substr(-15, 4));
        da.setMonth((ox.version.substr(-11, 2)) -1);
        da.setDate(ox.version.substr(-9, 2));
        da.setHours(ox.version.substr(-6, 2));
        da.setMinutes(ox.version.substr(-4, 2));
        da.setSeconds(ox.version.substr(-2, 2));
        
        //append to DOM
        /* jshint -W107 */
        node.find('a').text(ago(da))
                    .attr('href', 'javascript: ox.cache.clear().done(function() { console.log("cache clear"); })')
                    .css('color', 'rgb(255, 122, 0)');
        /* jshint +W107 */
        $('.launchers').prepend(node);
        clearInterval(id);
    }, 500);

})();