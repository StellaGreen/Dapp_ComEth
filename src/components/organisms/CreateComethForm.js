import React from "react";
import { Box, Button, Input, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CreateComethForm = () => {
    // Formulaire création de contrat ComEth
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const toast = useToast()
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
          <Button
          boxShadow="lg"
          onClick={() =>
            toast({
              title: "Account created.",
              description: "We've created your account for you.",
              status: "success",
              duration: 9000,
              isClosable: true,
            })
          } margin="2rem">Create your account</Button>
        </Link>
            </Box>
        </>
    );
};

export default CreateComethForm;
