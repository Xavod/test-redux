import {connect} from 'react-redux';
import ProductList from "../components/productList";
import {deleteProduct} from "../actions";

const mapStateToProps = (state, ownProps) => ({
    products: state.productsReducer.products,
    loading: state.productsReducer.loading
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    deleteProduct: product => dispatch(deleteProduct(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
