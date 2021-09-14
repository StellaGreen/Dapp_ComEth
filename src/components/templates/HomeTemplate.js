import { Center, Heading, 
 // Text,
  } from "@chakra-ui/react";
import React 
//{ useState } 
from "react";
import { LinkIcon } from '@chakra-ui/icons'
import HomeBody from "../organisms/HomeBody";
// import { useContext } from "react";
// import { ComEthContext } from "../../context/ComEthContext";


const HomeTemplate = () => {
  // const comEth = useContext(ComEthContext);
  // const [address, setAddress] = useState(comEth.address)

  // const handleChangeAddress = () =>{
  //   setAddress(comEth.address.toString())
  // }

  return (
    <>
      
      <Center>
      <Heading  textAlign="center" mt={{ base: "2rem", sm: "1rem", lg: "2rem" }} fontSize="4xl" fontFamily="mono">Welcome Home</Heading>
      </Center>
      
      <LinkIcon />
      {/* <Text onChange={handleChangeAddress}>here: {address}</Text> */}
      <HomeBody />
    </>
  );
};
export default HomeTemplate;
