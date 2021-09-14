import { Circle, Input, Heading, Container, Center, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ComEthAddressContext } from "../../App";
import { useState, useContext } from "react";

const LoginTemplate = () => {
  const [address, setAddress] = useState("");
  const { setComEthAddress } = useContext(ComEthAddressContext);

  const handleClickLinkToHome = () => {
    setComEthAddress(address);
  };

  return (
    <>
      <Center>
      <Heading  textAlign="center" mt={{ base: "2rem", sm: "1rem", lg: "2rem" }} m={{base:"4rem", sm:"0"}} fontSize="4xl" fontFamily="mono">Rejoignez votre communauté</Heading>
      </Center>
      <Container>
        <Box
          boxShadow="lg"
          backgroundColor="blackAlpha.200"
          w={{base:"99%",md:"35rem"}}
          mt={{base:"2rem",md:"4rem"}}
          rounded="lg"
          pb="0.3rem"
        >
          <Input
            boxShadow="lg"
            w={{base:"90%",md:"32rem"}}
            placeholder="Addresse de votre ComEth"
            margin="1rem"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Link to="/home">
            <Center>
            <Circle as="button" fontWeight="bold" w={{base:"80%",lg:"24rem"}} backgroundColor="whiteAlpha.400" p="0.5em" margin="2rem" boxShadow="lg" onClick={handleClickLinkToHome}  _hover= {{bg:"#0db5aa"}} _selected={{bg:"#17d4c7"}} >
              Rejoindre
            </Circle>
            </Center>
          </Link>
        </Box>
      </Container>
    </>
  );
};
export default LoginTemplate;
