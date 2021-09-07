<<<<<<< HEAD
import React from "react";
=======
import React, { useEffect, useState } from "react";
>>>>>>> f17ad92a0380afaea628604f2c0515104c22692a
import Dapp from "./Dapp";

function App() {
<<<<<<< HEAD
  return (
    <>
      <Dapp />
=======
  const [comEthAddress, setComEthAddress] = useState(
    "0xf2632965C20F5F4BaAbb6C37AC9bF6f58BCe188E"
  );
  const comEthFactory = useContract(ComEthFactoryAdress, ComEthFactoryAbi);
  const comEth = useContract(comEthAddress, ComEthAbi);
  useEffect(() => {
    console.log("app context comEthAddress", comEthAddress);
  }, [comEthAddress]);
  return (
    <>
      <ComEthFactoryContext.Provider value={comEthFactory}>
        <ComEthAddressContext.Provider
          value={{ comEthAddress, setComEthAddress }}
        >
          <ComEthContext.Provider value={comEth}>
            <Dapp />
          </ComEthContext.Provider>
        </ComEthAddressContext.Provider>
      </ComEthFactoryContext.Provider>
>>>>>>> f17ad92a0380afaea628604f2c0515104c22692a
    </>
  );
}

export default App;
