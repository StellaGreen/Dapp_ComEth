import { Box, Button, Center, Input } from '@chakra-ui/react';
import React from 'react';

const SubmitProposalForm = () => {
    return (
        < >
        <Center>
        <Box boxShadow="dark-lg" w="40rem" rounded="lg">
            <Input boxShadow="lg"  w="32rem" placeholder="Que diriez-vous d'une salle de sport ?" margin="1rem"/>
            <Button boxShadow="lg" margin="2rem">Proposez votre idée</Button>
            </Box>
            </Center>
        </ >
    );
};

export default SubmitProposalForm;