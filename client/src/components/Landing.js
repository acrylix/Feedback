import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Feedback</h1>
      <p>Collect feedback from your users</p>
      <Link to="/surveys" className="btn white-text">
        Dashbaord
      </Link>
    </div>
  );
};

export default Landing;
