
import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import { Button, Form } from "react-bootstrap";

const CreateBrand = ({ show, onHide }) => {
   const [value, setValue] = useState('')

   const addBrand = () => {
      
   }
   return (
      <Modal
         show={show}
         onHide={onHide}
         centered
      >
         <Modal.Header >
            <Modal.Title id="contained-modal-title-vcenter">
               Add new brand
            </Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <Form>
               <Form.Control
                  value={value}
                  onChange={e => setValue(e.target.value)}
                  placeholder={"Fill in new brand"}
               />
            </Form>
         </Modal.Body>
         <Modal.Footer>
            <Button onClick={onHide}>Close</Button>
            <Button onClick={addBrand}>Add</Button>
         </Modal.Footer>
      </Modal>
   );
};

export default CreateBrand;