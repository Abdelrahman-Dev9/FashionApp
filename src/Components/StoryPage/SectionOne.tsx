import { Box, HStack, Heading, Image, Text } from "@chakra-ui/react";
import photo1 from "../images/header/businesspeople-meeting-office-working.jpg";

function SectionOne() {
  const textstyle = {
    position: "absolute",
    top: "250px",
    bottom: "15px",
    left: "10",
  };
  return (
    <>
      <Box>
        <HStack spacing={"none"}>
          <Box bg={"blue.50"} w={"50%"} h={"70vh"}>
            <Text {...textstyle}>
              <Heading color={"red.500"} fontSize={"6xl"}>
                Company
              </Heading>
              <Heading fontSize={"6xl"}>Fashion</Heading>
            </Text>
          </Box>
          <Image w={"50%"} h={"70vh"} src={photo1} objectFit={"cover"} />
        </HStack>
      </Box>
    </>
  );
}

export default SectionOne;
