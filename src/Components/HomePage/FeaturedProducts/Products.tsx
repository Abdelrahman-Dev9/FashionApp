import {
  Box,
  Card,
  Center,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import photo1 from "../../images/product/evan-mcdougall-qnh1odlqOmk-unsplash.jpeg";
import photo2 from "../../images/product/jordan-nix-CkCUvwMXAac-unsplash.jpeg";
import photo3 from "../../images/product/nature-zen-3Dn1BZZv3m8-unsplash.jpeg";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function Products() {
  const cardStyle = {
    w: "400px",
    h: "400px",
    mt: 17,
    _hover: {
      bg: "black",
      boxShadow: "2xl",
      transition: "1s ",
    },
  };
  const HStackStyle = {
    w: "100%",
    position: "absolute",
    top: 3,
    justifyContent: "space-between",
  };
  const textStyle = {
    ml: "20px",
    bg: "white",
    px: 2,
    py: "1",
    color: "gray.600",
  };

  const [IconOne, setIconOne] = useState(true);
  const [IconTwo, setIconTwo] = useState(true);
  const [IconThree, setIconThree] = useState(true);

  return (
    <>
      <Center mt={20}>
        <Box>
          <Center>
            <Heading>Featured Products</Heading>
          </Center>
          <HStack>
            <HStack spacing={7}>
              <Box>
                <Card {...cardStyle}>
                  <Image src={photo1} />
                  <HStack {...HStackStyle}>
                    <Text {...textStyle}>New Arrival</Text>
                    <Box
                      as="button"
                      onClick={() => setIconOne(!IconOne)}
                      fontSize={"lg"}
                      mr={"20px"}
                    >
                      {IconOne ? (
                        <FaRegHeart color="white" />
                      ) : (
                        <FaHeart color="red" />
                      )}
                    </Box>
                  </HStack>
                </Card>
                <Box>
                  <HStack justifyContent={"space-between"}>
                    <Text fontSize={"xl"} fontWeight={"bold"}>
                      Tree pot
                    </Text>
                    <Text>$25</Text>
                  </HStack>
                  <Text color={"gray"}>Original package design from house</Text>
                </Box>
              </Box>
              <Box>
                <Card {...cardStyle}>
                  <Image src={photo2} />
                  <HStack {...HStackStyle}>
                    <Text {...textStyle}>Low Price</Text>
                    <Box
                      as="button"
                      onClick={() => setIconTwo(!IconTwo)}
                      fontSize={"lg"}
                      mr={"20px"}
                    >
                      {IconTwo ? (
                        <FaRegHeart color="white" />
                      ) : (
                        <FaHeart color="red" />
                      )}
                    </Box>
                  </HStack>
                </Card>
                <Box>
                  <HStack justifyContent={"space-between"}>
                    <Text fontSize={"xl"} fontWeight={"bold"}>
                      Fashion Set
                    </Text>
                    <Text>$35</Text>
                  </HStack>
                  <Text color={"gray"}>Costume Package</Text>
                </Box>
              </Box>
              <Box>
                <Card {...cardStyle}>
                  <Image src={photo3} />
                  <HStack {...HStackStyle}>
                    <Text {...textStyle} visibility={"hidden"}></Text>
                    <Box
                      as="button"
                      onClick={() => setIconThree(!IconThree)}
                      fontSize={"lg"}
                      mr={"20px"}
                    >
                      {IconThree ? (
                        <FaRegHeart color="white" />
                      ) : (
                        <FaHeart color="red" />
                      )}
                    </Box>
                  </HStack>
                </Card>
                <Box>
                  <HStack justifyContent={"space-between"}>
                    <Text fontSize={"xl"} fontWeight={"bold"}>
                      Juice Drinks
                    </Text>
                    <Text>$45</Text>
                  </HStack>
                  <Text color={"gray"}>Nature made another world</Text>
                </Box>
              </Box>
            </HStack>
          </HStack>
          <Box mt={20}>
            <Center>
              <Box borderBottom={"1px solid black"}>
                <Text color={"gray.500"}>VIEW ALL PRODUCTS</Text>
              </Box>
            </Center>
          </Box>
        </Box>
      </Center>
    </>
  );
}

export default Products;
