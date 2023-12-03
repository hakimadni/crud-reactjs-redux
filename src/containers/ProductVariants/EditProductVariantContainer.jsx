import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { BackComponent } from '../../components/BackComponent'
import FormComponent from '../../components/FormProductVariantComponent';
import { putProductVariantUpdate } from '../../actions/productVariantAction';
import { getProductVariantDetails } from '../../actions/generalAction';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';

const mapStateToProps = (state) => {
  return {
    responseData: state.productsVariant.responseData,
    errorResponseData: state.productsVariant.errorResponseData,
  };
};


class EditProductVariantContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getProductVariantDetails(this.props.id));
  }
  handleSubmit(data) {
    const currDate = new Date().toLocaleDateString();
    const currTime = new Date().toLocaleTimeString();
    data.updated_at = currDate + " " + currTime;
    data.updated_user = "Operator";
    data.id = this.props.id;
    console.log(data);
    this.props.dispatch(putProductVariantUpdate(data, data.id));
  }
  render() {
    if(this.props.responseData || this.props.errorResponseData){
      if(this.props.errorResponseData){
        Swal.fire({
          title: 'Update Product Variants Failed!',
          text: this.props.errorResponseData,
          icon: 'error',
          confirmButtonText: 'Okay!'
        })
      }else{
        Swal.fire({
          title: 'Product Variants Updated!',
          text: 'Product Variants '+this.props.responseData.name+" Updated",
          icon: 'success',
          confirmButtonText: 'Okay'
        }).then((result) => {
          if (result.isConfirmed) {
            window.location = `/productvariants`;
            }
        })
      }
      
    }
    return (
      <Container>
        <BackComponent/>
        <h1>Edit User</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(EditProductVariantContainer);