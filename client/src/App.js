import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import AppNavbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <AppNavbar />
      <AppRouter />
    </BrowserRouter>

  );
}

export default App;
