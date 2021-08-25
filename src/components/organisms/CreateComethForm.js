import React from "react";
import { Box, Button, Input, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ComEthFactoryContext } from "../../App";
import { useContext } from "react";
import { Web3Context } from "web3-hooks";
const CreateComethForm = () => {
  const [web3State] = useContext(Web3Context);
  const comEthFactory = useContext(ComEthFactoryContext);
  // Formulaire création de contrat ComEth
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  console.log(web3State.account);

  const handleClickCreate = async () => {
    const res = await comEthFactory.createComEth(web3State.account);
    console.log(res);

    toast({
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <>
      <Box boxShadow="dark-lg" w="35rem" rounded="lg">
        <Input
          boxShadow="lg"
          w="32rem"
          placeholder="username"
          margin="1rem"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Input
          boxShadow="lg"
          placeholder="password"
          w="32rem"
          margin="1rem"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to="/home">
          <Button boxShadow="lg" onClick={handleClickCreate} margin="2rem">
            Create your account
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default CreateComethForm;
