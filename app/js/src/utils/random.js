/**
 * Created by edwardhunton on 18/01/2016.
 */
"use strict";
angular.module('pss_game').service('Random', []).service('Random', function () {
    var self = this;

    self.getRandomIndex = function (data) {
        var l = data.length, randomnumber = Math.floor(Math.random() * l);
        return data[randomnumber];
    };
});
