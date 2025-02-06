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
            We provide you
          </Heading>
          <Heading fontSize={"7xl"}>Fashionable Stuffs</Heading>
        </Heading>
      </Box>
    </>
  );
}

export default SectionOne;
