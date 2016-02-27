angular.module('starter.controllers', [])
.controller('HomeCtrl', function($scope,$http,$sce,$state) {
    $http.get('movies.json').success(function(data) {
                    $scope.movies = data;
                    console.log($scope.movies);
                }).
                error(function(data) {
                   console.log('error');
    });
    $scope.movieId = $state.params.id;
    $scope.trustSrc = function(src) {
       return $sce.trustAsResourceUrl(src);
    };
});
