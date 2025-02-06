import {
  Box,
  Center,
  HStack,
  Heading,
  VStack,
  Text,
  Icon,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";

function Footer() {
  const textStyle = {
    color: "gray.600",
    w: "100%",
    textAlign: "start",
    cursor: "pointer",
    _hover: { color: "white" },
  };
  const IconStyle = {
    color: "gray.400",
    cursor: "pointer",
    _hover: { color: "white" },
  };
  return (
    <>
      <Center mt={20} w={"100%"} h={"300px"} bg={"black"} p={5}>
        <Box>
          <HStack spacing={"200px"}>
            <Box>
              <VStack spacing={4}>
                <Heading color={"white"}>
                  <span
                    style={{
                      color: "gray",
                      marginRight: "10px",
                      cursor: "pointer",
                    }}
                  >
                    Little
                  </span>
                  Fashion
                </Heading>
                <Text
                  color={"gray.600"}
                  mt={"35px"}
                  _hover={{ color: "white" }}
                >
                  Copyright © 2045 Little Fashion
                </Text>
                <Text color={"gray.600"} _hover={{ color: "white" }}>
                  Designed by Tooplate
                </Text>
              </VStack>
            </Box>
            <Box w={"130px"} textAlign={"start"}>
              <VStack spacing={4}>
                <Heading color={"white"}>Sitemap</Heading>
                <Text {...textStyle}>Story</Text>
                <Text {...textStyle}>Privacy policy</Text>
                <Text {...textStyle}>Contact</Text>
              </VStack>
            </Box>
            <Box>
              <Text {...textStyle}>Products</Text>
              <Text {...textStyle}>FAQS</Text>
            </Box>
            <Box mt={"-100px"} color={"white"}>
              <Heading>Social</Heading>
              <HStack spacing={4} mt={5}>
                <Icon as={FaYoutube} {...IconStyle} />
                <Icon as={FaWhatsapp} {...IconStyle} />
                <Icon as={FaInstagram} {...IconStyle} />
                <Icon as={FaTwitter} {...IconStyle} />
              </HStack>
            </Box>
          </HStack>
        </Box>
      </Center>
    </>
  );
}

export default Footer;
