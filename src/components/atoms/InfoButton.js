import React from 'react';
import {  Button} from "@chakra-ui/react";
import {  Link } from "react-router-dom";

const InfoButton = () => {
    return (
        <>
            <Link to="/info">
                <Button boxShadow="dark-lg" margin="0.5rem">Info</Button>
            </Link>
        </>
    );
};

export default InfoButton;