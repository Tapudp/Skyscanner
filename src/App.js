import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Navbar from "./components/Molecule/Navbar";
import Default from "./pages/default";
import Inbox from "./pages/inbox";
import Library from "./pages/library";
import Payment from "./pages/payment";
import { Profile } from "./pages/profile";

function App() {
  return (
    <div className="container-fluid ">
      <AppRow className="row no-gutters">
        <Navbar className="col" />
        <div className="col">
          <Switch>
            <Route path="/payment" component={Payment} />
            <Route path="/library" component={Library} />
            <Route path="/inbox" component={Inbox} />
            <Route path="/profile" component={Profile} />
            <Route
              exact
              path="/"
              render={() => <Redirect to="/profile"></Redirect>}
            />
            <Route component={Default} />
          </Switch>
        </div>
      </AppRow>
    </div>
  );
}

const AppRow = styled.div`
  margin-left: -15px;
  margin-right: -15px;
`;

export default App;
