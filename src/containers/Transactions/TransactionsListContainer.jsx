import React, { Component } from 'react'
import TableComponent from '../../components/TableComponent'
import { connect } from "react-redux";
import { deleteProductVariantsList, getTransactionsList } from '../../actions/generalAction';
import { deleteTransactionCreate, deleteTransactionDetails } from '../../actions/transactionAction';

 class TransactionsListContainer extends Component {
  componentDidMount(){
    this.props.dispatch(deleteProductVariantsList())
    this.props.dispatch(getTransactionsList())
    this.props.dispatch(deleteTransactionDetails())
    this.props.dispatch(deleteTransactionCreate())
  }
  render() {
    return (
      <div>

        <TableComponent/>
      </div>
    )
  }
}

export default connect()(TransactionsListContainer);
