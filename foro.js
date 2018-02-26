angular.module("app",[])
.controller("controlador", function($scope,$http){
    $scope.mydata=[];
    $scope.nombre="uriel";
    $scope.newpost={};
    $http.get("https://jsonplaceholder.typicode.com/posts")
    .then (function(response){
        $scope.mydata=response.data;
    });

    $scope.addPost = function(){
        $http.post("https://jsonplaceholder.typicode.com/posts",{
        title:$scope.newpost.title,
        body: $scope.newpost.body,
        userID: 1
        })

        .then(function(response,status,headers,config){
            $scope.mydata.push($scope.newpost);
            $scope.newpost={};
        })
        
       
    }
});