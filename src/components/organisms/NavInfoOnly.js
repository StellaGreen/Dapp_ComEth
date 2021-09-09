import { Box, Menu, MenuButton, IconButton, MenuList } from "@chakra-ui/react";
import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import StatsButton from "../atoms/StatsButton";
import BudgetButton from "../atoms/BudgetButton";
import PeopleButton from "../atoms/PeopleButton";
import VoteButton from "../atoms/VoteButton";
import ProposButton from "../atoms/ProposButton";
import InfoButton from "../atoms/InfoButton";
import Logo from "../atoms/Logo";

const NavInfoOnly = () => {
  return (
    <>
      <Box display={{base:"flex", sm: "flex", md: "none" }}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            size="lg"
            backgroundColor="teal.600"
            _hover={{ bg: "#0db5aa" }}
            ml="1rem"
            mt="2rem"
          />
          <MenuList>
            <Box
              pos="absolute"
              top="0"
              h="19.4rem"
              w="100%"
              rounded="md"
              boxShadow="dark-lg"
              backgroundColor="teal.600"
            >
              <VoteButton />
              <ProposButton />
              <InfoButton />
              <StatsButton />
              <BudgetButton />
              <PeopleButton />
            </Box>
          </MenuList>
        </Menu>
      </Box>
      <Box
        pos="absolute"
        display={{base:"none",sm:"none",md:" list-item"}}
        top="0"
        h="100%"
        w={{ sm: "8rem", md: "9rem", lg: "10rem" }}
        boxShadow="dark-lg"
        backgroundColor="gray.900"
      >
        <Box pos="sticky" top="10" left="0">
          <Box mb="13rem">
            <Logo />
          </Box>
          <VoteButton />
          <ProposButton />
          <InfoButton />
          <StatsButton />
          <BudgetButton />
          <PeopleButton />
        </Box>
      </Box>
    </>
  );
};

export default NavInfoOnly;
