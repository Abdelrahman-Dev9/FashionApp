import {
  Box,
  Center,
  Text,
  Icon,
  VStack,
  Card,
  Divider,
  HStack,
} from "@chakra-ui/react";
import { IoIosClose } from "react-icons/io";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

function DonStory() {
  const Iconstyle = {
    position: "absolute",
    top: 5,
    right: 5,
    fontSize: "80px",
    color: "gray",
    cursor: "pointer",
  };
  const SocailStyle = {
    fontSize: "larger",
    color: "gray",
    cursor: "pointer",
    _hover: { color: "red" },
  };

  const [Isvisible, setIsvisible] = useState(true);

  return (
    <>
      <Box>
        {Isvisible && (
          <Box mt={"-590px"}>
            <Center>
              <Card w={"700px"} h={"700px"} p={5}>
                <Box w={"100%"} h={"300px"}>
                  <Icon
                    {...Iconstyle}
                    as={IoIosClose}
                    onClick={() => setIsvisible(!Isvisible)}
                  />
                  <Center mt={"120px"}>
                    <VStack>
                      <Text fontSize={"xx-large"}>Don Haruko</Text>
                      <Text
                        fontSize={"larger"}
                        color={"gray.500"}
                        fontWeight={"bold"}
                      >
                        Product, VP
                      </Text>
                    </VStack>
                  </Center>
                </Box>
                <Divider />
                <Box mt={"60px"} px={20}>
                  <Text
                    color={"black"}
                    fontSize={"x-large"}
                    fontWeight={"bold"}
                  >
                    Over three years in business had the chance to work on
                    variety of projects, with companies
                  </Text>

                  <HStack mt={8} spacing={10}>
                    <Text color={"gray.500"}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Text>
                    <Text color={"gray.500"}>
                      Incididunt ut labore et dolore magna aliqua. Quis ipsum
                      suspendisse commodo viverra.
                    </Text>
                  </HStack>
                  <HStack mt={10} spacing={5}>
                    <Text>Where to find?</Text>
                    <Icon as={FaWhatsapp} {...SocailStyle} />
                    <Icon as={FaInstagram} {...SocailStyle} />
                  </HStack>
                </Box>
              </Card>
            </Center>
          </Box>
        )}
      </Box>
    </>
  );
}

export default DonStory;
