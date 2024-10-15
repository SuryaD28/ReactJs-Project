import React, { useContext } from 'react';
import { AppContext } from './ContextExample';

const UserTwo = () => {

  const{setUsername} = useContext(AppContext);

  return (
    <div>
        <input onChange={(event) => {
            setUsername(event.target.value)
        }}/>   
    </div>
  )
}

export default UserTwo;