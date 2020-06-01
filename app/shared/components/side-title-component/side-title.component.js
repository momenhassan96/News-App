angular.module('sharedModule').component('sideTitle',{
    templateUrl:'app/shared/components/side-title-component/side-title.component.html',
    controller:sideTitleCtrl,
    controllerAs:'vm',
    bindings:{

    }
})



function sideTitleCtrl(sharedService,$rootScope,$state){
    var vm = this;
    vm.getType=$state.params.type;
    vm.getCurrentCountry = $state.params.country;
    vm.getTitles = getTitles;
    vm.allTitles = [];
    function getTitles(){
        $rootScope.$watch('countryName', function (event){
            vm.getCountry = event ? event : localStorage.getItem('countryName');
            sharedService.getTopHeadlines(vm.getType,vm.getCountry).then(res=>{
                var arr =sharedService.addID(res)
                vm.allTitles = arr.filter((item)=>{
                    if(item.id >='4' && item.id <= '8'){
                        return item;
                    } 
                });
            }) 
        })
     }
     getTitles();
}