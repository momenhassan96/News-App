sharedModule.controller('newsCtrl',['$scope','$state','sharedService',
function($scope,$state,sharedService){
    
    $scope.getID = $state.params.id;
    $scope.getType=$state.params.type;
    $scope.getCurrentCountry = $state.params.country;

     $scope.getArticale = function(){
        sharedService.getTopHeadlines($scope.getType,$scope.getCurrentCountry)
        .then(response=>{
            $scope.obj = sharedService.addID(response).filter(item=>item.id == $scope.getID)[0];
        })
    }
    $scope.getArticale();
}])