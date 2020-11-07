import React from "react";
import { Container } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Activities from "./pages/activities.page";

import "./styles.css";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Switch>
          <Route path="/" exact>
            <Activities />
          </Route>
        </Switch>
      </Container>
    </>
  );
};

export default observer(App);
