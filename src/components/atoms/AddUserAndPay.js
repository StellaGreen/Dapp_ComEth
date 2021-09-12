import React, { useContext } from "react";
import { Circle, Center} from "@chakra-ui/react";
import { ComEthContext } from "../../context/ComEthContext";
import { ethers } from "ethers";
import { Web3Context } from "web3-hooks";

const AddUserAndPay = () => {
  const [web3State] = useContext(Web3Context);
  const comEth = useContext(ComEthContext);

  const handleAddUser = async () => {
    try {
      await comEth.addUser();
      console.log("you have been add !");
    } catch (e) {
      console.log(e.error);
    }
  };
  const handleClickPay = async () => {
   const get = await comEth.getAmountToBePaid(web3State.account);
   console.log(get.toString());
    try {
      await comEth.pay({ value: ethers.utils.parseEther("0.001") });

      console.log("you have been pay !");
    } catch (e) {
      console.log(e.error);
    }
  };

  return (
    <>
      <Center>
        <Circle
          onClick={handleAddUser}
          backgroundColor="red"
          w="25%"
          mr="2rem"
          p="1rem"
          textAlign="center"
          fontWeight="bold"
          _hover= {{bg:"#1e3b45"}}
        >
          {" "}
          Se rajouter dans la ComEth
        </Circle>
        <Circle
          onClick={handleClickPay}
          w="20%"
          backgroundColor="green"
          p="1rem"
          textAlign="center"
          fontWeight="bold"
          _hover= {{bg:"#1e3b45"}}
        >
          {" "}
          Se mettre à jour
        </Circle>
      </Center>
    </>
  );
};

export default AddUserAndPay;
