angular.module('login', ['app'])

 .controller('loginController', ['$scope', 'auth', '$window', function ($scope, auth, $window) {

 //sets the users email address in localStorage. Signs them in
    $scope.login = function(){
      if(!window.localStorage.profile) {
        auth.signin();
      }
    };
//clears the profile and JWT token from localStorage, effectively logging the person out and returning them to the home.html page where it will ask them to log in again.
    $scope.logout = function() {
      window.localStorage.clear();
      $window.location.href = '/'
   };

//Fired when a user clicks on the 'Contact Owner' button. It will open their default mail client with a prefilled message and subject
   $scope.sendEmail = function(item){
     var subj = "Inquiry regarding " + item.name;
     var message = "Dear item owner,"
     $window.open("mailto:" + item.email + "?subject=" + subj + "&body=" + message, "_self");
   };

  }])
