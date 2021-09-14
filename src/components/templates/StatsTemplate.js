import { Center, Heading } from "@chakra-ui/react";
import StatsBody from "../organisms/StatsBody";

const StatsTemplate = () => {

  return (
    <>
      <Center>
        <Heading
          mt={{ base: "2rem", sm: "1rem", lg: "2rem" }}
          ml={{ md: "6rem" }}
          fontSize="4xl"
          textAlign="center"
          fontFamily="mono"
        >
          Vos stats ComEth
        </Heading>
      </Center>
      <StatsBody />
    </>
  );
};
export default StatsTemplate;
