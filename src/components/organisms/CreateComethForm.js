import { React} from "react";
import { Box, Button,  useToast  } from "@chakra-ui/react";

import { ComEthFactoryContext } from "../../App";
import { useContext } from "react";
import { Web3Context } from "web3-hooks";

const CreateComethForm = () => {

  const [web3State] = useContext(Web3Context);
  const comEthFactory = useContext(ComEthFactoryContext);

  const toast = useToast();
/*
  useEffect(() => {
    if (comEthFactory) {
      const cb = (account, str) => {
        setValue(str);
        toast({
          title: "This is YOUR event",
          description: `${account} ||${str}`,
          status: "warning",
          position: "top-right",
          duration: 9000,
          isClosable: true,
        })
      }
      const allFilter = comEthFactory.filters.ComEthCreated(web3State.account);
      comEthFactory.on(allFilter, cb);
      return () => {
        comEthFactory.off(allFilter, cb);
      };
    }
  }, [comEthFactory, web3State.account, toast]);
  */

  const handleClickCreate = async () => {
    try {
      let tx = await comEthFactory.createComEth(web3State.account) // puisque msg.sender = celui qui dois créer
      await tx.wait()
      toast({
        title: 'Confirmed transaction',
        description: `Transaction hash: ${tx.hash}`, // hash de la transac
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
  const handleClickAd = async () => {
    try {
      let tax = await comEthFactory.getComEths()
      toast({
        title: 'Confirmed transaction',
        description: ` les cometh address ${tax}`, // hash de la transac
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
  
 

  return (
    <>
      <Box boxShadow="dark-lg" w="35rem" rounded="lg">
        
          <Box padding="1rem">Explication sur la création d'une communoté Ethereum</Box>
          <Button boxShadow="lg" onClick={handleClickCreate} margin="2rem">
            Create your account
          </Button>
          <Button onClick={handleClickAd} >Address</Button>
          <Box></Box>
      </Box>
    </>
  );
};

export default CreateComethForm;
