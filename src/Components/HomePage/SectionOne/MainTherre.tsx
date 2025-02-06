import { Center, Heading, Button, Box, Text } from "@chakra-ui/react";
import photo from "../../images/slideshow/two-business-partners-working-together-office-computer.jpeg";

function MainTherre() {
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
    fontSize: "xl",
    p: 7,
    bg: "black",
    color: "white",
    _hover: { bgColor: "orange" },
    mt: "-400px",
    ml: "80px",
  };
  return (
    <>
      <Box {...bgStyles}>
        <Center minH={"95vh"}>
          <Box color={"white"} ml={"-400px"}>
            <Heading fontSize={"7xl"}>Cool Fashion</Heading>
            <Text fontSize={"2xl"}>
              Little Fashion Tempelate comes with total 8 HTML Pages provided by
              Tooplate website.
            </Text>
          </Box>
        </Center>
        <Button {...btnStyles}>Work With Us</Button>
      </Box>
    </>
  );
}

export default MainTherre;
