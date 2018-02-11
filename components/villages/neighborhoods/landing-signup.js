import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom'

class LandingSignUp extends React.Component {
  render() {
    return (
      <div>


      <Link to = "/main-questionnaire">
        <span className="signup">Sign Up</span>

      </Link>
      </div>
    )
  }
}

module.exports = LandingSignUp;
