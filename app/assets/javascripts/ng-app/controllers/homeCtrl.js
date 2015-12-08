angular.module('HairQApp', ['ngMaterial'])
.controller('HomeCtrl', function ($scope) {
        $scope.homeTiles = [
            {order: '1', type:'text', colspan: '4', header:'Welcome to HairQ', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {order: '2', type:'photo', colspan: '2', header:'#PHOTO1', image:''},
            {order: '3', type:'text', colspan: '2', header:'Make Appointment', content:''},
            {order: '4', type:'photo', colspan: '2', header:'#PHOTO2', image:''},
            {order: '5', type:'text', colspan: '2', header:'About', content:''},
            {order: '6', type:'photo', colspan: '1', header:'#PHOTO3', image:''},
            {order: '7', type:'text', colspan: '4', header:'Styles', content:''},
            {order: '8', type:'photo', colspan: '1', header:'#PHOTO4', image:''}
        ];
        
    });