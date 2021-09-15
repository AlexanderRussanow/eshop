import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { Context } from "..";

const WidgetBar = observer(() => {
   const { device } = useContext(Context)

   return (
      <>
         <h5 >Popular categories</h5>
         <ListGroup>
            {
               device.type.map(t =>
                  <ListGroup.Item style={{ cursor: 'pointer' }} active={t.id === device.selectType.id} onClick={() => device.setSelectedType(t)} key={t.id}>{t.name}</ListGroup.Item>
               )
            }
         </ListGroup>
         <h5 className="mt-3">Popular brands</h5>
         <ListGroup className="mt-3">
            {
               device.brand.map(t =>
                  <ListGroup.Item style={{ cursor: 'pointer' }} active={t.id === device.selectBrand.id} onClick={() => device.setSelectedBrand(t)} key={t.id}>{t.name}</ListGroup.Item>
               )
            }
         </ListGroup>
         <h5 className="mt-3">Popular items</h5>
         <ListGroup className="mt-3">
            {
               device.device.map(t =>
                  <ListGroup.Item style={{ cursor: 'pointer' }} active={t.id === device.selectDevice.id} onClick={() => device.setSelectedDevice(t)} key={t.id}>{t.name}</ListGroup.Item>
               )
            }
         </ListGroup>
      </>
   )
})

export default WidgetBar