import React from 'react';

const Contact = ({ data }) => {
  return (
    <div>
      <h2>Contact</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;