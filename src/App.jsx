import Home from "./pages/Home";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";

import "./App.css";
import Projects from "./pages/Projects";

function App() {

  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
