import React, { useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import axios from 'axios';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Header from './components/Header';
import './App.css';
import { useDispatch } from 'react-redux';
import { FETCH_CONTACTS } from './actions/types';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/RomanChasovitin/demo-api/users')
      .then(({ data }) => data.data)
      .then(data => dispatch({
        type: FETCH_CONTACTS,
        payload: data
      }))
      .then(({ payload }) => {
        const serializeObj = JSON.stringify(payload);
        localStorage.setItem('data', serializeObj);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/contact/:id" component={ContactForm} />
        <Route exact path="/" component={ContactList} />
      </Switch>
    </div>
  );
}

export default App;