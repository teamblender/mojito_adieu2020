import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Intro from "Routes/Intro";
import Main from "Routes/Main";
import Fin from "Routes/Fin";
import useStage from "Redux/useStage";

export default () => {
  const stage = useStage();
  return (
    <Router>
      <Switch>
        <>
          <Route exact path="/">
            {stage === 0 ? (
              <Intro></Intro>
            ) : stage === 1 ? (
              <Main></Main>
            ) : (
              <Fin></Fin>
            )}
          </Route>
          <Redirect from="*" to="/"></Redirect>
        </>
      </Switch>
    </Router>
  );
};
