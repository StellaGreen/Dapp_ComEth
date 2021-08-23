import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Select,
} from "@chakra-ui/react";


const VoteTemplate = () => {
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
