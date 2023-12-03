import React, { Component } from "react";
import { connect } from "react-redux";
import CardComponent from "../components/CardComponent";
import { Col, Container, Row } from "reactstrap";
import {
  deleteProductCategoriesList,
  deleteProductVariantsList,
  deleteProductsList,
  loadData,
  logIn,
} from "../actions/generalAction";
import Login from "../components/LoginComponent";
import Swal from "sweetalert2";

class HomeContainer extends Component {
  componentDidMount() {
    this.props.dispatch(loadData());
    this.props.dispatch(deleteProductCategoriesList());
    this.props.dispatch(deleteProductsList());
    this.props.dispatch(deleteProductVariantsList());
  }

  renderLinks() {
    // Check the login state from the Redux store
    const loggedIn = this.props.loggedIn;
    const username = this.props.username;

    if (loggedIn == true) {
      if (username === "administrator") {
        return (
          <Row>
            <Col>
              <CardComponent
                nama={"Product Categories"}
                link={"productcategories"}
                count={this.getCountForCard("Product Category")}
              />
            </Col>
            <Col>
              <CardComponent
                nama={"Products"}
                link={"products"}
                count={this.getCountForCard("Product")}
              />
            </Col>
            <Col>
              <CardComponent
                nama={"Product Variants"}
                link={"productvariants"}
                count={this.getCountForCard("Product Variant")}
              />
            </Col>
            <Col>
              <CardComponent
                nama={"Transactions"}
                link={"transactions"}
                count={this.getCountForCard("Transaction")}
              />
            </Col>
          </Row>
        );
      } else {
        return (
          <Row>
            <Col>
              <CardComponent
                nama={"Transaction"}
                link={"transactions/create"}
              />
            </Col>
          </Row>
        );
      }
    } else {
      return (
        <div>
          <Login onSubmit={(data) => this.handleSubmit(data)} />
        </div>
      );
    }
  }

  componentDidUpdate(prevProps) {
    // Check if the username has changed
    if (this.props.username !== prevProps.username) {
      this.handleUsernameChange();
    }
  }

  handleUsernameChange() {
    // You can add logic here to respond to username changes
    const username = this.props.username;
    if (username) {
      Swal.fire({
        title: "Login Success!",
        text: `Welcome ${username}`,
        icon: "success",
        confirmButtonText: "Continue",
      });
    }
  }

  handleSubmit(data) {
    this.props.dispatch(logIn(data.username));
  }

  getCountForCard = (tableName) => {
    const { dataSummary } = this.props;
    if (dataSummary != false) {
      const countData = dataSummary.find(
        (item) => item.TABLE_NAME === tableName
      );
      console.log(countData);
      return countData ? countData.rowcount : 0;
    }
    return 0;
  };

  render() {
    const { dataSummary } = this.props;
    if (dataSummary !== false && Array.isArray(dataSummary)) {
      return (
        <div>
          <Container className="mt-5">{this.renderLinks()}</Container>
        </div>
      );
    } else {
      // Render loading state or handle the case where dataSummary is not yet loaded
      return <div>Loading...</div>;
    }
  }
}

// Map the login state to props
const mapStateToProps = (state) => {
  return {
    dataSummary: state.generals.getList,
    loggedIn: sessionStorage.getItem("loggedIn") === "true",
    username: sessionStorage.getItem("username"),
  };
};

export default connect(mapStateToProps)(HomeContainer);
