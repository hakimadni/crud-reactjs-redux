import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Spinner, Table } from "reactstrap";
import { getTransactionDetails } from "../actions/generalAction";

class InvoiceComponent extends Component {
  componentDidMount() {
    console.log(this.props.id);
    this.props.dispatch(getTransactionDetails(this.props.id));
  }
  render() {
    


    return (
      <div>
        
      </div>
    );
  }
}



export default connect()(InvoiceComponent);
