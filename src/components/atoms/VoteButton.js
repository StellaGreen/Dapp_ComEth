import React from 'react';
import {  Button} from "@chakra-ui/react";
import {  Link } from "react-router-dom";

const VoteButton = () => {
    return (
        <>
            <Link to="/vote">
                <Button boxShadow="dark-lg" margin="0.5rem">Vote</Button>
            </Link>
        </>
    );
};

export default VoteButton;