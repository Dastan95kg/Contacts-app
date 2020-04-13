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
        <Route path="/new" render={() => <ContactForm />} />
        <Route exact path="/" render={() => <ContactList />} />
      </Switch>
    </div>
  );
}

export default App;