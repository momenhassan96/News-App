sharedModule.controller('typeComponentCtrl',['$state',function($state){
    var vm =  this;
    vm.redirectToArtiacle = redirectToArtiacle;

    function redirectToArtiacle(type){
        $state.go('articales',{type:type});
    }
}])