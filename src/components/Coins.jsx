import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import {
  Button,
  Container,
  HStack,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";
import CoinCard from "./CoinCard";
import Home from "./Home";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  // const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("eur");

  const currencySymbol =
    currency === "eur" ? "€" : currency === "eur" ? "€" : "$";

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };

  const btns = new Array(132).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, page]);

  // const handleSearch = () => {
  //   return coins.filter(
  //     (coin) =>
  //       coin.name.toLowerCase().includes(search) ||
  //       coin.symbol.toLowerCase().includes(search)
  //   );
  // };
  if (error) return <ErrorComponent message={"Error While Fetching Coins"} />;

  return (
    <>
      <Stack>
        <Home />
        <Container maxW={"container.xl"}>
          {loading ? (
            <Loader />
          ) : (
            <>
              <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
                <HStack spacing={"4"}>
                  
                  <Radio value={"usd"}>USD</Radio>
                  <Radio value={"eur"}>EUR</Radio>
                </HStack>
              </RadioGroup>
              {/* <Input
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Here is a sample placeholder"
                size="sm"
              /> */}

              <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
                {coins.map((i) => (
                  <CoinCard
                    id={i.id}
                    key={i.id}
                    name={i.name}
                    price={i.current_price}
                    img={i.image}
                    symbol={i.symbol}
                    currencySymbol={currencySymbol}
                  />
                ))}
              </HStack>

              <HStack w={"full"} overflowX={"auto"} p={"8"}>
                {btns.map((item, index) => (
                  <Button
                    key={index}
                    bgColor={"blackAlpha.900"}
                    color={"white"}
                    onClick={() => changePage(index + 1)}
                  >
                    {index + 1}
                  </Button>
                ))}
              </HStack>
            </>
          )}
        </Container>
      </Stack>
    </>
  );
};

export default Coins;
