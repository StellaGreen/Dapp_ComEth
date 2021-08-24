import { Box } from "@chakra-ui/react";
import NavLat from "../organisms/NavLat";
import HomeTemplate from "../templates/HomeTemplate";

const Home = () => {
  return (
    <>
      <Box h="85vh" w="100%" bgGradient="linear(to-t,gray.800, teal.400);">
        <HomeTemplate />
        <NavLat />
      </Box>
    </>
  );
};
export default Home;
