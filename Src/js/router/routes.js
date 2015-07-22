SkyFontsStubApp.config(function ($routeProvider) {
    $routeProvider
       .when('/', {
            templateUrl: 'tmpl/fontSync.html',
            controller: 'fontDownloadController'
       }).when('/fontSync', {
            templateUrl: 'tmpl/fontSync.html',
            controller: 'fontDownloadController'
       }).when('/fontDownload', {
            templateUrl: 'tmpl/fontSync.html',
            controller: 'fontDownloadController'
        }).otherwise({
            redirectTo: '/'
        });
});