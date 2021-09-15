
import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import { Button, Form } from "react-bootstrap";

const CreateType = ({ show, onHide }) => {
   const [value, setValue] = useState('')

   const addType = () => {
      
   }
   return (
      <Modal
         show={show}
         onHide={onHide}
         centered
      >
         <Modal.Header >
            <Modal.Title id="contained-modal-title-vcenter">
               Add new device type
            </Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <Form>
               <Form.Control
                  value={value}
                  onChange={e => setValue(e.target.value)}
                  placeholder={"Fill in device type"}
               />
            </Form>
         </Modal.Body>
         <Modal.Footer>
            <Button onClick={onHide}>Close</Button>
            <Button onClick={addType}>Add</Button>
         </Modal.Footer>
      </Modal>
   );
};

export default CreateType;