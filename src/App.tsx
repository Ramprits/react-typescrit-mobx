import { Container } from "@material-ui/core";
import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Activities from "./pages/activities.page";
import "./styles.css";

export default function App() {
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
}
