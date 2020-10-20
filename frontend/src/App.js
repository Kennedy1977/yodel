import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Form from "./components/Form";
import TransactionDisplay from "./components/TransactionDisplay";
import LoadData from "./components/LoadData";

function App() {
  return (
    <Router>
      <LoadData />
      <Header title="Interest Rate Calculator" />
      <main>
        <Switch>
          <Route exact path="/" component={Form} />
          <Route path="/transactions" component={TransactionDisplay} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
