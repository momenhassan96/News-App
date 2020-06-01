angular.module('sharedModule').component('typeComponent',{
    templateUrl:'app/shared/components/type-component/type-component.html',
    controller:'typeComponentCtrl',
    controllerAs:'vm',
    bindings:{
        data: '<',
        type:'='
    }
})
