app.controller('searchController', ['$scope', 'Errand', function($scope, Errand){
    $scope.term = term;
    $scope.errands = result.docs;
    $scope.totalItems = result.total;
    $scope.currentPage = result.page;
    $scope.maxSize = result.pages;
    $scope.itemsPerPage = result.limit;
    
    $scope.pageChanged = function(){
	Errand.search({
	    term: $scope.term,
	    page: $scope.currentPage,
	    fields: 'customer description compensation'
	}, function(result){
	    $scope.errands = result.docs;
	    $scope.totalItems = result.total;
	    $scope.currentPage = result.page;
	    $scope.maxSize = result.pages;
	    $scope.itemsPerPage = result.limit;
	});
    };

    $scope.getErrandInfo = function(id){
	Errand.get({id: id}, function(result){
	    $scope.selectedErrand = result;
	    if(result.is_taken)
		$scope.buttonText = 'Untake Errand';
	    else $scope.buttonText = 'Take Errand'
	});
    }
}]);
