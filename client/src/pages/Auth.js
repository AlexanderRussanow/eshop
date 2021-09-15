import React, { useContext } from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { Context } from "../index";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../consts";

const Auth = () => {
   const location = useLocation()
   const isLogin = location.pathname === LOGIN_ROUTE
   const { user } = useContext(Context)

   console.log(location)
   return (
      <Container className="d-flex justify-content-center align-items-center" style={{ height: window.innerHeight - 54 }}>
         <Card style={{ width: 700 }} className="p-5">
            <h3 className="m-auto">{isLogin ? "Login form" : "Registration"}</h3>
            <Form className="d-flex flex-column">
               <Form.Control
                  placeholder="your email"
                  className="mt-3"
               />
               <Form.Control
                  placeholder="your password"
                  className="mt-3"
               />
               <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                  <Button onClick={() => user.setIsAuth(true)} variant={"outline-success"}>{isLogin ? "Login!" : "Register"}</Button>
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
}

export default Auth