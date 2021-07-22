import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import home from "../routeComponents/Home";
import Navbar from "../components/Navbar";
import GamesList from "../routeComponents/GamesList";
import GameDetail from "../routeComponents/GameDetail";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#F0E3CA",
        fontFamily: "monospace",
        color: "1B1A17",
        minHeight: "900px",
      }}
    >
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={home}></Route>
          <Route exact path="/gameslist" component={GamesList}></Route>
          <Route exact path="/gamedetail/:id" component={GameDetail}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
