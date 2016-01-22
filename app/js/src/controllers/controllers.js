"use strict";
angular.module('pss_game').controller('MainCtrl', ['$injector', '$http', '$location', function ($injector, $http, $location) {
    var self = this, ran = $injector.get('Random');
    $http.get('materials.json').then(function (response) {
        self.data =  response.data;
    });
    function getWinner(rm, mc) {
        if (rm === 'Paper' && mc === 'Rock') {
            return { 'result': 'lost', 'description': 'Paper wraps Rock'};
        }
        if (rm === 'Rock' && mc === 'Paper') {
            return {'result': 'won', 'description': 'Paper wraps Rock'};
        }
        if (rm === 'Rock' && mc === 'Scissors') {
            return {'result': 'lost', 'description': 'Rock blunts Scissors'};
        }
        if (rm === 'Scissors' && mc === 'Rock') {
            return {'result': 'won', 'description': 'Rock blunts Scissors'};
        }
        if (rm === 'Scissors' && mc === 'Scissors') {
            return {'result': 'drawn', 'description': 'Its a Draw'};
        }
        if (rm === 'Rock' && mc === 'Rock') {
            return {'result': 'drawn', 'description': 'Its a Draw'};
        }
        if (rm === 'Paper' && mc === 'Paper') {
            return {'result': 'drawn', 'description': 'Its a Draw'};
        }
        if (rm === 'Paper' && mc === 'Scissors') {
            return {'result': 'won', 'description': 'Scissors cut Paper'};
        }
        if (rm === 'Scissors' && mc === 'Paper') {
            return {'result': 'lost', 'description': 'Scissors cut Paper'};
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