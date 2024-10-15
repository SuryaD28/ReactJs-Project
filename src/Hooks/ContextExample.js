import React, { createContext, useState } from 'react';
import User from './User';
import UserTwo from './UserTwo';

export const AppContext = createContext();

const ContextExample = () => {

  const[username , setUsername] = useState("");

  return (
    <AppContext.Provider value={{username , setUsername}}> 
      <User/> <UserTwo/>
    </AppContext.Provider>
  )
}

export default ContextExample