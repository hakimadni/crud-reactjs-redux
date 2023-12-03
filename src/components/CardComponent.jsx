import React from "react";
import { Card, CardBody, CardTitle, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

export default function CardComponent({ nama, link, count }) {
  return (
    <div>
      <Link to={link} style={{ textDecoration: "none" }}>
        <Card
          className="my-2"
          style={{
            height: "100px",
          }}
        >
          <CardBody>
            <Row>
              <CardTitle tag="h5">Page {nama}</CardTitle>
            </Row>
            <Row>
              <Col></Col>
              <Col className="col-auto">{count}</Col>
            </Row>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
}
