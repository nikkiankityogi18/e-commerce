import "./App.css";
import Navbar from "./component/Navbar";
import Login from "./component/Login";
import Register from "./component/Register";
import Home from "./component/Home";
import ProdectDetail from "./component/Prodectdetial.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/"> <Home />  </Route>                   
        </Switch>
        <Switch>
          <Route path="/prodectdetail/:id"> <ProdectDetail />  </Route>                   
        </Switch>

        <Switch>
          <Route path="/login">  <Login /> </Route>
          </Switch>
        
          <Switch>
          <Route path="/register"> <Register /> </Route>
          </Switch>

        
      </Router>
    </div>
  );
}

export default App;
