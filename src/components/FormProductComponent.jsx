import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { FormGroup, Col, Label, Input, Row, Button } from "reactstrap";
import UserValidation from "../validations/UserValidation";
import { getProductCategoriesList } from "../actions/generalAction";

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
      <Label htmlFor="{input}" className="col-form-label">{label}</Label>
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
      plu: state.generals.getDetail.plu,
      active: state.generals.getDetail.active,
      product_category_id: state.generals.getDetail.product_category_id,
      created_user: state.generals.getDetail.created_user,
      created_at: state.generals.getDetail.created_at,
      pCList: state.generals.getList.filter(item => item.active !== false),
    },
  };
};

class FormProductCategoryComponent extends Component {
  componentDidMount() {
    this.props.dispatch(getProductCategoriesList());
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup row>
          <Col md={4}>
            <FormGroup>
              <Field
              type="text"
                name="name"
                component={renderField}
                label="Nama (Wajib Diisi):"
              />
            </FormGroup>
          </Col>

          <Col md={4}>
            <FormGroup>
              <Field
              required
              name="product_category_id"
                component={renderSelectField}
                label="Category (Wajib Dipilih)"
                options={this.props.initialValues.pCList}
              />
            </FormGroup>
          </Col>

          <Col md={4}>
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

          <Col md={4}>
            <FormGroup>
              <Field
                readOnly
                type="text"
                name="plu"
                component={renderField}
                label="plu :"
              />
            </FormGroup>
          </Col>

<Col md={4}>
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

          <Col md={4}>
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
  enableReinitialize: true,
})(FormProductCategoryComponent);
export default connect(mapStateToProps, null)(FormProductCategoryComponent);
