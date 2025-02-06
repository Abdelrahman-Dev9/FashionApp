import { Box, Heading } from "@chakra-ui/react";

function SectionOne() {
  const headingStyle = {
    bg: "blue.50",
    p: 5,
    h: "400px",
    pt: "130px",
    pl: "70px",
    fontWeight: "bold",
  };
  return (
    <>
      <Box>
        <Heading {...headingStyle}>
          <Heading fontSize={"7xl"} color={"red.500"}>
            Choose your
          </Heading>
          <Heading fontSize={"7xl"}>favorite stuffs</Heading>
        </Heading>
      </Box>
    </>
  );
}

export default SectionOne;
