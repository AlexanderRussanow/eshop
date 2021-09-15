import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Row } from 'react-bootstrap'
import { Context } from '../index'
import DeviceItem from './DeviceItem'

const DeviceList = observer(() => {
   const { device } = useContext(Context)
   return (
      <Row className="d-flex">
         {
            device.device.map(d =>
               <DeviceItem key={d.id} device={d} />
            )
         }
      </Row>
   )
})

export default DeviceList