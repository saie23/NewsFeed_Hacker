import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './main.css';

import Header from './components/Header';
import FeedContainer from './components/feeds/FeedContainer';

class App extends Component {
  render() {
    return (
      <div data-test='component-app'>
        <BrowserRouter>
          <div>
            <Header />
           <Switch>
              <Route path='/' exact component={FeedContainer} />
           </Switch>
           </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
