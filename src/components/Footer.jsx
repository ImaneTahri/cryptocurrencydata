import {
  Avatar,
  Box,
  Center,
  Stack,
  Text,
  VStack,
  Heading,
} from "@chakra-ui/react";
import React from "react";

const avatarSrc = "https://avatars.githubusercontent.com/u/25058652";

const Footer = () => {
  return (
    <Box
      //bgColor={"blackAlpha.900"}
      color={"bleu"}
      mt={"5"}
      px={"5"}
      py={["5", "5"]}
      
      
    >
     

      <Center color="wight">
        <a href="https://imanetahri.ca/" target={"blank"}>
      
          <Heading noOfLines={1}>Pawored By Iman Tahri</Heading>
          
          
        </a>
        
      </Center>
      
    </Box>
  );
};

export default Footer;
