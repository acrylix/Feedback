import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import { reduxForm } from 'redux-form';
import SurveyFormReview from './SurveyFormReview';

// SurveyNew shows SurveyForm and SurveyFormReview
class SurveyNew extends Component {
  // component level state ***
  // constructor(props) {
  //   super(props);
  //
  //   this.state = { new: true };
  // }
  // same as below

  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <SurveyFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }
    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

// this enables cancel button to clear out model
// 'saves' surveyForm until unmount of SurveyNew componentDidMoun
// parente of form and formReview
export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);
