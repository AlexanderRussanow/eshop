import React from 'react'
import { Context } from '../index'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../consts'
import { observer } from 'mobx-react-lite'
import { useHistory } from 'react-router'

const AppNavbar = observer(() => {
   const { user } = React.useContext(Context)
   const history = useHistory()

   return (
      <Navbar bg="dark" variant="dark">
         <Container>
            <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>Best eshop</NavLink>
            {
               user.isAuth
                  ? <Nav className="ml-auto">
                     <Button onClick={() => history.push(ADMIN_ROUTE)}>
                        Admin Dashboard
                     </Button>
                     <Button onClick={() => user.setIsAuth(false)} style={{ marginLeft: 5 }}>
                        Logout
                     </Button>
                  </Nav>
                  : <Nav className="ml-auto">
                     <Button onClick={() => history.push(LOGIN_ROUTE)}>
                        Login
                     </Button>
                  </Nav>
            }
         </Container>
      </Navbar>
   )
})

export default AppNavbar