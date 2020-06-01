sharedModule.service('sharedService',['$http',function($http){
    let ref = this;
    ref.getTopHeadlines = function(type,yourCountry){
       return  $http.get(`app/fake-api/top-head-line/${type}-${yourCountry}.json`)
    }

    ref.addID = function(arr){
        arr.data.articles.forEach((item,index)=>{
            item.id = index;
        })
        return arr.data.articles;
    }

    ref.getTopFromBBC = function(){
        return $http({
            method:'GET',
            url:'app/fake-api/top-head-line-bbc/topheadline-bbc.json'
        })
    }

    ref.getSportsNews = function(country){
        return $http({
            method : 'GET',
            url:`app/fake-api/sports/sports-${country}.json`
        })
    }

}])

