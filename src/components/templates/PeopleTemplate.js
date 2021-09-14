import {
  Center,
  Heading,
} from "@chakra-ui/react";
import PoepleBudget from "../organisms/PoepleBudget";

const PeopleTemplate = () => {


  return (
    <>
      <Center>
        <Heading
          mt={{ base: "2rem", sm: "3rem", lg: "6rem" }}
          ml={{md:"5rem"}}
          textAlign="center"
          fontSize={{base:"xl", sm:"4xl"}}
          fontFamily="mono"
        >
          Membre de ma ComEhnauté
        </Heading>
      </Center>
      <PoepleBudget />
    </>
  );
};
export default PeopleTemplate;
