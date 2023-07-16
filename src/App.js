import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./pages/NotFound";

import Search from "./pages/Search";
import GlobalStyles from "./styles/GlobalStyles";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Search} />

          <Route exact path="/search" component={Search} />

          <Route path="*" component={NotFound} />
        </Switch>
        <GlobalStyles />
      </BrowserRouter>
    );
  }
}

export default App;
