import { Box } from '@chakra-ui/react';
import React from 'react';
import InfoButton from '../atoms/InfoButton';
import ProposButton from '../atoms/ProposButton';
import VoteButton from '../atoms/VoteButton';

const NavLat = () => {
    return (
        <>
            <Box pos="absolute" top="0" boxShadow="dark-lg" backgroundColor="gray.900" h="100%" w="11%">
                <Box marginTop="10rem">
                    <VoteButton />
                    <ProposButton />
                    <InfoButton />
                </Box>
                
            </Box>
        </>
    );
};

export default NavLat;