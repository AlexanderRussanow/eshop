import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import CreateBrand from '../modals/CreateBrand'
import CreateDevice from '../modals/CreateDevice'
import CreateType from '../modals/CreateType'

const AdminDashboard = () => {
   const [brandModalVisible, setBrandModalVisible] = React.useState(false)
   const [typeModalVisible, setTypeModalVisible] = React.useState(false)
   const [deviceModalVisible, setDeviceModalVisible] = React.useState(false)

   return (
      <Container className="d-flex flex-column">
         <h2 style={{ textAlign: 'center', marginTop: 10 }}>Admin Dashboard</h2>
         <Row>
            <Button onClick={() => setTypeModalVisible(true)} className="mt-3">Add type</Button>
            <Button onClick={() => setBrandModalVisible(true)} className="mt-3">Add brand</Button>
            <Button onClick={() => setDeviceModalVisible(true)} className="mt-3">Add device</Button>
            <CreateBrand show={brandModalVisible} onHide={() => setBrandModalVisible(false)} />
            <CreateType show={typeModalVisible} onHide={() => setTypeModalVisible(false)} />
            <CreateDevice show={deviceModalVisible} onHide={() => setDeviceModalVisible(false)} />
         </Row>



      </Container>
   )
}

export default AdminDashboard