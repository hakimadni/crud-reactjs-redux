import React, { Component } from "react";
import { Container } from "reactstrap";
import { BackComponent } from "../../components/BackComponent";
import FormComponent from "../../components/FormProductVariantComponent";
import { connect } from "react-redux";
import { postProductVariantCreate } from "../../actions/productVariantAction";
import Swal from 'sweetalert2'
import { getProductVariantsList } from "../../actions/generalAction";

const mapStateToProps = (state) => {
  return {
    responseData: state.productsVariant.responseData,
    errorResponseData: state.productsVariant.errorResponseData,
  };
};

class CreateProductVariantContainer extends Component {
  handleSubmit(data) {
    const variantList = this.props.dispatch(getProductVariantsList());
    const variantCount = variantList? (variantList.length):(0);

    const generateProductCode = (id) => {
      const paddedId = String(id).padStart(7, "0");
      return `${paddedId}`;
    };
    
    const generateProductVariantCode = (id) => {
      const paddedId = String(id).padStart(4, "0");
      return `${paddedId}`;
    };
    
    const productCode = generateProductVariantCode(variantCount + 1);

    const currDate = new Date().toLocaleDateString();
    const currTime = new Date().toLocaleTimeString();
    

    data.code = "PDCT"+generateProductCode(data.product_id)+productCode;
    data.created_at = currDate + " " + currTime;
    data.created_user = "Operator";
    console.log(data);
    this.props.dispatch(postProductVariantCreate(data));
  }
  render() {
  if(this.props.responseData || this.props.errorResponseData){
      if(this.props.errorResponseData){
        Swal.fire({
          title: 'Create Product Variant Failed!',
          text: this.props.errorResponseData,
          icon: 'error',
          confirmButtonText: 'Okay!'
        })
      }else{
        Swal.fire({
          title: 'Product Variant Created!',
          text: 'Product Variant '+this.props.responseData.name+" Created",
          icon: 'success'
        }).then((result)=>{
          if (result.isConfirmed) {
          window.location = "/productvariants";
          }
        })
      }
      
    }
    return (
      <div>
        <Container>
          <BackComponent />
          <h1>Create Product Variant</h1>
          <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(CreateProductVariantContainer);
