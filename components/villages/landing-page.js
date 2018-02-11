import React from 'react';
import ReactDOM from 'react-dom';

import LandingPageTitle from './neighborhoods/landing-page-title.js';
import LandingLogin from './neighborhoods/landing-login.js';
import LandingSignUp from './neighborhoods/landing-signup.js';


class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-page">


          <LandingPageTitle/>
          <LandingLogin/>
          <LandingSignUp/>

      </div>
    )
  }
}

module.exports = LandingPage;
