import React from 'react';
import './App.css';
import ProductListContainer from "./containers/productListContainer";
import ProductFormContainer from "./containers/productFormContainer";

function App() {
    return (
        <div className="App">
            <ProductFormContainer/>
            <ProductListContainer/>
        </div>
    );
}

export default App;
