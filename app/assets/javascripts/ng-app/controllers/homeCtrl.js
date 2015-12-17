
var app = angular.module('HairQApp', ['ngAnimate','ngMaterial']);

/*Filters*/
app.filter('dateCompare',function(){
    var todaysDate = new Date();
    return function(items, field1){
        if (items == undefined){
            return items;
        }
        else {
            return items.filter(function(item){
                 var d2 = new Date(item[field1]);
                return (d2 > todaysDate || d2.getTime() == 0 );
            });
        }
    }
});

/*Controllers*/
app.controller('HomeCtrl', function ($scope, $timeout, $http) {
        $timeout(function() { $scope.showCards = true;});
        $scope.homeTiles = [
            {order: '1', type:'text', colspan: '4', header:'Welcome to Hair Q', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {order: '2', type:'photo', colspan: '2', header:'#PHOTO1', image:'test0.jpeg'},
            {order: '3', type:'linkcard', colspan: '2', header:'Make Appointment', pagelink:'Contact', linkIcon:'fa-calendar', content:'Contact me to have your hair go through a revitalizing experience or for any hair inquires.'},
            {order: '4', type:'photo', colspan: '2', header:'#PHOTO2', image:'test1.jpg'},
            {order: '5', type:'linkcard', colspan: '2', header:'About', pagelink:'About', linkIcon:'fa-male', content:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo...'},
            {order: '6', type:'photo', colspan: '1', header:'#PHOTO3', image:'test2.jpg'},
            {order: '7', type:'specials', colspan: '4', header:'Specials', pagelink:'Contact', linkIcon:'fa-scissors', content:'See any specials currently avaliable'},
            {order: '8', type:'photo', colspan: '1', header:'#PHOTO4', image:'test3.jpg'}
        ];
        
        $scope.date = new Date();
        $scope.showSpecials = false;
        $http.get('/data/specials')
        .then(function(response){ 
            $scope.specials = response.data;
            $scope.showSpecials = true;
        });
        
        
})
.controller('MediaCtrl', function ($scope, $timeout) {
    
    $scope.mediaItems = [
        {type: 'photo', location:'test0.jpeg'},
        {type: 'photo', location:'test1.jpg'},
        {type: 'photo', location:'test2.jpg'},
        {type: 'photo', location:'test3.jpg'},
        {type: 'photo', location:'test4.jpg'},
        {type: 'photo', location:'test5.jpg'},
        {type: 'photo', location:'test6.jpg'},
        {type: 'photo', location:'test7.jpg'}
        //Extra imgs tst
        ,{type: 'photo', location:'test6.jpg'},
        {type: 'photo', location:'test5.jpg'},
        {type: 'photo', location:'test4.jpg'},
        {type: 'photo', location:'test3.jpg'}
        ];
        
    $scope.mainMedia = $scope.mediaItems[0].location;
    // Media click
    $scope.changeImg = function(imglocation) {
            $scope.mainMedia = imglocation;
    };
    
})
.controller('ContactCtrl', function ($scope, $timeout, $http) {
   
    $scope.date = new Date();
    $scope.showSpecials = false;
    $http.get('/data/specials')
        .then(function(response){ 
            $scope.specials = response.data;
            $scope.showSpecials = true;
    });
    
    //Calender
    $scope.day = moment();
    
});

/*Directives*/
app.directive("calendar", function() {
    return {
        /*restrict: "E",
        templateUrl: "templates/calendar.html",
        scope: {
            selected: "="
        },*/
        link: function(scope) {
            scope.selected = _removeTime(scope.selected || moment());
            scope.month = scope.selected.clone();

            var start = scope.selected.clone();
            start.date(1);
            _removeTime(start.day(0));

            _buildMonth(scope, start, scope.month);

            scope.select = function(day) {
                scope.selected = day.date;  
            };

            scope.next = function() {
                var next = scope.month.clone();
                _removeTime(next.month(next.month()+1).date(1));
                scope.month.month(scope.month.month()+1);
                _buildMonth(scope, next, scope.month);
            };

            scope.previous = function() {
                var previous = scope.month.clone();
                _removeTime(previous.month(previous.month()-1).date(1));
                scope.month.month(scope.month.month()-1);
                _buildMonth(scope, previous, scope.month);
            };
        }
    };
    
    function _removeTime(date) {
        return date.day(0).hour(0).minute(0).second(0).millisecond(0);
    }

    function _buildMonth(scope, start, month) {
        scope.weeks = [];
        var done = false, date = start.clone(), monthIndex = date.month(), count = 0;
        while (!done) {
            scope.weeks.push({ days: _buildWeek(date.clone(), month) });
            date.add(1, "w");
            done = count++ > 2 && monthIndex !== date.month();
            monthIndex = date.month();
        }
    }

    function _buildWeek(date, month) {
        var days = [];
        for (var i = 0; i < 7; i++) {
            days.push({
                name: date.format("dd").substring(0, 1),
                number: date.date(),
                isCurrentMonth: date.month() === month.month(),
                isToday: date.isSame(new Date(), "day"),
                date: date
            });
            date = date.clone();
            date.add(1, "d");
        }
        return days;
    }
});