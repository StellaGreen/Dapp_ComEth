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

const ComethAddress = '0xf2632965C20F5F4BaAbb6C37AC9bF6f58BCe188E'

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
