import {
  Avatar,
  Box,
  Card,
  HStack,
  Heading,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FiPlusCircle } from "react-icons/fi";
import photo1 from "../images/people/senior-man-wearing-white-face-mask-covid-19-campaign-with-design-space.jpeg";
import photo2 from "../images/people/portrait-british-woman.jpeg";
import photo3 from "../images/people/beautiful-woman-face-portrait-brown-background.jpeg";
import { useState } from "react";
import DonStory from "./DonStory";
import KellyStory from "./KellyStory";
import MaireStory from "./MaireStory";

function SectionTwo() {
  const cardStyle = {
    w: "400px",
    h: "150px",
    p: 5,
    bg: "white",
    mt: "60px",
  };
  const IconBtnStyle = {
    bg: "gray.300",
    _hover: { color: "black" },
  };
  const textStyle = {
    fontWeight: "bold",
    w: "100%",
    color: "gray.400",
  };
  const [DonStoryVisibility, setDonStoryVisibility] = useState(false);
  const [KellyStoryVisibility, setKellyStoryVisibility] = useState(false);
  const [MarieStoryVisibility, setMarieStoryVisibility] = useState(false);

  return (
    <>
      <Box h={"420px"} bg={"gray.300"} p={5} zIndex={-1}>
        <Heading mt={20} ml={"45px"}>
          Meet Our{" "}
          <Text as={"span"} color={"red"}>
            Team
          </Text>
        </Heading>
        <Box>
          <HStack justifyContent={"space-evenly"}>
            <Card {...cardStyle}>
              <HStack justifyContent={"space-between"} pt={"10px"}>
                <Avatar boxSize={"80px"} src={photo1} />
                <VStack spacing={2} w={"90px"}>
                  <Heading w={"100%"}>Don</Heading>
                  <Text {...textStyle}>Product,VP</Text>
                </VStack>
                <IconButton
                  aria-label={""}
                  color={"white"}
                  icon={<FiPlusCircle />}
                  fontSize={"x-large"}
                  {...IconBtnStyle}
                  onClick={() => setDonStoryVisibility(!DonStoryVisibility)}
                ></IconButton>
              </HStack>
            </Card>
            <Card {...cardStyle}>
              <HStack justifyContent={"space-between"} pt={"10px"}>
                <Avatar boxSize={"80px"} src={photo2} />
                <VStack spacing={2} w={"90px"}>
                  <Heading w={"100%"}>Kelly</Heading>
                  <Text {...textStyle}>Marketing</Text>
                </VStack>
                <IconButton
                  aria-label={""}
                  color={"white"}
                  icon={<FiPlusCircle />}
                  fontSize={"x-large"}
                  {...IconBtnStyle}
                  onClick={() => setKellyStoryVisibility(!KellyStoryVisibility)}
                ></IconButton>
              </HStack>
            </Card>
            <Card {...cardStyle}>
              <HStack justifyContent={"space-between"} pt={"10px"}>
                <Avatar boxSize={"80px"} src={photo3} />
                <VStack spacing={2} w={"94px"}>
                  <Heading w={"100%"}>Marie</Heading>
                  <Text {...textStyle}>Founder</Text>
                </VStack>
                <IconButton
                  aria-label={""}
                  color={"white"}
                  icon={<FiPlusCircle />}
                  fontSize={"x-large"}
                  {...IconBtnStyle}
                  onClick={() => setMarieStoryVisibility(!MarieStoryVisibility)}
                ></IconButton>
              </HStack>
            </Card>
          </HStack>
        </Box>
      </Box>
      {DonStoryVisibility && <DonStory />}
      {KellyStoryVisibility && <KellyStory />}
      {MarieStoryVisibility && <MaireStory />}
    </>
  );
}

export default SectionTwo;
