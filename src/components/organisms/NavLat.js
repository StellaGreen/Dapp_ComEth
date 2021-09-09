import {
    Box,
    Menu,
    MenuButton,
    MenuList,
    IconButton
} from "@chakra-ui/react";
import { HamburgerIcon} from "@chakra-ui/icons";
import { React, useEffect, useState } from "react";
import InfoButton from "../atoms/InfoButton";
import ProposButton from "../atoms/ProposButton";
import VoteButton from "../atoms/VoteButton";

const NavLat = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)

  useEffect(() => {
      setInnerWidth(window.innerWidth)
      console.log(innerWidth)
  },[innerWidth])
        return (
            <>
            {innerWidth < "600px" ? ( <>
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<HamburgerIcon />}
                    variant="outline"
                    pos="sticky"
                    ml="1rem"
                    mt="2rem"
                />
                <MenuList>
                    <Box
                        pos="absolute"
                        top="0"
                        h="11rem"
                        w="100%"
                        rounded="md"
                        boxShadow="dark-lg"
                        backgroundColor="teal.600"
                    >
                        <Box pos="sticky" top="0rem" left="0">
                            <VoteButton />
                            <ProposButton />
                            <InfoButton />
                        </Box>
                    </Box>
                </MenuList>
            </Menu>
            </>) : ( <>
            <Box
                        pos="absolute"
                        top="0"
                        h="100%"
                        w={{ sm: "8rem", md: "9rem", lg: "10rem" }}
                        boxShadow="dark-lg"
                        backgroundColor="gray.900"
                    >
                        <Box pos="sticky" top="10" left="0">
                            <Box mb="13rem">
                            </Box>
                            <VoteButton />
                            <ProposButton />
                            <InfoButton />
                        </Box>
                    </Box>
                    </>) }
        </>
    );
};

export default NavLat;
