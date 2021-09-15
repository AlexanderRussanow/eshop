import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DeviceList from "../components/DeviceList";
import TopWidgetBar from "../components/TopWidgetBar";
import WidgetBar from "../components/WidgetBar";

const Shop = () => {
   return (
      <Container>
         <Row className="mt-5">
            <Col md={3}>
               <WidgetBar />
            </Col>
            <Col md={9}>
               <TopWidgetBar />
               <DeviceList />
            </Col>
         </Row>
      </Container>
   )
}

export default Shop