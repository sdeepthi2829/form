(function(angular){
  'use strict';
  //app configuration
  function AppConfig($routeProvider){
    $routeProvider.when('/form',{
      template:'views/form.html',
      controller:'FormController',
      controllerAs:'FormCtrl'
    }).when('/user',{
      template:'views/user.html',
      controller:'UserController',
      controllerAs:'UserCtrl'
    });
  }
  //inject dependencies
  AppConfig.$inject = ['$routeProvider'];
  angular.module('srikarClassApp',['ngRoute']).config(AppConfig);
})(window.angular || (window.angular={}));
