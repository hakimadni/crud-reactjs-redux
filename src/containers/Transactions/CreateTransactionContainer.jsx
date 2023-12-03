import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import { BackComponent } from "../../components/BackComponent";
import { connect } from "react-redux";
import { postTransactionCreate } from "../../actions/transactionAction";
import Swal from "sweetalert2";
import CatalogueComponent from "../../components/CatalogueComponent";
import { getProductVariantsList } from "../../actions/generalAction";
import CartComponent from "../../components/CartComponent";
import Html5QrcodeComponent from "../../components/Html5QrcodeComponent";
import { addToCart } from "../../actions/cartAction";

const mapStateToProps = (state) => {
  return {
    getList: state.generals.getList,
    cartItems: state.carts.items,
  };
};

class CreateTransactionContainer extends Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback.
    this.onNewScanResult = this.onNewScanResult.bind(this);
    this.state = {
      isScanPaused: false,
    };
  }
  componentDidMount() {
    this.props.dispatch(getProductVariantsList());
  }

  onNewScanResult(decodedText, decodedResult) {
    const { getList, cartItems } = this.props;
    const myValue = decodedText;

    if (this.state.isScanPaused) {
      console.log("Scan paused");
      return;
    }

    const matchingRow = getList.find((item) => item.code === myValue);
    const matchingCart = cartItems.find((item) => item.code === myValue);
    if (matchingRow) {
      if (matchingCart) {
        this.setState({ isScanPaused: true }, () => {
          Swal.fire({
            title: "Item already in your Cart!",
            text: `Please Scan Another Item`,
            icon: "info",
            confirmButtonText: "Okay!",
          }).then(() => {
            // Resume scanning after the user clicks "Okay"
            this.setState({ isScanPaused: false });
          });
        });
      } else {
        this.props.dispatch(addToCart(matchingRow));
        this.setState({ isScanPaused: true }, () => {
          Swal.fire({
            title: "Item Added!",
            text: `Item ${matchingRow.name} added to your cart`,
            icon: "success",
            confirmButtonText: "Okay!",
          }).then(() => {
            // Resume scanning after the user clicks "Okay"
            this.setState({ isScanPaused: false });
          });
        });
      }
    } else {
      console.error(`No matching row found for code: ${myValue}`);
    }
  }

  toggleScan = () => {
    this.setState((prevState) => ({
      isScanEnabled: !prevState.isScanEnabled,
    }));
  };

  render() {
    return (
      <div className="mx-5">
        <BackComponent />
        {/* <FormComponent onSubmit={(data) => this.handleSubmit(data)} /> */}
        <Row className="mt-3">
          <Col md="8">
            <CatalogueComponent />
          </Col>
          <Col md="4">
            <Card className="mb-4">
              <CardHeader>
                <h4>Scan QR or Barcode</h4>
              </CardHeader>
              <CardBody>
              <button onClick={this.toggleScan}>Scan Barcode</button>
                {this.state.isScanEnabled && (
                  <Html5QrcodeComponent
                    className="h-300px"
                    fps={10}
                    qrbox={250}
                    disableFlip={false}
                    qrCodeSuccessCallback={(decodedText, decodedResult) =>
                      this.onNewScanResult(decodedText, decodedResult)
                    }
                  />
                )}
              </CardBody>
            </Card>
            <CartComponent />
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(CreateTransactionContainer);
