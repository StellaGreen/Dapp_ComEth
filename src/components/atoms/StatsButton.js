import React from 'react';
import {  Button} from "@chakra-ui/react";
import {  Link } from "react-router-dom";

const StatsButton = () => {
    return (
        <>
            <Link to="/stats">
                <Button boxShadow="dark-lg" margin="0.5rem" >Stats</Button>
            </Link>
        </>
    );
};

export default StatsButton;