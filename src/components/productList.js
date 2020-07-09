import React from 'react';
import Loader from 'react-loader-spinner';

function ProductList(props) {

    const {products, loading } = props;

    if (loading) {
        return <Loader type="Puff"/>;
    }
    const productsJsx = products.map(p => <li key={p.id}>
        {p.title}
        <button onClick={() => props.deleteProduct(p)}>x</button>
    </li>)
    return (
        <ul>
            {productsJsx}
        </ul>
    );
}

export default ProductList;
