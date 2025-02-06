import { Box, HStack, Heading, Image } from "@chakra-ui/react";
import photo from "../../images/header/positive-european-woman-has-break-after-work.jpg";

function SectionOne() {
  const headingStyle = {
    bg: "blue.50",
    p: 5,
    h: "500px",

    fontWeight: "bold",
  };
  return (
    <>
      <Box {...headingStyle}>
        {/* <Center h="500px"> */}
        <HStack>
          <Box w={"50%"} mt={"-40px"}>
            <Heading>
              <Heading fontSize={"6xl"} color={"red.500"}>
                Say hello to us
              </Heading>
              <Heading fontSize={"7xl"}>love to hear you</Heading>
            </Heading>
          </Box>
          <Box>
            <Image src={photo} h="500px" mt={"-20px"} />
          </Box>
        </HStack>
        {/* </Center> */}
      </Box>
    </>
  );
}

export default SectionOne;
