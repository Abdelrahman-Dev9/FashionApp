import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";
import photo from "../../images/slideshow/medium-shot-business-women-high-five.jpeg";
function MainOne() {
  const bgStyles = {
    bgImage: `url(${photo})`, // Assuming 'photo' is imported or available
    minH: "130vh",
    objectFit: "cover",
    bgSize: "100%",
    bgRepeat: "no-repeat",
    zIndex: "-1",
  };
  const btnStyles = {
    borderRadius: "50px",
    p: 5,
    _hover: { bgColor: "orange" },
    mt: "-400px",
    ml: "80px",
  };
  return (
    <>
      <Box {...bgStyles} zIndex={-1}>
        <Center minH={"95vh"}>
          <Box color={"white"} ml={"-400px"}>
            <Heading fontSize={"7xl"}>Cool Fashion</Heading>
            <Text fontSize={"2xl"}>
              Little Fashion Tempelate comes with total 8 HTML Pages provided by
              Tooplate website.
            </Text>
          </Box>
        </Center>
        <Button {...btnStyles}>Learn More About Us</Button>
      </Box>
    </>
  );
}

export default MainOne;
