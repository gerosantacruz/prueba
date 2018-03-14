var app= angular.module("miApp",[]);
    app.controller("micontroller", function ($scope) {
        $scope.carts=[];
        $scope.products=[
            {
                p_id:1,
                p_name:"iphone x",
                p_price:300,
                p_descr:"the latest iphone is here for you"
            },
            {
                p_id:2,
                p_name:"nexus 7",
                p_price:300,
                p_descr:"harder, better, faster"
            }, 
            {
                p_id:3,
                p_name:"samsung 9",
                p_price:300,
                p_descr:"new samsung, new start"
            }
        ];

        $scope.add_cart = function(product){ 
            if(product){ 
                $scope.carts.push({p_id: product.p_id, p_name: product.p_name, p_price: product.p_price}); 
            }	
        }

        $scope.total=0;

        $scope.setTotal=function(cart){
            if(cart){
                $scope.total +=cart.p_price;
            }
        }

        $scope.removePart=function(cart){
            if(cart != null){
                $scope.carts.splice($scope.carts.indexOf(cart), 1);
                $scope.total -= cart.p_price;
            }
        }

        
    })
