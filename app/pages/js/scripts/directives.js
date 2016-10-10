

var app = angular.module('store')

    .directive("pokemonList", function () {
        return {
            restrict: "E",
            templateUrl: "pages/templates/allPokemon.html",
            controller: "PokemonController",
            controllerAs: "pokemonCtrl"
        }
    })

    .directive("pokemonLiked", function () {
        return {
            restrict: "E",
            templateUrl: "pages/templates/likePokemon.html",
            controller: "LikedController",
            controllerAs: "likedCtrl"
        }
    })

    .directive("pokemonInfo", function () {
        return {
            restrict: "E",
            templateUrl: "pages/templates/pokemonInfo.html"
        }
    })


