newsApp.controller('navBarCtrl',['$scope','$http','$rootScope',
function($scope,$http,$rootScope){
    getCountries();

    function getCountries(){
        $http.get('app/core/nav-bar/countries.json')
        .then(res=>{
            $scope.data = res.data;
        })
    }
    $scope.getNewsForCountry = function(country){
       $rootScope.countryName = country;
    }
    
}])