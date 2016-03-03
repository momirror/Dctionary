var myApp = angular.module("dicApp",['ionic']);


myApp.config(function($stateProvider,$urlRouterProvider)
{
	$urlRouterProvider.when("","/tabs/search");
	
	$stateProvider
	.state("tabs",
	{
		url:"/tabs",
		templateUrl:"tabs.html"
	})
	.state("tabs.Search",
	{
		url:"/search",
		views: {
        'home-tab': {
          templateUrl: "search.html",
          controller:function($rootScope,$scope){
          	 $rootScope.nav_title="搜索";
          }
        }
      }
	})
	.state("tabs.List",
	{
		url:"/list",
		views: {
        'list-tab': {
          templateUrl: "list.html",
          controller:function($rootScope,$scope){
          	 $rootScope.nav_title="单词本";
          	 
          }
        }
      }
	})
	 .state("tabs.wordDetail",{
        url:"/wordDetail/:index",
        views: {
        'list-tab': {
          templateUrl: "wordDetail.html",
           controller:function($rootScope, $scope,$stateParams){
    	$scope.wordIndex = $stateParams.index;
    	$rootScope.nav_title=$scope.wordIndex;
    	
    },
    
        }
      },  
    })
   .state("tabs.Set",{
        url:"/set",
        views: {
        'set-tab': {
          templateUrl: "set.html",
           controller:function($scope,$stateParams){
    	$scope.index = $stateParams.index;
    	
    	
//  	alert("haha");
    }
        }
      },
       
    })
    .state("tabs.setDetail",{
        url:"/setDetail/:index",
        resolve:{
        	
        	simpleObj:  function(){
//          return {value: 'simple!'};
return "help.html";
         }
        },
        views: {
        'set-tab': {
//        templateUrl: "help.html",
		 templateUrl: function ($stateParams){
		 	
		 	if($stateParams.index == 0)
		 	{
		 		 return "sdf.html";
		 	}
		 	else 
		 	{
		 		 return 'help.html';
		 	}
		 	
		 	
   
  },
           controller:function($rootScope, $scope,$stateParams,simpleObj){
    	$scope.index = $stateParams.index;
//    	alert(simpleObj);
//  	alert($scope.nav_title);

    }
        }
      },
       
    });
    
    })

.service("parseData",function()
{
  this.parseJson=function(jsonData)
         {
            var exec = cordova.require('cordova/exec');
            exec(null,null,"DataPlugin","parseData",[jsonData]);
         }
})

.controller("listController",function($scope,$rootScope,$http,parseData)
{
//       parseData.parseJson("haha");
	var words = new Array();
	
	for(i = 1;i < 101;i++)
	{
		words.push(i);
	}
	
	 $scope.words = words;
	 
	 $scope.items=["导入生词","帮助"];
	 
	 $rootScope.nav_title="单词本";
	 
	 $scope.show="true";
	 
	 $scope.searchWord=function(word)
	 {
        if(word == undefined)
        {
            $scope.NoInput = "false";
            
            return;
        }
        else
        {
            $scope.NoInput = "true";
        }
            
	 	var url = "http://fanyi.youdao.com/openapi.do?keyfrom=momirror&key=357484575&type=data&doctype=json&version=1.1&q=" + word;
	 	 $http.get(url)
    .success(function(response) {
             parseData.parseJson(response);
//             alert(basic);
//             httpParse.parse(data);
    	$scope.searchText = response.transiation[0];})
    .error(function(e){
 alert('请求失败了');
 });
	 };
})
.controller("setController",function($rootScope,$scope,$state){
	$scope.click=function(index)
	{
		  $state.go("tabs/help/0");
	};
	$rootScope.nav_title ="设置";
})
.controller("helpController",function($scope,$state){
	
});