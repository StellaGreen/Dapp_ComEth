import {
  Center,
  Heading,
} from "@chakra-ui/react";
import VoteBody from "../organisms/VoteBody";

const VoteTemplate = () => {

  return (
    <>
      <Center>
        <Heading
          mt={{ base: "2rem", sm: "1rem", lg: "2rem" }}
          ml={{ sm: "1rem" }}
          fontSize="4xl"
          fontFamily="mono"
        >
          Just Vote
        </Heading>
      </Center>
     <VoteBody />
    </>
  );
};
export default VoteTemplate;
