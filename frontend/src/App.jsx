import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import "remixicon/fonts/remixicon.css";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div className="custom-background">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
