import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Select,
  //useToast,
} from "@chakra-ui/react";
<<<<<<< HEAD
//import { ComEthContext } from "../../context/ComEthContext";
//import { useContext } from "react";
=======
//import { ComEthContext } from "../../App";
//import { useContext, useEffect } from "react";
>>>>>>> f17ad92a0380afaea628604f2c0515104c22692a
//import { Web3Context } from "web3-hooks";

const VoteTemplate = () => {

  //const [web3State] = useContext(Web3Context);
  //const comEth = useContext(ComEthContext);
<<<<<<< HEAD

  //const toast = useToast();
=======
  //const toast = useToast();
  //const handle
>>>>>>> f17ad92a0380afaea628604f2c0515104c22692a
  
  return (
    <>

      <Center>
      <Heading marginBottom="2rem">Just Vote</Heading>
      </Center>
      <Center>
        <Box boxShadow="dark-lg" w="40rem" rounded="lg">
        <FormControl id="country" w="32rem" margin="2rem">
          <FormLabel fontWeight="bold" margin="1rem">Que diriez-vous d'une salle de sport ?</FormLabel>
          <Select boxShadow="lg" margin="1rem" placeholder="Selectionnez votre réponse">
            <option>Oui</option>
            <option>Non</option>
            <option>Blanc</option>
          </Select>
          <Button boxShadow="lg" margin="2rem">Voter</Button>
        </FormControl>
        </Box>
      </Center>
    </>
  );
};
export default VoteTemplate;
