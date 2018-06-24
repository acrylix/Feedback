import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';
import PieChart from 'react-minimal-pie-chart';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderChart(survey) {
    if (survey.yes + survey.no > 0) {
      return (
        <PieChart
          style={{ width: '100px' }}
          data={[
            { value: survey.yes, color: 'green' },
            { value: survey.no, color: 'red' }
          ]}
        />
      );
    }
    return <p>No response yet</p>;
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="card darken-1" key={survey._id}>
          <div className="card-content">
            <span className="card-title"><b>{survey.title}</b></span>
            <p>Subject: {survey.subject}</p>
            <p>Content: {survey.body}</p>
            <br />
            <div>{this.renderChart(survey)}</div>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <span className="new badge green left" data-badge-caption="YES">
              {survey.yes}
            </span>
            <span className="new badge red left" data-badge-caption="NO">
              {survey.no}
            </span>
            <a />
            <a className="right">Remove</a>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);
