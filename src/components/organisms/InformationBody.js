import { Box, SimpleGrid, Spacer} from "@chakra-ui/react";
import React from "react";
import PeopleButton from "../atoms/PeopleButton";
import BudgetButton from "../atoms/BudgetButton";
import StatsButton from "../atoms/StatsButton";

const InformationBody = () => {
  return (
    <>
    
    <SimpleGrid columns={[1, 1, 2, 3]} spacing="40px" m="2rem" ml="10rem">
    <Box backgroundColor="blackAlpha.200" height="9rem">
          blablablablabla
          <StatsButton />
        </Box>
        <Box backgroundColor="blackAlpha.200" height="9rem">
          Hello <BudgetButton />
        </Box>
        <Box backgroundColor="blackAlpha.200" height="9rem">
          hey
          <PeopleButton />
        </Box>
      </SimpleGrid>
      
    </>
  );
};

export default InformationBody;
