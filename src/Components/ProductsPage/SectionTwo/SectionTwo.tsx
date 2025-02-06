import { Box, Card, HStack, Heading, Text, Image } from "@chakra-ui/react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import photo1 from "../../images/product/evan-mcdougall-qnh1odlqOmk-unsplash.jpeg";
import photo2 from "../../images/product/jordan-nix-CkCUvwMXAac-unsplash.jpeg";
import photo3 from "../../images/product/nature-zen-3Dn1BZZv3m8-unsplash.jpeg";
import photo4 from "../../images/product/team-fredi-8HRKoay8VJE-unsplash.jpeg";
import photo5 from "../../images/product/quokkabottles-kFc1_G1GvKA-unsplash.jpeg";
import photo6 from "../../images/product/anis-m-WnVrO-DvxcE-unsplash.jpeg";
import { useState } from "react";
function SectionTwo() {
  const cardStyle = {
    w: "400px",
    h: "400px",
    mt: 17,
    _hover: {
      bg: "black",
      boxShadow: "2xl",
      transition: "1s ",
    },
  };
  const HStackStyle = {
    w: "100%",
    position: "absolute",
    top: 3,
    justifyContent: "space-between",
  };
  const textStyle = {
    ml: "20px",
    bg: "white",
    px: 2,
    py: "1",
    color: "gray.600",
  };

  const [IconOne, setIconOne] = useState(true);
  const [IconTwo, setIconTwo] = useState(true);
  const [IconThree, setIconThree] = useState(true);
  return (
    <>
      <Box my={"120px"} ml={"70px"}>
        <Heading>New Arrival</Heading>
        <HStack mt={"50px"}>
          <HStack spacing={7}>
            <Box>
              <Card {...cardStyle}>
                <Image src={photo1} />
                <HStack {...HStackStyle}>
                  <Text {...textStyle}>New Arrival</Text>
                  <Box
                    as="button"
                    onClick={() => setIconOne(!IconOne)}
                    fontSize={"lg"}
                    mr={"20px"}
                  >
                    {IconOne ? <FaRegHeart /> : <FaHeart />}
                  </Box>
                </HStack>
              </Card>
              <Box>
                <HStack justifyContent={"space-between"}>
                  <Text fontSize={"xl"} fontWeight={"bold"}>
                    Tree pot
                  </Text>
                  <Text>$25</Text>
                </HStack>
                <Text color={"gray"}>Original package design from house</Text>
              </Box>
            </Box>
            <Box>
              <Card {...cardStyle}>
                <Image src={photo2} />
                <HStack {...HStackStyle}>
                  <Text {...textStyle}>Low Price</Text>
                  <Box
                    as="button"
                    onClick={() => setIconTwo(!IconTwo)}
                    fontSize={"lg"}
                    mr={"20px"}
                  >
                    {IconTwo ? <FaRegHeart /> : <FaHeart />}
                  </Box>
                </HStack>
              </Card>
              <Box>
                <HStack justifyContent={"space-between"}>
                  <Text fontSize={"xl"} fontWeight={"bold"}>
                    Fashion Set
                  </Text>
                  <Text>$35</Text>
                </HStack>
                <Text color={"gray"}>Costume Package</Text>
              </Box>
            </Box>
            <Box>
              <Card {...cardStyle}>
                <Image src={photo3} />
                <HStack {...HStackStyle}>
                  <Text {...textStyle} visibility={"hidden"}></Text>
                  <Box
                    as="button"
                    onClick={() => setIconThree(!IconThree)}
                    fontSize={"lg"}
                    mr={"20px"}
                  >
                    {IconThree ? <FaRegHeart /> : <FaHeart />}
                  </Box>
                </HStack>
              </Card>
              <Box>
                <HStack justifyContent={"space-between"}>
                  <Text fontSize={"xl"} fontWeight={"bold"}>
                    Juice Drinks
                  </Text>
                  <Text>$45</Text>
                </HStack>
                <Text color={"gray"}>Nature made another world</Text>
              </Box>
            </Box>
          </HStack>
        </HStack>
        <Heading mt={"80px"} fontWeight={"bold"} fontSize={"5xl"}>
          Propular
        </Heading>
        <HStack mt={"50px"}>
          <HStack spacing={7}>
            <Box>
              <Card {...cardStyle}>
                <Image src={photo4} />
                <HStack {...HStackStyle}>
                  <Text {...textStyle}>Trending</Text>
                  <Box
                    as="button"
                    onClick={() => setIconOne(!IconOne)}
                    fontSize={"lg"}
                    mr={"20px"}
                  >
                    {IconOne ? <FaRegHeart /> : <FaHeart />}
                  </Box>
                </HStack>
              </Card>
              <Box>
                <HStack justifyContent={"space-between"}>
                  <Text fontSize={"xl"} fontWeight={"bold"}>
                    Package
                  </Text>
                  <Text>$50</Text>
                </HStack>
                <Text color={"gray"}>Original package design from house</Text>
              </Box>
            </Box>
            <Box>
              <Card {...cardStyle}>
                <Image src={photo5} />
                <HStack {...HStackStyle}>
                  <Text {...textStyle} visibility={"hidden"}></Text>
                  <Box
                    as="button"
                    onClick={() => setIconTwo(!IconTwo)}
                    fontSize={"lg"}
                    mr={"20px"}
                  >
                    {IconTwo ? <FaRegHeart /> : <FaHeart />}
                  </Box>
                </HStack>
              </Card>
              <Box>
                <HStack justifyContent={"space-between"}>
                  <Text fontSize={"xl"} fontWeight={"bold"}>
                    Bottle
                  </Text>
                  <Text>$100</Text>
                </HStack>
                <Text color={"gray"}>Package design</Text>
              </Box>
            </Box>
            <Box>
              <Card {...cardStyle}>
                <Image src={photo6} />
                <HStack {...HStackStyle}>
                  <Text {...textStyle} visibility={"hidden"}></Text>
                  <Box
                    as="button"
                    onClick={() => setIconThree(!IconThree)}
                    fontSize={"lg"}
                    mr={"20px"}
                  >
                    {IconThree ? <FaRegHeart /> : <FaHeart />}
                  </Box>
                </HStack>
              </Card>
              <Box>
                <HStack justifyContent={"space-between"}>
                  <Text fontSize={"xl"} fontWeight={"bold"}>
                    Medicine
                  </Text>
                  <Text>$200</Text>
                </HStack>
                <Text color={"gray"}>Original design from house</Text>
              </Box>
            </Box>
          </HStack>
        </HStack>
      </Box>
    </>
  );
}

export default SectionTwo;
