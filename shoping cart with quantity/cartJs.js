var app= angular.module("miApp",[]);
    app.controller("micontroller", function ($scope) {
        $scope.carts=[];
        $scope.products=[
            {
                id:1,
                name:"iphone x",
                price:500,
                descr:"the latest iphone is here for you",
                img:"",
                cant:1
            },
            {
                id:2,
                name:"nexus 7",
                price:300,
                descr:"harder, better, faster",
                img:"",
                cant:1
                
            }, 
            {
                id:3,
                name:"samsung 9",
                price:450,
                descr:"new samsung, new start",
                img:"",
                cant:1
            },
            {
                id:4,
                name:"Cat cellphone",
                price:400,
                descr:"the most resistent cellphone of the market",
                img:"",
                cant:1
            },
            {
                id:5,
                name:"Samsung Gear",
                price:100,
                descr:"the perfecte assisstan for busy people",
                img:"",
                cant:1
            }
        ];
        
       
        
        
        function getExistingInCart(id){
            for (let i  = 0; i < $scope.carts.length; i++) {
                if($scope.carts[i].id == id){
                    return $scope.carts[i];
                    
                }
            }
            
        };
        
        $scope.add_cart = function(product,cart){ 
            var isInList= getExistingInCart(product.id);
            if (isInList == null) {
                $scope.carts.push({id: product.id, 
                    name: product.name, 
                    price: product.price,
                    cant: product.cant});
            } else {
                isInList.cant++;
            }	
        }
        $scope.total=0;
        
        $scope.setTotal=function(carts){
            if($scope.carts.indexOf(carts), 1){
                 var sum=0;
                 sum += carts.price * carts.cant;
                }
    }; 
  
     /*    $scope.setTotal=function(cart){
                if(cart){
                    $scope.total +=cart.p_price * cart.p_cant;
                    console.log($scope.total)
                }
        }
 */

        $scope.removePart=function(cart){
            if(cart != null){
                $scope.carts.splice($scope.carts.indexOf(cart), 1);
                $scope.total -= cart.price * cart.cant;
                console.log($scope.total)
            }
        }

        
    })
