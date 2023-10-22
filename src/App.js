import About from "./components/About/About";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import Contacts from "./components/Contacts/Contacts";
function App() {
  return (
    <>
      <Navbar />
    <div className="container">

    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contacts" element={<Contacts />}>


        <Route path="" ></Route>

          <Route path="services" element={<h1> services</h1>} ></Route>
          <Route path="projects" element={<h1> projects</h1>} ></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
      <Footer />
    </>
  );
}

export default App;
