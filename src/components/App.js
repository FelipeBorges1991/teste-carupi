import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import home from "../routeComponents/Home"

function App() {
  return (
    <div style={{ backgroundColor: "#F0E3CA"}}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={home}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
