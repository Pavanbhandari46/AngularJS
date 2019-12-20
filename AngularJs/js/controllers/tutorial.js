angular.module("tutorialCtrlmodule",[]);
.controller("TutorialCtrl",["$scope",function($scope){
	$scope.tutorialObject = {};
	$scope.tutorialObject.title="Main Page";
	$scope.tutorialObject.subtitle="Sub Page";
	$scope.tutorialObject.bindOutput=2;
}]);