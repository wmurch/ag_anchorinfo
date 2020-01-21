import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { DisplayLineSurvey } from "./components/DisplayLineSurvey";
import { NewLineSurvey } from "./components/NewLineSurvey";
import { NewFiller } from "./components/NewFiller";
import { NewDepallitizer } from "./components/NewDepallitizer";
import { DisplayDepallitizer } from "./components/DisplayDepallitizer";
import { DisplayFiller } from "./components/DisplayFiller";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/NewLineSurvey" component={NewLineSurvey} />
        <Route path="/NewFiller" component={NewFiller} />
        <Route path="/NewDepallitizer" component={NewDepallitizer} />
        <Route path="/DisplayLineSurvey" component={DisplayLineSurvey} />
        <Route path="/DisplayDepallitizer" component={DisplayDepallitizer} />
        <Route path="/DisplayFiller" component={DisplayFiller} />
      </Layout>
    );
  }
}
