import React, { Component } from 'react'
import TableComponent from '../../components/TableComponent'
import { connect } from "react-redux";
import { deleteProductDetails } from '../../actions/productAction';
import { deleteCreate, getProductsList } from '../../actions/generalAction';


 class ProductsListContainer extends Component {
  componentDidMount(){
    this.props.dispatch(getProductsList())
    this.props.dispatch(deleteProductDetails())
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

export default connect()(ProductsListContainer);
