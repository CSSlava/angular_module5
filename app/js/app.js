angular.module('store', ['ngRoute']);

angular.module('store')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/#/all', {
                    templateUrl: 'pages/all.html'
                }
            )
            .when('#/liked', {
                    templateUrl: '../pages/templates/allLiked.html'
                }
            )
            .otherwise({redirectTo: "/"})
    })
