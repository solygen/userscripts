// ==UserScript==
// @name         appsuite: age
// @version      1.0.1
// @grant        none
// @icon         http://www.google.com/s2/favicons?domain=www.ox.io
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
// @updateURL    https://rawgithub.com/solygen/userscripts/master/scripts/open-xchange.com/appsuite.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts/master/scripts/open-xchange.com/appsuite.user.js
// @homepage     https://github.com/solygen/userscripts
// ==/UserScript==

(function () {

    'use strict';

    //logger
    unsafeWindow.ox.log = {
        add: function (value, key) {
            key = key || 'general';
            unsafeWindow.ox.logdata = unsafeWindow.ox.logdata || {};
            unsafeWindow.ox.logdata[key] =  unsafeWindow.ox.logdata[key] || [];
            unsafeWindow.ox.logdata[key].push(value);
            //unsafeWindow.ox.logdata['root'].push(value + ' [' + key + ']');
        },
        show: function (id) {
            unsafeWindow.ox.logdata = unsafeWindow.ox.logdata || {};
            console.log(JSON.stringify(unsafeWindow.ox.logdata[id] || [], undefined, 2));
        },
        clear: function (id) {
            unsafeWindow.ox.logdata = unsafeWindow.ox.logdata || {};
            if (id) {
                unsafeWindow.ox.logdata[id] = undefined;
            } else {
                unsafeWindow.ox.logdata = undefined;
            }
        }
    };

    function ago(time) {
        var periods = ['sec', 'min', 'hour', 'day', 'week', 'month', 'year', 'decade'],
            lengths = ['60', '60', '24', '7', '4.35', '12', '10'],
            now = new Date(),
            difference = ((now - time) / 1000) - 3600,
            j;

        for (j = 0; difference >= lengths[j] && j < lengths.length - 1; j++) {
            difference /= lengths[j];
        }

        difference = Math.round(difference);

        if (difference !== 1) {
            periods[j] += 's';
        }

        return difference + ' ' + periods[j];
    }

    var id = setInterval(function () {

        var da = new Date(),
            node = $($('.launchers').find('li')[0]).clone();

        if (!node.length) return false;


        //set date by ox version
        da.setYear(ox.version.substr(-15, 4));
        da.setMonth((ox.version.substr(-11, 2)) - 1);
        da.setDate(ox.version.substr(-9, 2));
        da.setHours(ox.version.substr(-6, 2));
        da.setMinutes(ox.version.substr(-4, 2));
        da.setSeconds(ox.version.substr(-2, 2));

        //append to DOM
        /* eslint-disable */
        node.find('a').text(ago(da))
                    .attr('href', 'javascript: ox.cache.clear().done(function() { console.log("cache clear"); })')
                    .css('color', 'rgb(255, 122, 0)');
        /* eslint-enable */
        $('.launchers').prepend(node);
        clearInterval(id);
    }, 500);

})();
