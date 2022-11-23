import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const CoinCard = ({ id, name, img, symbol, price, currencySymbol = "$" }) => (
  <Link to={`/coin/${id}`}>
    <VStack
      w={"80"}
      shadow={"lg"}
      p={"8"}
      borderRadius={"lg"}
      transition={"all 0.2s"}
      m={"4"}
      css={{
        "&:hover": {
          transform: "scale(1.3)",
          color:"black",
          backgroundColor:"#3399ff",

        },
      }}
    >
      <Image
        src={img}
        w={"10"}
        h={"10"}
        objectFit={"contain"}
        alt={"Exchange"}
      />
      <Heading size={"md"} noOfLines={1}>
        {symbol}
      </Heading>

      <Text noOfLines={1}>{name}</Text>
      <Text noOfLines={1}>{price ? `${currencySymbol}${price}` : "usd"}</Text>
    </VStack>
  </Link>
);

export default CoinCard;
