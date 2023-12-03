import React, { Component } from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import { getProductVariantDetails } from "../../actions/generalAction";
import DetailComponent from "../../components/DetailComponent";
import { BackComponent } from "../../components/BackComponent";

class DetailProductVariantContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getProductVariantDetails(this.props.id));
  }

  render() {
    return (
      <Container>
        <BackComponent/>
        <h1>Detail ProductVariant</h1>
        <DetailComponent />
      </Container>
    );
  }
}

export default connect()(DetailProductVariantContainer);