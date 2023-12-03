import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { BackComponent } from '../../components/BackComponent'
import FormComponent from '../../components/FormProductComponent';
import { putProductUpdate } from '../../actions/productAction';
import { getProductDetails } from '../../actions/generalAction';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';

const mapStateToProps = (state) => {
  return {
    responseData: state.products.responseData,
    errorResponseData: state.products.errorResponseData,
  };
};


class EditProductContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getProductDetails(this.props.id));
  }
  handleSubmit(data) {
    const currDate = new Date().toLocaleDateString();
    const currTime = new Date().toLocaleTimeString();
    data.updated_at = currDate + " " + currTime;
    data.updated_user = "Operator";
    data.id = this.props.id;
    console.log(data);
    this.props.dispatch(putProductUpdate(data, data.id));
  }
  render() {
    if(this.props.responseData || this.props.errorResponseData){
      if(this.props.errorResponseData){
        Swal.fire({
          title: 'Update Products Failed!',
          text: this.props.errorResponseData,
          icon: 'error',
          confirmButtonText: 'Okay!'
        })
      }else{
        Swal.fire({
          title: 'Products Updated!',
          text: 'Products '+this.props.responseData.name+" Updated",
          icon: 'success',
          confirmButtonText: 'Ok'
        }).then((result)=>{
          if (result.isConfirmed) {
          window.location = "/products";
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

export default connect(mapStateToProps, null)(EditProductContainer);