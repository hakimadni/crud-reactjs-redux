
import React, { Component } from "react";
import { reduxForm, Field, reset } from "redux-form";
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
      name : state.generals.getDetail.name,
      active : state.generals.getDetail.active,
      created_user : state.generals.getDetail.created_user,
      created_at : state.generals.getDetail.created_at,
    }
  };
};

class FormProductCategoryComponent extends Component {

  render() {
return (
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup row>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="name"
                component={renderField}
                label="Nama (Wajib Diisi) :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
              readOnly
              type="text"
                name="created_user"
                component={renderField}
                label="created_user :"
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
              type="checkbox"
                className="h-15px w-15px"
                name="active"
                component={renderField}
                label="active (Wajib Diisi) :"
                checked={this.props.initialValues.active}
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
              readOnly
                type="text"
                name="created_at"
                component={renderField}
                label="created_at :"
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
                Submit
              </Button>
            </FormGroup>
          </Col>
        </FormGroup>
      </form>
    );
  }
}
FormProductCategoryComponent = reduxForm({
  form: "FormProductCategoryComponent",
  validate: UserValidation,
  enableReinitialize:true,
persistentSubmitErrors: true,
})(FormProductCategoryComponent);
export default connect(mapStateToProps, null)(FormProductCategoryComponent);