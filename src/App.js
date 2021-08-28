import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Personal from "./screens/Personal";
import Office from "./screens/Office";
import Confirmation from "./screens/Confirmation";
import Success from "./screens/Success";
import Error from "./screens/Error";
import Routes from "./utils/Routes";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';

function App() {
  return (
    <div className="App">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
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
          </PersistGate>
        </Provider>         
    </div>
  );
}

export default App;
