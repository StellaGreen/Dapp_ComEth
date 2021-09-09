import React, { useContext } from "react";
import { Box } from "@chakra-ui/react";
import NavInfoOnly from "../organisms/NavInfoOnly";
import StatsTemplate from "../templates/StatsTemplate";
import { ComEthContext } from "../../context/ComEthContext";

const Stats = () => {
  const comEth = useContext(ComEthContext);
  return (
    <>
    <Box h={{sm:"91.7vh", lg:"91.7vh"}} w="100%"  bgGradient="linear(to-t,teal.600, teal.400);">
      <StatsTemplate />
      <NavInfoOnly />
      </Box>
    </>
  );
};
export default Stats;
