'use strict';

// Declare module which depends on filters, and services
angular.module('ngBlockui', [])
// Declare an http interceptor that will signal the start and end of each request
    .config(['$httpProvider', function ($httpProvider) {
        var $http,
            interceptor = ['$q', '$injector', function ($q, $injector) {
                var notificationChannel;

                function success(response) {
                    // get $http via $injector because of circular dependency problem
                    $http = $http || $injector.get('$http');
                    // don't send notification until all requests are complete
                    if ($http.pendingRequests.length < 1) {
                        // get requestNotificationChannel via $injector because of circular dependency problem
                        notificationChannel = notificationChannel || $injector.get('requestNotificationChannel');
                        // send a notification requests are complete
                        notificationChannel.requestEnded();
                    }
                    return response;
                }

                function error(response) {
                    // get $http via $injector because of circular dependency problem
                    $http = $http || $injector.get('$http');
                    // don't send notification until all requests are complete
                    if ($http.pendingRequests.length < 1) {
                        // get requestNotificationChannel via $injector because of circular dependency problem
                        notificationChannel = notificationChannel || $injector.get('requestNotificationChannel');
                        // send a notification requests are complete
                        notificationChannel.requestEnded();
                    }
                    return $q.reject(response);
                }

                return function (promise) {
                    // get requestNotificationChannel via $injector because of circular dependency problem
                    notificationChannel = notificationChannel || $injector.get('requestNotificationChannel');
                    // send a notification requests are complete
                    notificationChannel.requestStarted();
                    return promise.then(success, error);
                }
            }];

        $httpProvider.responseInterceptors.push(interceptor);
    }])
// declare the notification pub/sub channel
    .factory('requestNotificationChannel', ['$rootScope', function($rootScope){
        // private notification messages
        var _START_REQUEST_ = '_START_REQUEST_';
        var _END_REQUEST_ = '_END_REQUEST_';

        // publish start request notification
        var requestStarted = function() {
            $rootScope.$broadcast(_START_REQUEST_);
            $rootScope.blockUI = true;
        };
        // publish end request notification
        var requestEnded = function() {
            $rootScope.$broadcast(_END_REQUEST_);
            $rootScope.blockUI = false;
        };
        // subscribe to start request notification
        var onRequestStarted = function($scope, handler){
            $scope.$on(_START_REQUEST_, function(event){
                handler();
            });
        };
        // subscribe to end request notification
        var onRequestEnded = function($scope, handler){
            $scope.$on(_END_REQUEST_, function(event){
                handler();
            });
        };

        return {
            requestStarted:  requestStarted,
            requestEnded: requestEnded,
            onRequestStarted: onRequestStarted,
            onRequestEnded: onRequestEnded
        };
    }])

