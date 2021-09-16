import { observer } from "mobx-react-lite";
import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { Context } from "./index";
import AppRouter from "./components/AppRouter";
import AppNavbar from "./components/Navbar";
import { check } from "./http/userAPI";
import { Spinner } from "react-bootstrap";

const App = observer(() => {
  const { user } = React.useContext(Context)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    check().then(data => {
      // user.setUser(true)
      user.setIsAuth(true)
    }).finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner animation={"grow"} />
  }

  return (
    <BrowserRouter>
      <AppNavbar />
      <AppRouter />
    </BrowserRouter>

  );
})

export default App;
