import { Box } from "@chakra-ui/react";
import NavLat from "../organisms/NavLat";
import PeopleTemplate from "../templates/PeopleTemplate";
const People = () => {
  return (
    <>
      <Box h="85vh" w="100%" bgGradient="linear(to-t,gray.800, teal.400);">
        <PeopleTemplate />
        <NavLat />
      </Box>
    </>
  );
};
export default People;
