import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';
import _ from 'lodash';

// ** after form component unmounts, state entries are dumped from mem

// SurveyForm shows a form for a user to add input
class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }
  render() {
    return (
      <div>
        {/* same as ...handleSubmit(()=>this.props.onSurveySubmit) */}
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next<i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

// values contains all values from form
function validate(values) {
  const errors = {};

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });

  errors.emails = errors.emails || validateEmails(values.emails || '');

  return errors;
}

// redux form will connect the dots as such
// if validate error object has label -> pass as prop to custom field obj
export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false //IMPORTANT for SurveyFormReview data
})(SurveyForm);
