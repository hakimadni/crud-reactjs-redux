import React, { Component } from "react";
import { Container } from "reactstrap";
import { BackComponent } from "../../components/BackComponent";
import FormComponent from "../../components/FormProductCategoryComponent";
import { connect } from "react-redux";
import { postProductCategoryCreate } from "../../actions/productCategoryAction";
import Swal from 'sweetalert2'

const mapStateToProps = (state) => {
  return {
    responseData: state.productsCategory.responseData,
    errorResponseData: state.productsCategory.errorResponseData,
  };
};

class CreateProductCategoryContainer extends Component {
  handleSubmit(data) {
    const currDate = new Date().toLocaleDateString();
    const currTime = new Date().toLocaleTimeString();
    data.created_at = currDate + " " + currTime;
    data.created_user = "Operator";
    console.log(data);
    this.props.dispatch(postProductCategoryCreate(data));
  }
  render() {
  if(this.props.responseData || this.props.errorResponseData){
      if(this.props.errorResponseData){
        Swal.fire({
          title: 'Create Product Category Failed!',
          text: this.props.errorResponseData,
          icon: 'error',
          confirmButtonText: 'Okay!'
        })
      }else{
        Swal.fire({
          title: 'Product Category Created!',
          text: 'Product Category '+this.props.responseData.name+" Created",
          icon: 'success'
        }).then((result)=>{
          if (result.isConfirmed) {
          window.location = "/productcategories";
          }
        })
      }
      
    }
    return (
      <div>
        <Container>
          <BackComponent />
          <h1>Create Product Category</h1>
          <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(CreateProductCategoryContainer);
