import { Box } from "@chakra-ui/react";
import React from "react";
import StatsButton from "../atoms/StatsButton"
import BudgetButton from "../atoms/BudgetButton";
import PeopleButton from "../atoms/PeopleButton";

const InfoNav = () => {
    return (
        <>
        <Box marginLeft="9rem">
            <StatsButton />
            <BudgetButton />
            <PeopleButton />
            </Box>
        </>
    );
};

export default InfoNav;
