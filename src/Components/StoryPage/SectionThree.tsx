import { Avatar, Box, Center, HStack, Heading, Text } from "@chakra-ui/react";
import React from "react";
import photo1 from "../images/people/senior-man-wearing-white-face-mask-covid-19-campaign-with-design-space.jpeg";

function SectionThree() {
  return (
    <>
      <Box mt={20}>
        <Center>
          <Box>
            <Heading>Customer love,</Heading>
            <Heading>
              <Text as={"span"} color={"red"}>
                Little
              </Text>{" "}
              Fashion
            </Heading>
          </Box>
          <Box></Box>
        </Center>
        <Center>
          <Box>
            <Text mt={"70px"} w={"650px"} fontSize={"large"} color={"gray.500"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              ullam voluptates dolore dolorem quae voluptatibus expedita, a
              doloremque suscipit perferendis.
            </Text>
            <HStack mt={8} spacing={5}>
              <Avatar src={photo1} />
              <Text fontSize={"larger"}>
                George,{" "}
                <Text as={"span"} color={"gray.500"}>
                  Digital Art FAshion
                </Text>
              </Text>
            </HStack>
          </Box>
        </Center>
      </Box>
    </>
  );
}

export default SectionThree;
