var app = angular.module("store")

    .controller("PokemonController", function ($scope, $http) {

        var _this = this;
        $scope.pokemons = [];
        _this.pokImages = [];
        $scope.num = 0;
        $scope.element = {};
        $scope.showInfo = false;
        
        $http.get('http://pokeapi.co/api/v1/pokemon/?limit=12').success(function (data) {
            $scope.pokemons = data.objects;
            // console.log(data);
        })
        
        $scope.check = function (n) {
            // console.log(n);

            if ($scope.num === n) {
                return true;
            } else {
                return false;
            }

        }

        $scope.setVisInfo = function (click) {
            $scope.showInfo = click;
            // console.log($scope.showInfo);
        }
        

        $scope.checkLike = function (num) {
            if (localStorage.getItem(num)) {
                return true;
            }else {
                false;
            }
            // console.log(val);
        }

        
        
        $scope.addToLs = function (pokem) {

            //console.log(pokem);
            if (localStorage.getItem(pokem.national_id)) {
                localStorage.removeItem(pokem.national_id)
            }else {
                localStorage.setItem(pokem.national_id, JSON.stringify(pokem))
            }
        }

        $scope.setId = function (pok, pokNum) {
            $scope.num = pokNum;
            $scope.setVisInfo(false);
            $scope.element = pok;
        }


    })

    .controller("TabController", function () {
        this.tab = 1;

        this.setTab = function (tab) {
            this.tab = tab;
        };

        this.isSet = function (tab) {
            return (this.tab === tab)
        }
    })


    .controller("LikedController", function ($scope) {

        $scope.pokemonsl = [];
        $scope.num = 0;
        $scope.element = {};
        $scope.showInfo = false;


        // $scope.getLiked = function () {
        function getLiked() {
            // var g = localStorage.getItem(key);

            for (var key in localStorage) {
                
                var anim = JSON.parse(localStorage.getItem(key));
                console.log(key);
                $scope.pokemonsl.push(anim);

            }
        }
        
        setTimeout(getLiked, 1500);

        $scope.check = function (n) {
            // console.log(n);

            if ($scope.num === n) {
                return true;
            } else {
                return false;
            }

        }

        $scope.setVisInfo = function (click) {
            $scope.showInfo = click;
            // console.log($scope.showInfo);
        }


        $scope.checkLike = function (num) {
            if (localStorage.getItem(num)) {
                return true;
            }else {
                false;
            }
            // console.log(val);
        }



        $scope.delFromLs = function (pokem) {

            //console.log(pokem);
            if (localStorage.getItem(pokem.national_id)) {
                localStorage.removeItem(pokem.national_id)
            }

        }

        $scope.setId = function (pok, pokNum) {
            $scope.num = pokNum;
            $scope.setVisInfo(false);
            $scope.element = pok;
        }

    })
    


