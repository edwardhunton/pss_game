/**
 * Created by edwardhunton on 18/01/2016.
 */
"use strict";
var angular = require('angular');

var pss_game = angular.module('pss_game', [require('angular-route')]);

pss_game.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'start.html'
        }).when('/choose', {
        templateUrl: 'choose.html'
        }).when('/result', {
        templateUrl: 'result.html'
        }).otherwise({redirectTo: '/'});

}]);

// Controllers
var controllers = require.context('./controllers', true, /js$/);
controllers.keys().forEach(controllers);
// Utils
var utils = require.context('./utils', true, /js$/);
utils.keys().forEach(utils);
// Templates
require('ng-cache!../../templates/views/choose.html');
require('ng-cache!../../templates/views/result.html');
require('ng-cache!../../templates/views/start.html');
// Styles
require('../../styles/bootstrap/dist/css/bootstrap.min.css');
require('../../styles/main.css');


