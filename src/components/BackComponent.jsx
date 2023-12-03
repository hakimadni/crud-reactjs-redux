import React from 'react'
import { Row, Col, Button } from 'reactstrap'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const BackComponent = () => {
  let navigate  = useNavigate();
  return (
    <Row className="mt-3">
        <Col>
            <Button color="dark" className="me-2" onClick={() => navigate(-1)}>
              <FontAwesomeIcon icon={faArrowLeft} /> Back
            </Button>
        </Col>
    </Row>
  )
}
