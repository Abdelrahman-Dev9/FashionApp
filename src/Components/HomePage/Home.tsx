import { VStack, Icon, Box } from "@chakra-ui/react";
import { useState } from "react";
import MainOne from "./SectionOne/MainOne";
import MainTherre from "./SectionOne/MainTherre";
import MainTwo from "./SectionOne/MainTwo";
import StoryOne from "../StoryPage/SectionTwo/StoryOne";
import StoryTwo from "../StoryPage/SectionTwo/StoryTwo";
import Products from "./FeaturedProducts/Products";
import { FaRegCircle } from "react-icons/fa";

function Home() {
  const IconStyle = {
    cursor: "pointer",
    rounded: "full",
    boxSize: "34px",
  };

  const [count, setCount] = useState(1);

  return (
    <>
      {count === 1 ? (
        <MainOne />
      ) : count === 2 ? (
        <MainTwo />
      ) : count === 3 ? (
        <MainTherre />
      ) : (
        ""
      )}
      <Box position={"absolute"} top={"355px"} right={20} fontSize={"x-large"}>
        <VStack spacing={5} color={"white"}>
          <Icon
            {...IconStyle}
            onClick={() => setCount(1)}
            as={FaRegCircle}
            bg={count === 1 ? "white" : ""}
          />
          <Icon
            onClick={() => setCount(2)}
            as={FaRegCircle}
            {...IconStyle}
            bg={count === 2 ? "white" : ""}
          />
          <Icon
            {...IconStyle}
            onClick={() => setCount(3)}
            as={FaRegCircle}
            bg={count === 3 ? "white" : ""}
          />
        </VStack>
      </Box>

      <StoryOne />
      <StoryTwo />
      <Products />
    </>
  );
}

export default Home;
