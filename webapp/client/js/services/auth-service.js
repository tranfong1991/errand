app.factory('Authentication',['$rootScope', function($rootScope){    
    var info = {
	watchAuthStatusChange: function(){
	    //this is only called when user is logged in. Thus, if this isn't called, we know user is not logged in
	    FB.Event.subscribe('auth.authResponseChange', function(res){
	       if(res.status === 'connected'){
		   $('#login').css('display', 'none');
		   $('#user').css('display', 'block');
		   info.getUserInfo();
	       }
	       else{
		   $('#login').css('display', 'block');
		   $('#user').css('display', 'none');
		   $rootScope.user = {};
	       }
	    });
	},
	getUserInfo: function(){
	    FB.api('/me', {fields: 'id, name, picture.height(32)'}, function(res){
		//call $apply because the answer from FB is asynchronous and from outside the framework world.
		//if $apply isn't called, view will not be dynamically updated. In this case, user.name will not show
		$rootScope.$apply(function(){
		    $rootScope.user = res;
		});
	    });
	}
    };
    return info;
}]);
