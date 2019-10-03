import React, { Component } from 'react'
// import { IndexRoute, Router, Route, hashHistory} from 'react-router';
// import ReactDOM from 'react-dom';
import './App.css';
import TopBar from './components/TopBar';
import Profile from './components/Profile';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar/>
        <Profile/>
        <Footer/>
      </div>
    )
  };
}