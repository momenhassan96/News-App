newsApp.config(
    ['$routeProvider','$locationProvider','$stateProvider','$urlRouterProvider',
        function($routeProvider,$locationProvider,$stateProvider,$urlRouterProvider){
        // $urlMatcherFactoryProvider.caseInsensitive(true)
        $locationProvider.html5Mode(false).hashPrefix('');
        $routeProvider.caseInsensitiveMatch = true; 
        $stateProvider.
        state('/',{
            url:'/',
            templateUrl: 'app/home-componet/home-component.html',
            controller: 'homeController',
            resolve:{
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'app/home-componet/home-component.ctrl.js',
                            'app/home-componet/home-component.js', 
                            'app/home-componet/home-component.css',
                            'app/shared/shared-module.js',
                            'app/shared/services/shared-service.js',
                            'app/shared/components/type-component/type-component.js',
                            'app/shared/components/type-component/type-component.ctrl.js',
                            'app/shared/components/type-component/type-component.css',
                            'app/shared/directives/limit-directive.js'
                        ]
                    });
            }]
            }
        })
        .state('business',{
            url:'/business',
            templateUrl:'app/shared/components/type-component/type-component.html',
            controller:'typeComponentCtrl',
            resolve:{
                deps:['$ocLazyLoad', function ($ocLazyLoad){
                    return $ocLazyLoad.load({
                        files:[
                            'app/shared/components/type-component/type-component.ctrl.js',
                            'app/shared/components/type-component/type-component.js',
                            'app/shared/components/type-component/type-component.css'
                        ]
                    })
                }]
            }

        })
        .state('entertainment',{
            url:'/entertainment',
            templateUrl:'app/shared/components/type-component/type-component.html',
            controller:'typeComponentCtrl',
            resolve:{
                deps:['$ocLazyLoad', function ($ocLazyLoad){
                    return $ocLazyLoad.load({
                        files:[
                            'app/shared/components/type-component/type-component.ctrl.js',
                            'app/shared/components/type-component/type-component.js',
                            'app/shared/components/type-component/type-component.css'
                        ]
                    })
                }]
            }

        })
        .state('health',{
            url:'/health',
            templateUrl:'app/shared/components/type-component/type-component.html',
            controller:'typeComponentCtrl',
            resolve:{
                deps:['$ocLazyLoad', function ($ocLazyLoad){
                    return $ocLazyLoad.load({
                        files:[
                            'app/shared/components/type-component/type-component.ctrl.js',
                            'app/shared/components/type-component/type-component.js',
                            'app/shared/components/type-component/type-component.css'
                        ]
                    })
                }]
            }

        })
        .state('science',{
            url:'/science',
            templateUrl:'app/shared/components/type-component/type-component.html',
            controller:'typeComponentCtrl',
            resolve:{
                deps:['$ocLazyLoad', function ($ocLazyLoad){
                    return $ocLazyLoad.load({
                        files:[
                            'app/shared/components/type-component/type-component.ctrl.js',
                            'app/shared/components/type-component/type-component.js',
                            'app/shared/components/type-component/type-component.css'
                        ]
                    })
                }]
            }

        })
        .state('sports',{
            url:'/sports',
            templateUrl:'app/shared/components/type-component/type-component.html',
            controller:'typeComponentCtrl',
            resolve:{
                deps:['$ocLazyLoad', function ($ocLazyLoad){
                    return $ocLazyLoad.load({
                        files:[
                            'app/shared/components/type-component/type-component.ctrl.js',
                            'app/shared/components/type-component/type-component.js',
                            'app/shared/components/type-component/type-component.css'
                        ]
                    })
                }]
            }

        })
        .state('technology',{
            url:'/technology',
            templateUrl:'app/shared/components/type-component/type-component.html',
            controller:'typeComponentCtrl',
            resolve:{
                deps:['$ocLazyLoad', function ($ocLazyLoad){
                    return $ocLazyLoad.load({
                        files:[
                            'app/shared/components/type-component/type-component.ctrl.js',
                            'app/shared/components/type-component/type-component.js',
                            'app/shared/components/type-component/type-component.css'
                        ]
                    })
                }]
            }

        })
        .state('weather',{
            url:'/weather',
            templateUrl:'app/shared/components/type-component/type-component.html',
            controller:'typeComponentCtrl',
            resolve:{
                deps:['$ocLazyLoad', function ($ocLazyLoad){
                    return $ocLazyLoad.load({
                        files:[
                            'app/shared/components/type-component/type-component.ctrl.js',
                            'app/shared/components/type-component/type-component.js',
                            'app/shared/components/type-component/type-component.css'
                        ]
                    })
                }]
            }

        }).state('news',{
            url:'/news/:type/:country/:id',
            templateUrl:'app/shared/components/select-news-component/select-news.component.html',
            controller:'newsCtrl',
            resolve:{
                deps:['$ocLazyLoad', function ($ocLazyLoad){
                    return $ocLazyLoad.load({
                        files:[
                            'app/shared/components/select-news-component/select-news.component.ctrl.js',
                            'app/shared/components/select-news-component/select-news.component.js',
                            'app/shared/components/select-news-component/select-news.component.css',
                            'app/shared/services/shared-service.js',
                            'app/shared/components/side-title-component/side-title.component.js',
                        ]
                    })
                }]
            }
        }).state('articales',{
            url:'/articales/:type',
            templateUrl:'app/shared/components/selected-articale-component/selected-articale.component.html',
            controller:'selectedArticaleCtrl',
            controllerAs:'vm',
            resolve:{
                deps:['$ocLazyLoad',function($ocLazyLoad){
                    return $ocLazyLoad.load({
                        files:[
                            'app/shared/components/selected-articale-component/selected-articale.component.ctrl.js',
                            'app/shared/components/selected-articale-component/selected-articale.component.js',
                            'app/shared/components/selected-articale-component/selected-articale.component.css',
                            'app/shared/services/shared-service.js',
                            'app/shared/directives/limit-directive.js',
                        ]
                    })
                }]
            }
        })
            $urlRouterProvider.otherwise('/')
        
    }])

