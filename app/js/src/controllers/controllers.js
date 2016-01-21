"use strict";
angular.module('pss_game').controller('MainCtrl', ['$injector', '$http', '$location', function ($injector, $http, $location) {
    var self = this, ran = $injector.get('Random');
    $http.get('materials.json').then(function (response) {
        self.data =  response.data;
    });
    function getWinner(rm, mc) {
        if (rm === 'paper' && mc === 'stone') {
            return { 'result': 'Lost', 'description': 'Paper wraps Stone'};
        }
        if (rm === 'stone' && mc === 'paper') {
            return {'result': 'Won', 'description': 'Paper wraps Stone'};
        }
        if (rm === 'stone' && mc === 'scisors') {
            return {'result': 'Lost', 'description': 'Stone blunts Scisors'};
        }
        if (rm === 'scisors' && mc === 'stone') {
            return {'result': 'Won', 'description': 'Stone blunts Scisors'};
        }
        if (rm === 'scisors' && mc === 'scisors') {
            return {'result': 'Drawn', 'description': 'Its a Draw'};
        }
        if (rm === 'stone' && mc === 'stone') {
            return {'result': 'Drawn', 'description': 'Its a Draw'};
        }
        if (rm === 'paper' && mc === 'paper') {
            return {'result': 'Drawn', 'description': 'Its a Draw'};
        }
        if (rm === 'paper' && mc === 'scisors') {
            return {'result': 'Won', 'description': 'Scisors cut Paper'};
        }
        if (rm === 'scisors' && mc === 'paper') {
            return {'result': 'Lost', 'description': 'Scisors cut Paper'};
        }
    }
    self.setUp = function () {
        self.randomMaterial =  ran.getRandomIndex(self.data.materials).name;
        console.log('computers material is: ' + self.randomMaterial.name);
        $location.url('/choose');
    };
    self.chooseMaterial = function (material) {
        self.materialChoice = material;
        var res = getWinner(self.randomMaterial, self.materialChoice);
        self.result = res.result;
        self.description = res.description;
        $location.url('/result');
    };
    self.restart = function () {
        $location.url('/');
    };
}]);