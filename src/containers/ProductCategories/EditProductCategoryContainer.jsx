import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { BackComponent } from '../../components/BackComponent'
import FormComponent from '../../components/FormProductCategoryComponent';
import { putProductCategoryUpdate } from '../../actions/productCategoryAction';
import { getProductCategoryDetails } from '../../actions/generalAction';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';

const mapStateToProps = (state) => {
  return {
    responseData: state.productsCategory.responseData,
    errorResponseData: state.productsCategory.errorResponseData,
  };
};


class EditProductCategoryContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getProductCategoryDetails(this.props.id));
  
  }
  handleSubmit(data) {
    const currDate = new Date().toLocaleDateString();
    const currTime = new Date().toLocaleTimeString();
    data.updated_at = currDate + " " + currTime;
    data.updated_user = "Operator";
    data.id = this.props.id;
    console.log(data);
    this.props.dispatch(putProductCategoryUpdate(data, data.id));
  }
  render() {
    if(this.props.responseData || this.props.errorResponseData){
      if(this.props.errorResponseData){
        Swal.fire({
          title: 'Update Product Category Failed!',
          text: this.props.errorResponseData,
          icon: 'error',
          confirmButtonText: 'Okay!'
        })
      }else{
        Swal.fire({
          title: 'Product Category Updated!',
          text: 'Product Category '+this.props.responseData.name+" Updated",
          icon: 'success',
          confirmButtonText: 'Ok!'
        }).then((result)=>{
          if (result.isConfirmed) {
          window.location = "/productcategories";
          }
        })
      }
    }
    return (
      <Container>
        <BackComponent/>
        <h1>Edit Product Category</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(EditProductCategoryContainer);