import { Box } from "@chakra-ui/react";
import NavLat from "../organisms/NavLat";
import BudgetTemplate from "../templates/BudgetTemplate";

const Budget = () => {
  return (
    <>
      <Box h="85vh" w="100%" bgGradient="linear(to-t,gray.800, teal.400);">
        <BudgetTemplate />
        <NavLat />
      </Box>
    </>
  );
};
export default Budget;
