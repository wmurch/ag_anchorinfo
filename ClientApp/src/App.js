import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { DisplayLineSurvey } from "./components/DisplayLineSurvey";
import { NewLineSurvey } from "./components/NewLineSurvey";
import { Filler } from "./components/Filler";
import { Depallitizer } from "./components/Depallitizer";


export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/NewLineSurvey" component={NewLineSurvey} />
        <Route path="/DisplayLineSurvey" component={DisplayLineSurvey} />
        <Route path="/Filler" component={Filler} />
        <Route path="/Depallitizer" component={Depallitizer} />
      </Layout>
    );
  }
}
