import React from 'react'
import star from '../assets/Vector.png'
import { Card, Col, Image } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { DEVICE_ROUTE } from '../consts'

const DeviceItem = ({ device }) => {
   const history = useHistory()
   return (
      <Col className="mt-3" md={3} onClick={() => history.push(DEVICE_ROUTE + "/" + device.id)}>
         <Card style={{ cursor: 'pointer', width: 150 }} border={"light"}>
            <Image height={150} width={150} src={device.img} />
            <div className=" mt-2 d-flex justify-content-between align-items-center">
               <div>
                  {device.name}
               </div>
               <div className='d-flex align-items-center'>
                  <div>
                     {device.rating}
                  </div>
                  <Image height={18} width={18} src={star} />
               </div>
            </div>
            <div>
               bran...
            </div>
         </Card>
      </Col>
   )
}

export default DeviceItem