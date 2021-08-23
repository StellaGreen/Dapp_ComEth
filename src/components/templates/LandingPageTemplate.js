import { Link } from "react-router-dom";
import { Heading, Button, Center} from "@chakra-ui/react";
import { Web3Context } from "web3-hooks";
import { useContext } from "react";
import FooterLandingPage from "../organisms/FooterLandingPage";

const LandingPageTemplate = () => {
  const [web3State, login] = useContext(Web3Context);

  const handleOnClickLogin = () => {
    if (!web3State.isLogged) {
      login();
    } else {
    }
  };
  return (
    <>
      <Center>
        <Heading margin="4rem">Landing</Heading>
      </Center>
      <Center marginBottom="4rem">
        <Link to={web3State.isLogged ? "/create" : "/"}>
          <Button marginRight="2rem" colorScheme="blue" onClick={() => handleOnClickLogin()}>
            Create
          </Button>
        </Link>

        <Link to={web3State.isLogged ? "/login" : "/"}>
          <Button marginLeft="2rem" colorScheme="blue" onClick={() => handleOnClickLogin()}>
            Login
          </Button>
        </Link>
      </Center>
      <FooterLandingPage/>
    </>
  );
};
export default LandingPageTemplate;
