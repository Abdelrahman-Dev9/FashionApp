import {
  Box,
  Button,
  Divider,
  HStack,
  Heading,
  Image,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import photo from "../../images/product/evan-mcdougall-qnh1odlqOmk-unsplash.jpeg";

function SectionTwo() {
  const imageStyle = {
    _hover: {
      bg: "black",
      boxShadow: "2xl",
      transition: "1s ",
    },
  };
  return (
    <>
      <Stack mt={"100px"} mb={20}>
        <Box>
          <HStack spacing={10}>
            <Box h={"80vh"} ml={"80px"} w={"50%"}>
              <Image {...imageStyle} src={photo} />
            </Box>
            <Box w={"50%"} h={"88vh"} mr={"50px"} mt={"60px"}>
              <Box mt={"40px"}>
                <HStack justifyContent={"space-between"}>
                  <Heading>Tree pot</Heading>
                  <Text>$25</Text>
                </HStack>
                <Text>Original package design from house</Text>
              </Box>
              <Box mt={20}>
                <Text fontSize={"larger"} fontWeight={"bold"}>
                  Description
                </Text>
                <Text mt={2} color={"gray.500"} fontSize={"larger"}>
                  Over three years in business, We've had the chance to work on
                  a variety of projects, with companies
                </Text>
              </Box>
              <Box mt={20}>
                <HStack>
                  <Select w={"300px"} rounded={"none"} placeholder="Quantity">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Select>
                  <Button
                    p={5}
                    w={"300px"}
                    bg={"black"}
                    color={"white"}
                    _hover={{ bg: "orange", color: "white" }}
                  >
                    ADD TO CART
                  </Button>
                </HStack>
              </Box>
              <Box mt={5} color={"gray.500"}>
                <HStack spacing={5}>
                  <Text _hover={{ color: "red" }} cursor={"pointer"}>
                    Details
                  </Text>
                  <Text _hover={{ color: "red" }} cursor={"pointer"}>
                    Delivery and Payment
                  </Text>
                </HStack>
              </Box>
            </Box>
          </HStack>
        </Box>
      </Stack>
      <Divider />
    </>
  );
}

export default SectionTwo;
