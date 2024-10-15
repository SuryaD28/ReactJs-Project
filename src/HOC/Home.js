import React from 'react';

const Home = ({ data }) => {
  return (
    <div>
      <h2>Home</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;