import { Box } from "@chakra-ui/react";

import NavLat from "../organisms/NavLat";
import HomeTemplate from "../templates/HomeTemplate";
//import { ComEthContext } from "./App";

const Home = () => {
  return (
    <>
      <Box h={{sm:"100%",md:"91.7vh", lg:"91.7vh"}} w="100%"  bgGradient="linear(to-t,teal.600, teal.400);">
        <HomeTemplate />
        <NavLat />
        
      </Box>
    </>
  );
};
export default Home;
