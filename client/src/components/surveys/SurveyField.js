import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        {...input}
        style={{
          marginBottom: '5px',
          borderBottomColor: touched && error ? 'red' : ''
        }}
      />{' '}
      {/*onBlur={input.onBlur}....*/}
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
};
