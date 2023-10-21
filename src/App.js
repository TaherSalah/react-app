import About from "./components/About/About";
import Parent from "./Parent";
import Contacts from "./components/Contacts/Contacts";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <>
      <Contacts />
      <About />
      <Parent />
    </>
  );
}

export default App;
