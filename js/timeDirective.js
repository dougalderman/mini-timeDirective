angular.module('timeApp')
.directive('showTime', function() {
    return {
        template: '<div> The current date and time is {{date | date: "medium"}} </div>',
        restrict: 'E',
        link: function( scope, elem, attrs) {
            var currentDate = new Date();
            scope.date = currentDate;
        }
    };
});