import { Box, Heading, Stack } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <>
      <Box
        bgImage="url('https://imanetahri.ca/uploads/2022/11/79966-bitcoin-cryptocurrency-city.gif')"
        bgPosition="center"
        bgRepeat="no-repeat"
        w={"full"}
        h={"80vh"}
       
    
      
      >
        <Stack pt={"0px"}>
          

          <Heading
            as="h1"
            fontSize="xl"
            noOfLines={1}
            spacing={10}
            color="white"
            textAlign={"center"}
          >
            Crypto Data
          </Heading>
        </Stack>
      </Box>
    </>
  );
};

export default Home;
