import React from 'react'
import { Row, Col, Button } from 'reactstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBills } from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2';
import { connect } from 'react-redux';
import { pay } from "..//actions/transactionAction";

const mapStateToProps = (state) => {
  return {
    id: state.generals.getDetail.id,
    username: sessionStorage.getItem('username'),
  };
};

const mapDispatchToProps = {
  pay
};

const PayComponent = (props) => {

  return (
    <Row className="mt-3">
        <Col>
            <Button color="success" className="me-2" onClick={pay}>
            <FontAwesomeIcon icon={faMoneyBills} /> Pay
          </Button>
        </Col>
    </Row>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PayComponent);