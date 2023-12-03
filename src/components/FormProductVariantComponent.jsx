import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { FormGroup, Col, Label, Input, Row, Button } from "reactstrap";
import UserValidation from "../validations/UserValidation";
import { getProductsList } from "../actions/generalAction";

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

const renderSelectField = ({
  input,
  label,
  options,
  meta: { touched, error },
}) => (
  <div>
    <Col md="12">
      <Label htmlFor="{input}" className="col-form-label">
        {label}
      </Label>
    </Col>
    <Col md="12">
      <select {...input} className="form-control">
        <option value="" disabled>
          Select {label}
        </option>
        {Array.isArray(options) &&
          options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
      </select>
      {touched && error && <span className="error">{error}</span>}
    </Col>
  </div>
);

const mapStateToProps = (state) => {
  return {
    initialValues: {
      name: state.generals.getDetail.name,
      code: state.generals.getDetail.code,
      qty: state.generals.getDetail.qty,
      price: state.generals.getDetail.price,
      active: state.generals.getDetail.active,
      image_link: state.generals.getDetail.image_link,
      product_id: state.generals.getDetail.product_id,
      created_user: state.generals.getDetail.created_user,
      created_at: state.generals.getDetail.created_at,
      pList: state.generals.getList.filter(item => item.active !== false),
    },
  };
};

class FormProductCategoryComponent extends Component {
  componentDidMount() {
    this.props.dispatch(getProductsList());
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup row>
          <Col md={3}>
            <FormGroup>
              <Field
                type="text"
                name="name"
                component={renderField}
                label="Nama (Wajib Diisi):"
              />
            </FormGroup>
          </Col>

          <Col md={3}>
            <FormGroup>
              <Field
                name="product_id" // Use a unique name for the field
                component={renderSelectField}
                label="Product (Wajib Dipilih)" // Specify the label for the dropdown
                options={this.props.initialValues.pList}
              />
            </FormGroup>
          </Col>

          <Col md={2}>
            <FormGroup>
              <Field
                type="text"
                className="h-15px w-15px"
                name="qty"
                component={renderField}
                label="Quantity (Wajib Diisi):"
              />
            </FormGroup>
          </Col>

          <Col md={2}>
            <FormGroup>
              <Field
                type="text"
                className="h-15px w-15px"
                name="price"
                component={renderField}
                label="Price (Wajib Diisi):"
              />
            </FormGroup>
          </Col>

          <Col md={2}>
            <FormGroup>
              <Field
                type="checkbox"
                className="h-15px w-15px"
                name="active"
                component={renderField}
                label="active (Wajib Diisi):"
                checked={this.props.initialValues.active}
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="image_link"
                component={renderField}
                label="Image Link (Wajib Diisi):"
              />
            </FormGroup>
          </Col>

          <Col md={2}>
            <FormGroup>
              <Field
                readOnly
                type="text"
                name="code"
                component={renderField}
                label="Code :"
              />
            </FormGroup>
          </Col>

          <Col md={2}>
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

          <Col md={2}>
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
        </FormGroup>

        <FormGroup row>
          <Col md={2}>
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
  enableReinitialize: true,
})(FormProductCategoryComponent);
export default connect(mapStateToProps, null)(FormProductCategoryComponent);
