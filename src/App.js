import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/Contact/contact";
import Aj from "./containers/yakuza-aj/aj";
import Privacy from "./containers/PrivacyPolicy/Privacy";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Tnc from "./containers/tearm-condition/tnc";
import "./App.css";
function App() {
  return (
    <Router>
      <Routes>  
        <Route path="/*" element={<Home />}></Route>
        <Route path="/contact" exact element={<Contact />}></Route>
        <Route path="/aj/:id"  element={<Aj />}></Route>
        <Route path="/tearm-and-condition" exact  element={<Tnc />}></Route>
        <Route path="/privacy-policy" exact  element={<Privacy />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
