import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import MovieBox from './components/MovieBox';
import MovieTorrent from './components/MovieTorrent';
import Movie from './components/Movie';
import User from './components/User';
import User2 from './components/User2';

export default class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
            <Header />
            <Switch>
                <Route exact={true} path='/' component={Home} />
                <Route path='/components/Home' component={Home} />
                <Route path='/components/MovieBox' component={MovieBox} />
                <Route path='/components/MovieTorrent' component={MovieTorrent} />
                <Route exact={true} path='/components/Movie' component={Movie} />
                <Route path='/components/User' component={User} />
                <Route path='/components/User2' component={User2} />
            </Switch>
            <Footer />
          </div>
      </Router>
    );
  }
}
