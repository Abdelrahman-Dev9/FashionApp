import {
  Box,
  Center,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import photo from "../../images/retail-shop-owner-mask-social-distancing-shopping.jpg";

function StoryTwo() {
  return (
    <>
      <Box h={"500px"} bg={"blue.100"} ml={"-210px"} mt={90}>
        <Center h={"500px"}>
          <HStack spacing={20}>
            <Box>
              <Image w={"750px"} h={"500px"} src={photo} objectFit={"fill"} />
            </Box>
            <Box maxWidth={"400px"}>
              <Center>
                <VStack spacing={6}>
                  <Heading textAlign={"left"} w={"100%"}>
                    {" "}
                    <Heading as={"span"} color={"red"}>
                      Retail
                    </Heading>{" "}
                    shop owners
                  </Heading>
                  <Text textAlign={"left"} w={"100%"} fontSize={"large"}>
                    Credits go to Unsplash and FreePik websites for images used
                    in this Little Fashion by Tooplate.
                  </Text>
                  <Text
                    textAlign={"left"}
                    w={"100%"}
                    _hover={{ color: "red" }}
                    mt={10}
                  >
                    EXPLORE PRODUCTS
                  </Text>
                </VStack>
              </Center>
            </Box>
          </HStack>
        </Center>
      </Box>
    </>
  );
}

export default StoryTwo;
