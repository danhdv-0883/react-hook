import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = (props) => {
  const [state, setState] = useState({
    backgroundColor: "blue"
  });

  return (
    <UserContext.Provider value={[state, setState]}>
      {props.children}
    </UserContext.Provider>
  );
}

export {
  UserContext,
  UserProvider,
}

