import { Box } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
    return (
        <>
            <Box pos="absolute" bottom="0" boxShadow="dark-lg" paddingTop="1rem" textAlign="center" backgroundColor="gray.900" w='100%' h="4rem" color="white"> Créer par Amine, Guillaume, Sarah et Stella</Box>
        </>
    );
};

export default Footer;