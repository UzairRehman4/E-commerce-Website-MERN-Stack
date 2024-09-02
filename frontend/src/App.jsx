import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import "remixicon/fonts/remixicon.css";
function App() {
  return (
    <>
      <div className="custom-background">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
