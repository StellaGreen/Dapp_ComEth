import { Center, Heading } from "@chakra-ui/react";
import InfoNav from "../organisms/InfoNav";
import InformationBody from "../organisms/InformationBody";


const InfoTemplate = () => {
  return (
    <>
      <Center>
        <Heading>View Informations</Heading>
      </Center>
      <InfoNav />
      <InformationBody />
    </>
  );
};
export default InfoTemplate;
