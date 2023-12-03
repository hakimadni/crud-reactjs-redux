import React, { Component } from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import { getProductCategoryDetails } from "../../actions/generalAction";
import DetailComponent from "../../components/DetailComponent";
import { BackComponent } from "../../components/BackComponent";

class DetailProductCategoryContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getProductCategoryDetails(this.props.id));
  }

  render() {
    return (
      <Container>
        <BackComponent/>
        <h1>Detail Product Category</h1>
        <DetailComponent />
      </Container>
    );
  }
}

export default connect()(DetailProductCategoryContainer);