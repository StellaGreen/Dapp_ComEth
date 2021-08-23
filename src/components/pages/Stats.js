import { Box } from "@chakra-ui/react";
import NavLat from "../organisms/NavLat";
import StatsTemplate from "../templates/StatsTemplate";

const Stats = () => {
  return (
    <>
    <Box h="85vh" w="100%"  bgGradient="linear(to-t,gray.800, teal.400);">
      <StatsTemplate />
      <NavLat/>
      </Box>
    </>
  );
};
export default Stats;
