import React from 'react';

const About = ({ data }) => {
  return (
    <div>
      <h2>About</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default About;