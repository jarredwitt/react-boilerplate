import React, { Component } from 'react';
import { BrowserRouter, Match } from 'react-router';

import {
  Home
} from 'containers';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Match exactly pattern="/" component={Home} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
