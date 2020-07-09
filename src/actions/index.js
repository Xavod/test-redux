export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const DELETE_PRODUCT_REQUEST = 'DELETE_PRODUCT_REQUEST';
export const DELETE_PRODUCT_FAILURE = 'DELETE_PRODUCT_FAILURE';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const ADD_PRODUCT_REQUEST = 'ADD_PRODUCT_REQUEST';
export const ADD_PRODUCT_FAILURE = 'ADD_PRODUCT_FAILURE';
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const PRODUCT_FORM_HANDLE_CHANGE = 'PRODUCT_FORM_HANDLE_CHANGE'
export const PRODUCT_FORM_SUBMIT = 'PRODUCT_FORM_SUBMIT'


export function fetchProducts() {
    return dispatch => {
        dispatch(fetchProductsRequest());
        fetch('http://ecommerce.pierre-jehan.com/api/products')
            .then(response => response.json())
            .then(data => dispatch(fetchProductsSuccess(data['hydra:member'])))
            .catch(err => dispatch(fetchProductsFailure(err)))
    }
}

export function fetchProductsRequest() {
    return {type: FETCH_PRODUCTS_REQUEST};
}

export function fetchProductsFailure(error) {
    return {type: FETCH_PRODUCTS_FAILURE, payload: error}
}

export function fetchProductsSuccess(products) {
    return {type: FETCH_PRODUCTS_SUCCESS, payload: products}
}

export function deleteProduct(product) {
    return dispatch => {
        dispatch(deleteProductRequest());
        fetch('http://ecommerce.pierre-jehan.com/api/products/' + product.id, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.status === 204) {
                    dispatch(deleteProductSuccess(product));
                } else {
                    dispatch(deleteProductFailure(response.statusText));
                }
            })
            .catch(err => dispatch(deleteProductFailure(err)))
    }
}

export function deleteProductRequest() {
    return {type: DELETE_PRODUCT_REQUEST};
}

export function deleteProductFailure(error) {
    return {type: DELETE_PRODUCT_FAILURE, payload: error};
}

export function deleteProductSuccess(product) {
    return {type: DELETE_PRODUCT_SUCCESS, payload: product};
}

export function addProduct() {
    return (dispatch, getState) => {
        const productFormData = getState().productsReducer.productForm;
        dispatch(addProductRequest());
        fetch('http://ecommerce.pierre-jehan.com/api/products', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productFormData)
        })
            .then(response => {
                console.log('response.status' + response.status);
                if (response.status === 201) {
                    console.log('ok');
                    return response.json();
                } else {
                    dispatch(addProductFailure(response.statusText));
                }
            })
            .then(data => dispatch(addProductSuccess(data)))
            .catch(err => dispatch(addProductFailure(err)))
    }
}

export function addProductRequest() {
    return {type: ADD_PRODUCT_REQUEST};
}

export function addProductFailure(error) {
    return {type: ADD_PRODUCT_FAILURE, payload: error};
}

export function addProductSuccess(product) {
    return {type: ADD_PRODUCT_SUCCESS, payload: product};
}


export function productFormHandleChange(name, value) {
    return {type: PRODUCT_FORM_HANDLE_CHANGE, payload: {name: name, value: value}}
}


