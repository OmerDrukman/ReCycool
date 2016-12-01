var search = angular.module("searchModule", []);

search.controller("searchCtrl", function($scope) {
    $scope.isMetals = false;
    $scope.isPaper = false;
    $scope.isGlass = false;
    $scope.isPlastics = false;
    $scope.isBatteries = false;
    $scope.isElectronics = false;
    $scope.aroundASpot = true;
    
    $scope.changeDistanceToggle = function() {
        $scope.aroundASpot = !$scope.aroundASpot;
        $("#toggler").toggleClass('toggle-button-switch-active');
        if($("#searchable").hasClass('onMyWay')){
            $("#searchable").removeClass('onMyWay');
            $("#searchable").addClass('oneSpot');
        }else{
            $("#searchable").removeClass('oneSpot');
            $("#searchable").addClass('onMyWay');
        }
    }
    
    
});