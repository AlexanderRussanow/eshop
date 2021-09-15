import React from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../consts";
import { login, registration } from "../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../index";


const Auth = observer(() => {
   const location = useLocation()
   const isLogin = location.pathname === LOGIN_ROUTE

   const { user } = React.useContext(Context)

   const [email, setEmail] = React.useState('')
   const [password, setPassword] = React.useState('')

   const onClick = async () => {
      try {
         let data
         if (isLogin) {
            data = await login(email, password)  
         } else {
            data = await registration(email, password)
         }
         user.setUser(data)
         user.setIsAuth(true)
         console.log(user)
      } catch (e) {
         console.log(e)
      }
   }


   return (
      <Container className="d-flex justify-content-center align-items-center" style={{ height: window.innerHeight - 54 }}>
         <Card style={{ width: 700 }} className="p-5">
            <h3 className="m-auto">{isLogin ? "Login form" : "Registration"}</h3>
            <Form className="d-flex flex-column">
               <Form.Control
                  placeholder="your email"
                  className="mt-3"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
               />
               <Form.Control
                  placeholder="your password"
                  className="mt-3"
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  type="password"
               />
               <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                  <Button onClick={onClick} variant={"outline-success"}>{isLogin ? "Login!" : "Register"}</Button>
                  {
                     isLogin
                        ?
                        <div>
                           Have no account? <NavLink to={REGISTRATION_ROUTE}>Register today!</NavLink>
                        </div>
                        :
                        <div>
                           Alredy Have account? <NavLink to={LOGIN_ROUTE}>Login!</NavLink>
                        </div>
                  }
               </Row>
            </Form>
         </Card>
      </Container>
   )
})

export default Auth