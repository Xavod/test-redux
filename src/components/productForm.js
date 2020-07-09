import React from "react";

function ProductForm(props) {

    function manageHandleSubmit(event) {
        event.preventDefault();
        props.handleSubmit();
    }

    return (
        <form onSubmit={event => manageHandleSubmit(event)}>
            <fieldset>
                <legend>Ajouter un produit</legend>
                <input type='text' value={props.product.title}
                       onChange={event => props.handleChange('title', event.target.value)}
                       placeholder='Titre du produit'/>
                <input type='file' value={props.product.photo}
                       onChange={event => props.handleChange('photo', event.target.value)}
                       placeholder='Photo du produit'/>
                <input type='number' value={props.product.price}
                       onChange={event => props.handleChange('price', event.target.value)}
                       placeholder='Prix du produit'/>
                <input type='number' value={props.product.quantity}
                       onChange={event => props.handleChange('quantity', parseFloat(event.target.value))}
                       placeholder='Quantité du produit'/>
                <button>Ajouter</button>
            </fieldset>
        </form>
    )
}

export default ProductForm;
