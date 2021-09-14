import { Center, Heading, 
 Text, Box, Popover, PopoverTrigger, Circle, Portal, PopoverContent, PopoverArrow, PopoverHeader, PopoverCloseButton, PopoverBody,PopoverFooter
  } from "@chakra-ui/react";
import React ,
{ useState } 
from "react";
import { LinkIcon } from '@chakra-ui/icons'
import HomeBody from "../organisms/HomeBody";


const HomeTemplate = () => {

  const [localAddress, setLocalAddress] = useState(JSON.parse(localStorage.getItem("AddressComEth")) || null)

  const handleChangeAddress = () =>{
    setLocalAddress(JSON.parse(localStorage.getItem("AddressComEth")))
  }

  return (
    <>
      
      <Center>
      <Heading  textAlign="center" mt={{ base: "2rem", sm: "1rem", lg: "2rem" }} fontSize="4xl" fontFamily="mono">Welcome Home</Heading>
      </Center>
      <Box ml={{base:"3rem", md:"10rem",lg:"11rem"}}>
      <Popover>
  <PopoverTrigger>
    <Circle backgroundColor="whiteAlpha.800" w={{sm:"5%", lg:"2%"}} p={{sm:"1%", lg:"0.5%"}} boxShadow="inner">
  <LinkIcon />
  </Circle>
  </PopoverTrigger>
  <Portal>
    <PopoverContent>
      <PopoverArrow />
      <PopoverHeader>L'addresse Ethereum de votre Communauté</PopoverHeader>
      <PopoverCloseButton />
      <PopoverBody>
      <Text onChange={handleChangeAddress}>{localAddress}</Text>
      </PopoverBody>
      <PopoverFooter>À partager pour agrandir votre ComEth !</PopoverFooter>
    </PopoverContent>
  </Portal>
</Popover>
      </Box>
      
      <HomeBody />
    </>
  );
};
export default HomeTemplate;
