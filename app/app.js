// Module
(function () {
  'use strict';
  angular.module('myApp', [
    'ngRoute'
  ]);

  angular.module('myApp').config(function ($routeProvider, $locationProvider) {
    console.log($locationProvider);
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/home', {
        'template': '<home-component></home-component>'
      })
      .when('/about', {
        'template': '<about-component></about-component>'
      })
      .when('/login', {
        'template': '<login-component></login-component>'
      })
      .when('/register', {
        'template': '<register-component></register-component>'
      })
      .otherwise({
        redirectTo: '/home'
      })
  })
})();

// Configs


// Controllers
(function () {
  'use strict';

  angular
    .module('myApp')
    .controller('ApplicationController', ApplicationController);

  ApplicationController.$inject = [];
  function ApplicationController() {
    var appCtrl = this;

    activate();

    ////////////////

    function activate() { }
  }
})();


// Components 

(function () {
  'use strict';

  angular
    .module('myApp')
    .component('homeComponent', {
      templateUrl: './templates/home.tpl.html',
      controller: homeComponentController
    })
    .component('aboutComponent', {
      templateUrl: './templates/about.tpl.html',
      controller: aboutComponentController
    })
    .component('loginComponent', {
      templateUrl: './templates/login.tpl.html',
      controller: loginComponentController
    })
    .component('registerComponent', {
      templateUrl: './templates/register.tpl.html',
      controller: registerComponentController
    })
    .component('navMainComponent', {
      templateUrl: './templates/nav-main.tpl.html',
      controller: navMainComponentController
    })
    ;

  homeComponentController.$inject = [];
  function homeComponentController() {
    var $ctrl = this;
    console.log('inside home component');

    ////////////////

    $ctrl.$onInit = function () { };
    $ctrl.$onChanges = function (changesObj) { };
    $ctrl.$onDestroy = function () { };
  }
  aboutComponentController.$inject = [];
  function aboutComponentController() {
    var $ctrl = this;
    console.log('inside about component');

    ////////////////

    $ctrl.$onInit = function () { };
    $ctrl.$onChanges = function (changesObj) { };
    $ctrl.$onDestroy = function () { };
  }
  loginComponentController.$inject = [];
  function loginComponentController() {
    var $ctrl = this;
    console.log('inside login component');

    ////////////////

    $ctrl.$onInit = function () { };
    $ctrl.$onChanges = function (changesObj) { };
    $ctrl.$onDestroy = function () { };
  }
  registerComponentController.$inject = [];
  function registerComponentController() {
    var $ctrl = this;
    console.log('inside register component');

    ////////////////

    $ctrl.$onInit = function () { };
    $ctrl.$onChanges = function (changesObj) { };
    $ctrl.$onDestroy = function () { };
  }
  navMainComponentController.$inject = [];
  function navMainComponentController() {
    var $ctrl = this;
    console.log('inside navMain component');

    ////////////////

    $ctrl.$onInit = function () { };
    $ctrl.$onChanges = function (changesObj) { };
    $ctrl.$onDestroy = function () { };
  }
})();
