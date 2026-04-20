import React, { createContext, useState } from 'react';

export const CallButtonContext = createContext()

const ButtonProvider = ({ children }) => {
  const [buttonContext, setButtonContext] = useState([]);

  const data = {
    buttonContext,
    setButtonContext,
  }

  return <CallButtonContext value={data}>{children}</CallButtonContext>
};

export default ButtonProvider;