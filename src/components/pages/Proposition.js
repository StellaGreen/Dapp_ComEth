import { Box } from "@chakra-ui/react";
import NavLat from "../organisms/NavLat";
import PropositionTemplate from "../templates/PropositionTemplate";
const Proposition = () => {
  return (
  <>
  <Box h="85vh" w="100%"  bgGradient="linear(to-t,gray.800, teal.400);">
  <PropositionTemplate />
  <NavLat/>
  </Box>
  </>);
};
export default Proposition;
