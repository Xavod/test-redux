import {connect} from 'react-redux';
import ProductForm from "../components/productForm";
import {addProduct, productFormHandleChange} from "../actions";

const mapStateToProps = (state, ownProps) => ({
    product: state.productsReducer.productForm
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleChange: (name,value) => dispatch(productFormHandleChange(name, value)),
    handleSubmit: () => dispatch(addProduct())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductForm);
