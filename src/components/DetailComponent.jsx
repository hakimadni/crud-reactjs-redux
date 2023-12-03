import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getDetail: state.generals.getDetail,
    errorUser: state.productsCategory.errorUser,
  };
};

const DetailComponent = (props) => {
  const { getDetail } = props;

  const renderRows = () => {
    if (!getDetail) {
      return null;
    }
    return Object.keys(getDetail).map((key) => (
      <tr key={key}>
        <td width="200">{key}</td>
        <td width="10">:</td>
        <td>{String(getDetail[key])}</td>
      </tr>
    ));
  };

  return (
    <Table striped>
      <tbody>{renderRows()}</tbody>
    </Table>
  );
};

export default connect(mapStateToProps, null)(DetailComponent);