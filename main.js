var newsApp = angular.module('newsApp',['ngRoute','ui.router','oc.lazyLoad','ngMaterial','sharedModule']);

    newsApp.controller('mainController',['$scope','$rootScope','$state',function($scope,$rootScope,$state){

    }])

// newsApp.config([
//     '$ocLazyLoadProvider',
//     function($ocLazyLoadProvider) {
//       $ocLazyLoadProvider.config({});
//     }
//   ]);



// newsApp.config(function($sceDelegateProvider) {
//   // debugger
//   $sceDelegateProvider.resourceUrlWhitelist([
//     // Allow same origin resource loads.
//     'self',
//     // Allow loading from our assets domain.  Notice the difference between * and **.
//     'https://newsapi.org/**']);

//   // The blacklist overrides the whitelist so the open redirect here is blocked.
//   // $sceDelegateProvider.resourceUrlBlacklist([
//   //   'http://myapp.example.com/clickThru**']);
//   });

// //   newsApp.config(['$qProvider', function ($qProvider) {
// //     $qProvider.errorOnUnhandledRejections(false);
// // }]);

