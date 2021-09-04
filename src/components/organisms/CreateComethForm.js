import { React, useEffect, useState} from "react";
import {
  Box,
  Button,
  useToast,
   /* useToast */
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

import { ComEthFactoryContext } from "../../App";
import { useContext } from "react";
import { Web3Context } from "web3-hooks";

const CreateComethForm = () => {

  const [web3State] = useContext(Web3Context);
  const comEthFactory = useContext(ComEthFactoryContext);

  const toast = useToast(); 
  //const userFilter = comEthFactory.filters.ComEthCreated(web3State.account);

  const handleClickCreate = async () => {
    try {
      await comEthFactory.createComEth(0) // puisque msg.sender = celui qui dois créer
      let tx = await comEthFactory.getComEths()
      console.log(tx)
      toast({
        title: 'Confirmed transaction',
        description: `Transaction hash`, // hash de la transac
        status: 'success',
        duration: 7000,
        isClosable: true,
      })
    } catch (e) {
      if (e.code === 4001) {
        toast({
          title: 'Transaction signature denied',
          description: e.message,
          status: 'error',
          duration: 9000,
          isClosable: true,          
        })
      }
      console.log(e)
    }
  }

  useEffect(() => {
    // si simpleStorage est pas null alors
    if (comEthFactory) {
      const cb = (comEthAddress, comEthOwner) => {
   
        if (comEthOwner.toLowerCase() === web3State.account.toLowerCase()) {

          
          toast({
            title: "Event ComEthCreated",
            description: `comEthOwner: ${comEthOwner} comEthAddress: ${comEthAddress}`,
            status: "info",
            position: "top-right",
            duration: 9000,
            isClosable: true,
          });
        }
        console.log('hello')
        console.log(
          `comEthOwner: ${comEthOwner} comEthAddress: ${comEthAddress}`
          );
          };
          // ecouter sur l'event DataSet
          comEthFactory.on("ComEthCreated", cb);
          return () => {
            // arreter d'ecouter lorsque le component sera unmount
            comEthFactory.off("ComEthCreated", cb);
          };
        }
      }, [
        comEthFactory,
        web3State.account,
        toast,
        //userFilter,
      ]);
      // useEffect(() => {
      // }, []);

  return (
    <>
      <Box boxShadow="dark-lg" w="35rem" rounded="lg">
        <Link to="/home">
          <Box padding="1rem">Explication sur la création d'une communoté Ethereum</Box>
          <Button boxShadow="lg" onClick={handleClickCreate} margin="2rem">
            Create your account
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default CreateComethForm;
