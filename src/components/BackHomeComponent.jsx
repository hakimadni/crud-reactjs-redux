import React from 'react'
import { Row, Col, Button } from 'reactstrap'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const BackHomeComponent = () => {
  return (
    <Row className="my-3">
        <Col>
        <Link to={"/"}>
            <Button color="dark" className="me-2">
              <FontAwesomeIcon icon={faArrowLeft} /> Back
            </Button>
          </Link>
        </Col>
    </Row>
  )
}
