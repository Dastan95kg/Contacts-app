import React from 'react';
import { Switch, Route } from "react-router-dom";
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Header from './components/Header';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/new" component={ContactForm} />
        <Route exact path="/" component={ContactList} />
      </Switch>
    </div>
  );
}

export default App;