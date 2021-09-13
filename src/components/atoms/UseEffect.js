import { Box } from '@chakra-ui/layout';
import { useToast } from '@chakra-ui/react';
import { useContext, useEffect} from "react";
import { ComEthContext } from "../../context/ComEthContext";
import React from 'react';

const UseEffect = () => {
    const comEth = useContext(ComEthContext);
    const toast = useToast();
    useEffect(()=> {
        if(comEth){
            const cb = (paymentReceiver,amount,proposalId) =>{
                toast ({
                    title: "La proposition à était validée, félicitation !",
                    descriptio: `Destinataire : ${paymentReceiver}, du montant : ${amount / 10**18} ETH, de la proposition ID :${proposalId}.`,
                    status: "info",
                    position: "top-right",
                    padding:"1rem",
                    fontWeight:"bold",
                    duration: 8000,
                    isClosable: true,
                  });
                };
            comEth.on("Spent", cb)
            return () => {
              comEth.off("Spent", cb)
            }
            };
          }, [comEth, toast]);
    return (
        <>
            <Box></Box>
        </>
    );
};

export default UseEffect;