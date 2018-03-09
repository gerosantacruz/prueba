import React, { Component } from 'react';



class AddItem extends Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
        event.preventDefault();
        this.props.onAdd(this.nameInput.value, this.priceInput.value);
        this.nameInput.value="";
        this.priceInput.value="";
    }


    render() {
    const {name, price}= this.props;

    return (
    <form onSubmit={this.onSubmit}>
        <h3> Agregar producto </h3>
        <input placeholder="name" ref={nameInput => this.nameInput=nameInput} />
        <input placeholder="price"ref={priceInput => this.priceInput=priceInput}/>
        <button>Agregar</button>

        <hr />
    </form>);
  }
}


export default AddItem;