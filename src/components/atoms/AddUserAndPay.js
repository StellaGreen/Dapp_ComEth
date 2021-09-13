import React, { useContext} from "react";
import { Circle, Center, useToast} from "@chakra-ui/react";
import { ComEthContext } from "../../context/ComEthContext";
import { Web3Context } from "web3-hooks";

const AddUserAndPay = () => {
  const [web3State] = useContext(Web3Context);
  const comEth = useContext(ComEthContext);
  const toast = useToast();

  const handleAddUser = async (isLoadingAd) => {
    try {
      await comEth.addUser();
    } catch (e) {
      if (e.code === 4001) {
        toast({
          title: "Transaction refusé à la signature",
          description: e.message,
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }else {
        toast({
          title: "Vous faites déjà partie de la ComEth",
          description: "Vous êtes déjà un membre à part entière de cette ComEth !",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
      console.log(e.error);
    }
  };
  const handlePay = async () => {
    try {
      const get = await comEth.getAmountToBePaid(web3State.account)
      await comEth.pay({value : get._hex});
    } catch (e) {
      if (e.code === 4001) {
        toast({
          title: "Transaction refusé à la signature",
          description: e.message,
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Vous avez déjà régularisé votre situation pour ce moi",
          description: "Vous avez déjà payé, attendez le moi prochain avant de régulariser votre situation",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
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
          onClick={handlePay}
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
