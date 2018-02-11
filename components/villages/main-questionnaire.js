       import React from 'react';
       import ReactDOM from 'react-dom';

       import QuestionOne from './neighborhoods/question-one.js';
       import QuestionTwo from './neighborhoods/question-two.js';
       import QuestionThree from './neighborhoods/question-three.js';
       import QuestionFour from './neighborhoods/question-four.js';
       import QuestionFive from './neighborhoods/question-five.js';


import Horizontal from './neighborhoods/slider1.js';

       class Questionnaire extends React.Component {
         render() {
           return (
            <div className="main-questionnaire">
              <QuestionOne/>
              <Horizontal/>
              <QuestionTwo/>
              <Horizontal/>
              <QuestionThree/>
              <Horizontal/>
              <QuestionFour/>
              <Horizontal/>
              <QuestionFive/>
              <Horizontal/>
            </div>
           )
         }
       }

       module.exports = Questionnaire;
