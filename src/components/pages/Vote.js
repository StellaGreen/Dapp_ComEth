import { Box } from "@chakra-ui/react";
import NavLat from "../organisms/NavLat";
import VoteTemplate from "../templates/VoteTemplate";

const Vote = () => {
  return (
    <>
      <Box h="85vh" w="100%" bgGradient="linear(to-t,gray.800, teal.400);">
        <VoteTemplate />
        <NavLat />
      </Box>
    </>)
}
export default Vote