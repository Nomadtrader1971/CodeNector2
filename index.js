import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//import BasicSlider from './Basic';

import Slider from 'react-rangeslider';

//var Slider = require('react-rangeslider');




import LandingPage from './components/villages/landing-page.js';
import Questionnaire from './components/villages/main-questionnaire.js';

class App extends React.Component {
  render() {
    return (

      <Router>
        <div>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/main-questionnaire" component={Questionnaire}/>
        </div>
      </Router>

    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
