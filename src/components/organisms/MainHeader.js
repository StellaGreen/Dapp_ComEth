import React, { useEffect } from "react";
import { Box, Stack, Spacer } from "@chakra-ui/react";
import Logo from "../atoms/Logo";
import MobilNav from "../atoms/MobilNav";

const MainHeader = () => {
    useEffect(()=>{
        if (window.location.pathname === "/create"){
            console.log("Welcome to the create page")
        }
    },[])
    return (
        <>
            {window.location.pathname === "/create" || "/login" ? "" : ""}
            {window.location.pathname === "/info" || "/home" || "/proposition" || "/vote" || "/stats" || "/budget" || "/people" ? (<>
                <Box pos="sticky" w="100%" backgroundColor="teal.400">
                    <Stack direction="row">
                        <Logo />
                        <Spacer />
                        <Box display={{ base: "flex", sm: "flex", md: "none" }}>
                            <MobilNav />
                        </Box>
                    </Stack>
                </Box>
            </>) :"" }
        </>
    );
};

export default MainHeader;
