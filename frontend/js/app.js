// Link all the JS Docs here
var myApp = angular.module('myApp', [
    'ui.router',
    'pascalprecht.translate',
    'angulartics',
    'angulartics.google.analytics',
    'ui.bootstrap',
    'ngAnimate',
    'ngSanitize',
    'angular-flexslider',
    'ui.swiper'
]);

// Define all the routes below
myApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    var tempateURL = "views/template/template.html"; //Default Template URL

    // for http request with session
    $httpProvider.defaults.withCredentials = true;
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: tempateURL,
            controller: 'HomeCtrl'
        })
        .state('product-description', {
            url: "/product-description",
            templateUrl: tempateURL,
            controller: 'productDescriptionCtrl'
        })
        .state('product-listing', {
            url: "/product-listing",
            templateUrl: tempateURL,
            controller: 'productListingCtrl'
        })
        .state('cart-landing', {
            url: "/cart-landing",
            templateUrl: tempateURL,
            controller: 'cartLandingCtrl'
        })
        .state('cart-empty', {
            url: "/cart-empty",
            templateUrl: tempateURL,
            controller: 'cartEmptyCtrl'
        })
        .state('demo', {
            url: "/demo",
            templateUrl: tempateURL,
            controller: 'demoCtrl'
        })
        .state('signin', {
            url: "/signin",
            templateUrl: tempateURL,
            controller: 'signInCtrl'
        })
        .state('signup', {
            url: "/signup",
            templateUrl: tempateURL,
            controller: 'signUpCtrl'
        })
        .state('form', {
            url: "/form",
            templateUrl: tempateURL,
            controller: 'FormCtrl'
        });
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(isproduction);
});

// For Language JS
myApp.config(function ($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});