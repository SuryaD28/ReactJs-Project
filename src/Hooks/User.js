import React, { useContext } from 'react';
import { AppContext } from './ContextExample';

const User = () => {

  const {username} = useContext(AppContext);
 
  return (
    <div>
        <h2>UseContext Hook </h2>
        <h1>User : {username}</h1>
    </div>
  )
}

export default User