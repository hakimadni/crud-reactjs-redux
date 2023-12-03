import React, { Component } from 'react'
import TableComponent from '../../components/TableComponent'
import { connect } from "react-redux";
import { deleteProductVariantDetails } from '../../actions/productVariantAction';
import { deleteCreate, getProductVariantsList } from '../../actions/generalAction';


 class ProductVariantsListContainer extends Component {
  componentDidMount(){
    this.props.dispatch(getProductVariantsList())
    this.props.dispatch(deleteProductVariantDetails())
    this.props.dispatch(deleteCreate())
  }
  render() {
    return (
      <div>

        <TableComponent/>
      </div>
    )
  }
}

export default connect()(ProductVariantsListContainer);
