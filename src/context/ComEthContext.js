import { createContext, useContext } from "react";
import { useContract } from "web3-hooks";
import{ComEthAddressContext} from "./ComEthAddressContext"
import {
  ComEthAbi,
} from "../contracts/comEthFactory";

export const ComEthContext = React.createContext(null);

export const useComEthFactory = () => {
  const comEthContext = useContext(ComEthContext);
  if (comEthContext === undefined) {
    throw new Error(
      `It seems that you are trying to use ComEthContext outside of its provider`
    );
  }
  return comEthFactoryContext;
};

export const ComEthContextProvider = ({ children }) => {
  const comEthFactory = useContract(ComEthAdress, ComEthAbi);
  return (
    <ComEthContext.Provider value={comEthFactory}>
      {children}
    </ComEthContext.Provider>
  );
};
