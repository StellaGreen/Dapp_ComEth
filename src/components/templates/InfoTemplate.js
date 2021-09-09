import { Center, Heading } from "@chakra-ui/react";
import InformationBody from "../organisms/InformationBody";


const InfoTemplate = () => {
  return (
    <>
      <Center>
        <Heading  mt={{base:"3rem",sm:"2rem", md:"4rem",lg:"8rem"}} textAlign="center" fontSize="4xl" fontFamily="mono">Vos Informations</Heading>
      </Center>
      
      <InformationBody />
    </>
  );
};
export default InfoTemplate;
