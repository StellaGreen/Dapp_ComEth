import { Box,  Flex } from "@chakra-ui/react";
import React from "react";
import InfoButton from "../atoms/InfoButton";
import ProposButton from "../atoms/ProposButton";
import VoteButton from "../atoms/VoteButton";

const HomeBody = () => {
    return (
        <>
        <Flex w="97%" marginTop="4rem">
        <Box boxShadow="dark-lg" marginLeft="11rem" rounded="md" w="25%" h="17rem">
        <Box marginTop="12rem" marginLeft="6rem"><VoteButton/></Box>
        </Box>
        <Box boxShadow="dark-lg" marginLeft="6rem" rounded="md" w="25%" h="17rem">
        <Box marginTop="12rem" marginLeft="4.5rem"><ProposButton /></Box>
        </Box>
        <Box boxShadow="dark-lg" marginLeft="6rem" rounded="md" w="25%" h="17rem">
        <Box marginTop="12rem" marginLeft="7rem"><InfoButton /></Box>
        </Box>
        </Flex>
        </>);
};

export default HomeBody;
