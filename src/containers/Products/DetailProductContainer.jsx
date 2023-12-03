import React, { Component } from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import { getProductDetails } from "../../actions/generalAction";
import DetailComponent from "../../components/DetailComponent";
import { BackComponent } from "../../components/BackComponent";

class DetailProductContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getProductDetails(this.props.id));
  }

  render() {
    return (
      <Container>
        <BackComponent/>
        <h1>Detail Product</h1>
        <DetailComponent />
      </Container>
    );
  }
}

export default connect()(DetailProductContainer);