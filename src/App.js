import React from "react";
import Dapp from "./Dapp";
import { useContract } from "web3-hooks";
import {
  ComEthFactoryAdress,
  ComEthFactoryAbi,
} from "./contracts/comEthFactory";
import { ComEthAbi } from "./contracts/comEth";

export const ComEthFactoryContext = React.createContext(null);
export const ComEthContext = React.createContext(null);

const ComethAddress = "";

function App() {
  const comEthFactory = useContract(ComEthFactoryAdress, ComEthFactoryAbi);
  const comEth = useContract(ComethAddress, ComEthAbi);

  return (
    <>
      <ComEthFactoryContext.Provider value={comEthFactory}>
        <ComEthContext.Provider value={comEth}>
        <Dapp />
        </ComEthContext.Provider>
      </ComEthFactoryContext.Provider>
    </>
  );
}

export default App;
