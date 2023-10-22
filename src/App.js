import About from "./components/About/About";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import Home from './components/Home/Home';
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="home" element={<Home/>}></Route>
      <Route path="about" element={<About/>}></Route>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
