import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILURE,
    ADD_PRODUCT_REQUEST,
    ADD_PRODUCT_FAILURE,
    ADD_PRODUCT_SUCCESS,
    PRODUCT_FORM_HANDLE_CHANGE,
    PRODUCT_FORM_SUBMIT
} from "../actions";

const initialProductFormState = {
    title: '',
    photo: '',
    price: 0,
    quantity: 0
};
const initialState = {
    loading: false,
    products: [],
    productForm: initialProductFormState
};

function productsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return {...state, loading: true};
        case FETCH_PRODUCTS_FAILURE:
            return {...state, error: action.payload, loading: false};
        case FETCH_PRODUCTS_SUCCESS:
            return {...state, products: action.payload, loading: false};
        case PRODUCT_FORM_HANDLE_CHANGE:
            return {...state, productForm: {...state.productForm, [action.payload.name]: action.payload.value}}
        case PRODUCT_FORM_SUBMIT:
            return {
                ...state,
                products: [...state.products, {...state.productForm, id: Math.random()}]
            };
        case DELETE_PRODUCT_REQUEST:
            return {...state, loading: true};
        case DELETE_PRODUCT_FAILURE:
            return {...state, error: action.payload, loading: false};
        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                products: state.products.filter(p => p.id !== action.payload.id),
                loading: false
            }
        case ADD_PRODUCT_REQUEST:
            return {...state, loading: true};
        case ADD_PRODUCT_FAILURE:
            return {...state, error: action.payload, loading: false};
        case ADD_PRODUCT_SUCCESS:
            console.log('payload' + action.payload);
            return {
                ...state,
                products: [ ...state.products, action.payload ],
                productForm: initialProductFormState,
                loading: false
            };
        default:
            return state;
    }
}

export default productsReducer;
