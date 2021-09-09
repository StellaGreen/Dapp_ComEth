import {  Center, Heading } from "@chakra-ui/react";

import SubmitProposalForm from "../organisms/SubmitProposalForm";

const PropositionTemplate = () => {

  return (
    <>

      <Center>
      <Heading  mt={{base:"3rem",sm:"1rem",lg:"8rem"}} ml={{sm:"0.5rem"}} textAlign="center" fontSize="4xl" fontFamily="mono">Make Propositions</Heading>
      </Center>
      <SubmitProposalForm />
    </>
  );
};
export default PropositionTemplate;
