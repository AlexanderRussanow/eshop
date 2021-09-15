import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom'
import { Context } from "../index";
import { SHOP_ROUTE } from "../consts";
import { privateRoutes, publicRoutes } from "../routes";
import { observer } from "mobx-react-lite";

const AppRouter = observer(() => {
   const { user } = React.useContext(Context)
   return (
      <Switch>
         {
            user.isAuth
               ? privateRoutes.map(r =>
                  <Route key={r.path} exact path={r.path} component={r.Component} />
               )
               : publicRoutes.map(r =>
                  <Route key={r.path} exact path={r.path} component={r.Component} />
               )
         }
         <Redirect to={SHOP_ROUTE} />
      </Switch>
   )
})

export default AppRouter