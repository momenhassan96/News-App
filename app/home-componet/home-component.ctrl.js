newsApp.controller('homeController',['$scope','$location','sharedService','$rootScope','$state',
function($scope,$location,sharedService,$rootScope,$state){
    $rootScope.countryName = $rootScope.countryName ? $rootScope.countryName  : 'us';
    $rootScope.$watch('countryName', function (event){
        localStorage.setItem('countryName',event);
        $scope.currentCountry = event;
        sharedService.getTopHeadlines('topheadline',$scope.currentCountry).then(res=>{
            
            $scope.getNews=res.data.articles.filter((item,index)=>{
                if(index <='4'){
                    item.id = index;
                    return item;
                } 
            });
            sharedService.addID(res);
            $scope.firstNews =$scope.getNews[0];
            $scope.secondNews =$scope.getNews[1];
            $scope.thirdNews =$scope.getNews[2];
            $scope.fourthNews =$scope.getNews[3];
            $scope.fifthhNews =$scope.getNews[4];
        })

        sharedService.getSportsNews($scope.currentCountry).then(res=>{
            $scope.sportsArticles = sharedService.addID(res)
            $scope.sportsArticles = res.data.articles.filter((item,index)=> index <= '2' ? item : '');
            $scope.typeSports="Sports";
        })
    });

    $scope.redirectToNews = function(type,country,obj){
        $state.go('news',{type:type,country:country,id:obj.id});
    }

    sharedService.getTopFromBBC().then(res=>{
        $scope.getBbcNews = sharedService.addID(res)
        $scope.getBbcNews = res.data.articles.filter((item,index)=> index <= '2' ? item : '');
        $scope.type="News";
    })
}]);