import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/Contact/contact";
import Aj from "./containers/yakuza-aj/aj";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import "./App.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/contact" exact element={<Contact />}></Route>
        <Route path="/aj/:id"  element={<Aj />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
