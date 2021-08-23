import React from 'react';
import {  Button} from "@chakra-ui/react";
import {  Link } from "react-router-dom";

const ProposButton = () => {
    return (
        <>
            <Link to="/proposition">
                <Button boxShadow="dark-lg" margin="0.5rem">Propositions</Button>
            </Link>
        </>
    );
};

export default ProposButton;