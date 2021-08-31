import { React} from "react";
import { Box, Button,  useToast, /* useToast */ } from "@chakra-ui/react";

import { Link } from "react-router-dom";

import { ComEthFactoryContext } from "../../App";
import { useContext } from "react";
import { Web3Context } from "web3-hooks";

const CreateComethForm = () => {

  const [web3State] = useContext(Web3Context);
  const comEthFactory = useContext(ComEthFactoryContext);

  const toast = useToast(); 

  const handleClickCreate = async () => {
    try {
      let tx = await comEthFactory.createComEth(web3State.account) // puisque msg.sender = celui qui dois créer
      await tx.wait()
      let event =  comEthFactory.on('ComEthCreated')
          console.log('event')
          console.log(event._runningEvents) // = address ComEth 
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
