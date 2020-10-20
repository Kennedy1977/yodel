import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import Form from "./components/Form";
import TransactionDisplay from "./components/TransactionDisplay";

function App() {
  return (
    <Router>
      <Header title="Interest Rate Calculator" />
      <main>
        <Switch>
          <Route exact path="/" component={Form} />
          <Route path="/transactions" component={TransactionDisplay} />
        </Switch>
        <small className="status">status:</small>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
