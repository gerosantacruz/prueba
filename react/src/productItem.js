import React, { Component } from 'react';



class ProductItem extends Component {
    constructor(props){
        super(props);

        this.state ={
            isedit:false
        }

        this.onDelete= this.onDelete.bind(this);
        this.onEdit= this.onEdit.bind(this);
        this.onEditSubmit= this.onEditSubmit.bind(this)
    }

    onDelete(){
        const {onDelete, name} = this.props;
        onDelete(name);
    }

    onEdit(){
        this.setState({isedit:true});
    }

    onEditSubmit(event){
       event.preventDefault();
       this.props.onEditSubmit(this.nameInput.value, this.priceInput.value, this.props.name );
       this.setState({isedit:false});
    }
 
  render() {
    const {name, price}= this.props;

    return (
    <div>
        {
            this.state.isedit ? (
            <form onSubmit={this.onEditSubmit}>
            <input placeholder="name" ref={nameInput => this.nameInput=nameInput} defaultValue={name} />
        <   input placeholder="price"ref={priceInput => this.priceInput=priceInput} defaultValue={price}/>
            <button>Guardar</button>
            </form>
        )
        :
        (<div>
        <span>{name}</span> 
        {" | "}
        <span>{price}</span>
        {" | "}
        <button onClick={this.onDelete}>borrar</button>
        {" | "}
        <button onClick={this.onEdit}>Editar</button>
        </div>
        )
        }

        

    </div>);
  }
}


export default ProductItem;