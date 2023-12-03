import React, { Component } from "react";
import { Col, Container, Row, Table, Spinner } from "reactstrap";
import { connect } from "react-redux";
import { getTransactionDetails } from "../../actions/generalAction";
import { BackComponent } from "../../components/BackComponent";

class DetailContainer extends Component {
  componentDidMount() {
    console.log(this.props.id);
    this.props.dispatch(getTransactionDetails(this.props.id));
  }

  renderTable() {
    const { getDetail, getProductsList } = this.props;
    const status = getDetail.status ? "Success" : "Pending";

    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "IDR",
    });

    const totalQuantity = getProductsList.reduce((total, item) => total + item.qty, 0);
    const totalAmount = getProductsList.reduce((total, item) => total + item.subtotal, 0);

    return (
      <>
        <h1>Invoice</h1>
        <Table striped>
          <tbody>
            <tr>
              <td width="200">Nama</td>
              <td width="10">:</td>
              <td>{getDetail.created_user}</td>
            </tr>
            <tr>
              <td width="200">Transaction Number</td>
              <td width="10">:</td>
              <td>{getDetail.trx_no}</td>
            </tr>
            <tr>
              <td width="200">Total Amount</td>
              <td width="10">:</td>
              <td>{formatter.format(getDetail.total_amount)}</td>
            </tr>
            <tr>
              <td width="200">Status</td>
              <td width="10">:</td>
              <td>{status}</td>
            </tr>
          </tbody>
        </Table>

        <h1>Items</h1>

        <Table striped>
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {getProductsList.map((item) => (
              <tr key={item.id}>
                <td>{item.product_variant_name}</td>
                <td>{item.qty}</td>
                <td>{formatter.format(item.price)}</td>
                <td>{formatter.format(item.subtotal)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className="mt-5">
            <tr>
              <td>Total</td>
              <td>{totalQuantity}</td>
              <td>Total Amount</td>
              <td>{formatter.format(totalAmount)}</td>
            </tr>
          </tfoot>
        </Table>
      </>
    );
  }

  render() {
    const {getProductsList, errorUser } = this.props;

    return (
      <Container>
        <Row>
          <Col>
            <BackComponent />
          </Col>
          <Col md="auto">

          </Col>
        </Row>
        <Row>
          {getProductsList === false ? (
            <Spinner color="primary" />
          ) : errorUser ? (
            <p style={{ color: "red" }}>{errorUser}</p>
          ) : (
            this.renderTable()
          )}
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    getDetail: state.generals.getDetail,
    getProductsList: state.productsVariant.getProductsList,
    errorUser: state.productsCategory.errorUser,
  };
};

export default connect(mapStateToProps, null)(DetailContainer);