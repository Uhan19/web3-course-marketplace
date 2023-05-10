"use client";

import { createContext, useContext } from "react";

const Web3Context = createContext(null);

export const Web3Provider = ({ children }) => {
  return (
    <Web3Context.Provider value={{ test: "hello" }}>
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => {
  return useContext(Web3Context);
};
