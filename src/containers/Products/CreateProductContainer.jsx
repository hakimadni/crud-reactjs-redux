import React, { Component } from "react";
import { Container } from "reactstrap";
import { BackComponent } from "../../components/BackComponent";
import FormComponent from "../../components/FormProductComponent";
import { connect } from "react-redux";
import { postProductCreate } from "../../actions/productAction";
import Swal from 'sweetalert2'
import { getProductsList } from "../../actions/generalAction";

const mapStateToProps = (state) => {
  return {
    count :state.products.getProductsList,
    responseData: state.products.responseData,
    errorResponseData: state.products.errorResponseData,
  };
};

class CreateProductContainer extends Component {
  handleSubmit(data) {
    this.props.dispatch(getProductsList());
    const productCount = this.props.count.length
    const generateProductCode = (id) => {
      const paddedId = String(id).padStart(7, "0");
      return `${paddedId}`;
    };
    
    const productCode = generateProductCode(productCount + 1);

    const currDate = new Date().toLocaleDateString();
    const currTime = new Date().toLocaleTimeString();
    

    data.plu = "PDCT"+generateProductCode(productCode);
    data.created_at = currDate + " " + currTime;
    data.created_user = "Operator";
    console.log(data);
    this.props.dispatch(postProductCreate(data));
  }
  render() {
  if(this.props.responseData || this.props.errorResponseData){
      if(this.props.errorResponseData){
        Swal.fire({
          title: 'Create Product Failed!',
          text: this.props.errorResponseData,
          icon: 'error',
          confirmButtonText: 'Okay!'
        })
      }else{
        Swal.fire({
          title: 'Product Created!',
          text: 'Product '+this.props.responseData.name+" Created",
          icon: 'success'
        }).then((result)=>{
          if (result.isConfirmed) {
          window.location = "/products";
          }
        })
      }
      
    }
    return (
      <div>
        <Container>
          <BackComponent />
          <h1>Create Product</h1>
          <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(CreateProductContainer);
