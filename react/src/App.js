import React, { Component } from 'react';
import './App.css';
import ProductItem from "./productItem";
import AddItem from "./addItem"

const products=[
  {
    name:"galaxy",
    price:200
  },
  {
    name:"lg",
    price:150

  }
];

localStorage.setItem("products", JSON.stringify(products));

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      products:JSON.parse(localStorage.getItem("products"))
    }

    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onEditSubmit= this.onEditSubmit.bind(this)
  }
  
  componentWillMount(){
    const products = this.getProducts();
    this.setState({products});
  }

  getProducts(){
    return this.state.products;
    
  }

  onAdd(name, price){
    const products= this.getProducts();

    products.push({name, price});

    this.setState({products});
  }

  onDelete(name){
  const products = this.getProducts();

  const filteredProducts = products.filter(product =>{
    return product.name !== name;
  });

  this.setState({products: filteredProducts})
  }

  onEditSubmit(name, price, originalname){
    
    let products = this.getProducts();

    products= products.map(product =>{
      if (product.name === originalname){
        product.name= name;
        product.price= price;
      }
      return product;
      
    });
    
    this.setState({products})

  }

  render() {
    return (
      <div className="App">
        <h1>Products manager</h1>
        <AddItem
         onAdd={this.onAdd} />
        {
          this.state.products.map(product => {
            return (
             <ProductItem
             key={product.name}
             {...product}
             onDelete={this.onDelete} 
             onEditSubmit={this.onEditSubmit}
             />
            );
          })
        }
        

      </div>
    );
  }
}

export default App;
