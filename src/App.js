import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Personal from "./screens/Personal";
import Office from "./screens/Office";
import Confirmation from "./screens/Confirmation";
import Success from "./screens/Success";
import Error from "./screens/Error";
import Routes from "./utils/Routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Personal} />
          <Route path={Routes.PERSONAL} component={Personal} />
          <Route path={Routes.OFFICE} component={Office} />
          <Route path={Routes.CONFIRMATION} component={Confirmation} />
          <Route path={Routes.SUCCESS} component={Success} />
          <Route path={Routes.ERROR} component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
