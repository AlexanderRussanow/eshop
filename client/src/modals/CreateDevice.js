import React from 'react';
import { Button, Col, Dropdown, Form, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Context } from '..';

const CreateDevice = ({ show, onHide }) => {
   const { device } = React.useContext(Context)

   const [properties, setProperties] = React.useState([])

   const addProperties = () => {
      setProperties([...properties, { title: '', text: '', id: Date.now() }])
   }

   const delProp = (id) => {
      setProperties(properties.filter(p => p.id !== id))
   }

   const addDevice = () => {

   }

   return (
      <Modal
         show={show}
         onHide={onHide}
         centered
      >
         <Modal.Header >
            <Modal.Title id="contained-modal-title-vcenter">
               Add new device
            </Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <Form className="d-flex">
               <Dropdown>
                  <Dropdown.Toggle>Choose type</Dropdown.Toggle>
                  <Dropdown.Menu>
                     {
                        device.type.map(t =>
                           <Dropdown.Item key={t.id}>{t.name}</Dropdown.Item>
                        )
                     }
                  </Dropdown.Menu>
               </Dropdown>
               <Dropdown style={{ marginLeft: 4 }}>
                  <Dropdown.Toggle>Choose Brand</Dropdown.Toggle>
                  <Dropdown.Menu>
                     {
                        device.brand.map(b =>
                           <Dropdown.Item key={b.id}>{b.name}</Dropdown.Item>
                        )
                     }
                  </Dropdown.Menu>
               </Dropdown>
            </Form>
            <Form.Control
               placeholder="type new device name" className="mt-2">
            </Form.Control>
            <Form.Control
               placeholder="type device price" className="mt-2" type='number'>
            </Form.Control>
            <Form.Control
               placeholder="type here new device name" className="mt-2" type='file'>
            </Form.Control>
            <Button className="mt-2" onClick={addProperties}>
               Add properties
            </Button>
            {
               properties.map(p =>
                  <Row key={p.id} className="mt-2">
                     <Col md={4}>
                        <Form.Control
                           placeholder="Type device properties"
                        >

                        </Form.Control>
                     </Col>
                     <Col md={4}>
                        <Form.Control
                           placeholder="Type device description">

                        </Form.Control>
                     </Col>
                     <Col md={4}>
                        <Button onClick={() => delProp(p.id)}>
                           Del
                        </Button>
                     </Col>
                  </Row>
               )
            }
         </Modal.Body>
         <Modal.Footer>
            <Button onClick={onHide}>Close</Button>
            <Button onClick={addDevice}>Add</Button>
         </Modal.Footer>
      </Modal>
   );
};

export default CreateDevice;