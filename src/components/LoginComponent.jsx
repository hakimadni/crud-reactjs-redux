
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { FormGroup, Col, Label, Input, Row, Button } from "reactstrap";
import UserValidation from "../validations/UserValidation";

const renderField = ({
  input,
  type,
  placeholder,
  label,
  disabled,
  readOnly,
  meta: { touched, error, warning },
}) => (
  <Row>
    <Col md="12">
      <Label htmlFor="{input}" className="col-form-label">
        {label}
      </Label>
    </Col>
    <Col md="12">
      <Input
        {...input}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
      ></Input>
      {touched &&
        ((error && <p style={{ color: "red" }}>{error}</p>) ||
          (warning && <p style={{ color: "brown" }}>{warning}</p>))}
    </Col>
  </Row>
);

const mapStateToProps = (state) => {
  return {
    initialValues : {
      username : state.generals.getDetail.username,
      loggedIn : state.generals.getDetail.loggedIn,
    }
  };
};

class LoginComponent extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup className="mx-auto">

          <Col md={4}>
            <FormGroup>
              <Field
                type="text"
                name="username"
                component={renderField}
                label="username :"
              />
            </FormGroup>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col md="12">
            <FormGroup>
              <Button
                color="dark"
                type="submit"
                disabled={this.props.submitting}
              >
                Login
              </Button>
            </FormGroup>
          </Col>
        </FormGroup>
      </form>
    );
  }
}

LoginComponent = reduxForm({
  form: "LoginComponent",
  validate: UserValidation,
  enableReinitialize: true,
})(LoginComponent);
export default connect(mapStateToProps, null)(LoginComponent);