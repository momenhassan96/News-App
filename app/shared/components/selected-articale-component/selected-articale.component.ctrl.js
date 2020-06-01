sharedModule.controller('selectedArticaleCtrl',['$stateParams','sharedService','$rootScope','$scope',
function($stateParams,sharedService,$rootScope,$scope){
    
    var vm = this;

    vm.getType = $stateParams.type.toLowerCase();
    vm.getData = [];
    vm.getCountry = localStorage.getItem('countryName');

    $rootScope.countryName = $rootScope.countryName ? $rootScope.countryName  : 'us';
    $rootScope.$watch('countryName', function (event){
        localStorage.setItem('countryName',event);
        vm.getCountry = event;
        switch(vm.getType){
            case 'sports': 
                sharedService.getSportsNews(vm.getCountry).then(res=>{
                    vm.getData = sharedService.addID(res);
                    vm.getFirstArticale = vm.getData.filter(item=>item.id == '0')[0];
                    vm.getSecondArticale = vm.getData.filter(item=>item.id == '1')[0];
                })
                break;
            case 'topheadline':
                sharedService.getTopHeadlines('topheadline',vm.getCountry).then(res=>{
                    vm.getData = sharedService.addID(res);
                    vm.getFirstArticale = vm.getData.filter(item=>item.id == '0')[0];
                    vm.getSecondArticale = vm.getData.filter(item=>item.id == '1')[0];
                })
                break;
            case 'news':
                sharedService.getTopFromBBC().then(res=>{
                    vm.getData = sharedService.addID(res);
                    vm.getFirstArticale = vm.getData.filter(item=>item.id == '0')[0];
                    vm.getSecondArticale = vm.getData.filter(item=>item.id == '1')[0];
                })
                break;
            default:
                break;
        }
    });
    


}])