import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Card, Container } from 'react-bootstrap'
import { Context } from '../index'

const TopWidgetBar = observer(() => {
   const { device } = useContext(Context)
   return (
      <Container className="d-flex">
         {
            device.brand.map(d =>
               <Card
                  style={{ cursor: 'pointer' }}
                  className="p-3"
                  border={d.id === device.selectBrand.id ? 'danger' : "light"}
                  onClick={() => device.setSelectedBrand(d)}
                  key={d.id}
               >
                  {d.name}
               </Card>
            )
         }
      </Container>
   )
})

export default TopWidgetBar