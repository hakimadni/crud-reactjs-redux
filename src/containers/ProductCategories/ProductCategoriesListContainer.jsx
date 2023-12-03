import React, { Component } from 'react'
import TableComponent from '../../components/TableComponent'
import { connect } from "react-redux";
import { deleteProductCategoryDetails } from '../../actions/productCategoryAction';
import { deleteCreate, getProductCategoriesList } from '../../actions/generalAction';

 class ProductCategoriesListContainer extends Component {
  componentDidMount(){
    this.props.dispatch(getProductCategoriesList())
    this.props.dispatch(deleteProductCategoryDetails())
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

export default connect()(ProductCategoriesListContainer);
