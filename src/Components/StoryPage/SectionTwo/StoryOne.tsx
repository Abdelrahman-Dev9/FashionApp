import { Box, Center, HStack, Image, Text, VStack } from "@chakra-ui/react";
import photo from "../../images/pim-chu-z6NZ76_UTDI-unsplash.jpeg";

function StoryOne() {
  const style = {
    color: "gray",
    _hover: { color: "red" },
    cursor: "pointer",
  };
  const textStyle = {
    fontSize: "larger",
    w: "450px",
    mt: 3,
    color: "gray",
    _selection: { bg: "red.500 ", color: "white" },
  };
  // const txStyle = {
  //   position: "absolute",
  //   bottom: 0,
  //   _hover: { color: "red" },
  //   cursor: "pointer",
  // };
  return (
    <>
      <Box ml={"100px"}>
        <Center>
          <HStack spacing={10}>
            <Box>
              <HStack>
                <Box w={"2px"} h={"95px"} bg={"red"} />
                <VStack fontSize={"large"}>
                  <Text color={"red"} ml={"-10px"}>
                    Introduction
                  </Text>
                  <Text {...style} ml={2}>
                    How We Work
                  </Text>
                  <Text {...style} ml={"-10px"}>
                    Capabitites
                  </Text>
                </VStack>
              </HStack>
            </Box>
            <Box>
              <Image src={photo} ml={"30px"} />
            </Box>
            <Box>
              <Text fontSize={"x-large"}>
                Good{" "}
                <Text as={"span"} color={"red"}>
                  Design
                </Text>{" "}
              </Text>

              <Text fontSize={"x-large"}>
                Ideas for
                <Text as={"span"} color={"red"}>
                  your
                </Text>
                Fashion
              </Text>
              <Text {...textStyle}>
                Little Fashion templates comes with sign in / sign up pages,
                product listing / product detail, about, FAQs, and contact page.
              </Text>
              <Text {...textStyle}>
                Since this HTML template is based on Boostrap CSS library, you
                can feel free to add more components as you need.
              </Text>
              <Text {...textStyle}>Learn More About Us</Text>
            </Box>
          </HStack>
        </Center>
      </Box>
    </>
  );
}

export default StoryOne;
