import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import star from '../assets/star-big.png'

const device = { id: 1, name: 'Pro 12', price: 29000, rating: 0, img: 'https://cdn.alza.cz/Foto/f16/RI/RI034b1.jpg' }
const description = [
   { id: 1, title: 'very good', info: "12 RAM, 128 Gb, M1 3000" }
]

const DeviceDescription = () => {
   return (
      <Container className="mt-3">
         <Row >
            <Col md={4}>
               <Image width={300} height={300} src={device.img} />
            </Col>
            <Col md={4}>
               <Row className="d-flex justify-column align-items-center">
                  <h2>{device.name}</h2>
                  <div className="d-flex justify-content-center align-items-center"
                     style={{ background: `url(${star}) no-repeat center center`, width: 260, height: 260, fontSize: 50, backgroundSize: 'cover' }}>
                     {device.rating}
                  </div>
               </Row>
            </Col>
            <Col md={4}>
               <Card className="d-flex flex-column align-items-center justify-content-around" style={{ width: 300, height: 300, border: "5px solid black" }}>
                  <h3>
                     {device.price}
                  </h3>
                  <Button>Add to cart</Button>
               </Card>
            </Col>
         </Row>
         <Row>
            <h2>Device description:</h2>
            {
               description.map((i, index) =>
                  <Row style={{ background: "lightgray" }} className="d-flex flex-column m-4" key={i.id}>
                     {i.title}: {i.info}
                  </Row>
               )
            }
         </Row>

      </Container>
   )
}

export default DeviceDescription