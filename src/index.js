import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import "../src/styles/styles.css";
import * as serviceWorker from './serviceWorker';
import Accueil from './pages/accueil';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Service from './pages/Service';
import Apropos from './pages/Apropos';
import Contact from './pages/Contact';
import Header from './components/Header';
import NewLetter from './components/NewLetter';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Accueil} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/about" component={Apropos} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Router>
    <NewLetter />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
