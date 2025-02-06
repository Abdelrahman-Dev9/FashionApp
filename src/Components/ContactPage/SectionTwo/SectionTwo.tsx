import {
  Box,
  Button,
  Center,
  Divider,
  FormControl,
  HStack,
  Heading,
  Icon,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import {
  FaFacebookMessenger,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

function SectionTwo() {
  const btnStyle = {
    p: 7,
    rounded: "full",
    mt: 5,
    w: "200px",
    bg: "black",
    color: "white",
    fontWeight: "bold",
    _hover: { bg: "red.600" },
  };
  const textStyle = {
    fontSize: "x-large",
    fontWeight: "bold",
  };
  const IcontStyle = {
    color: "gray.400",
    _hover: { color: "red" },
    cursor: "pointer",
  };
  return (
    <>
      <Box mt={20}>
        <Center>
          <HStack spacing={20}>
            <Box>
              <Heading>
                Let's
                <Text as={"span"} color={"red"}>
                  begin
                </Text>
              </Heading>
              <FormControl id="name" mt={5}>
                <Input w={"600px"} placeholder="Full name" id="name" p={7} />
              </FormControl>
              <FormControl mt={5}>
                <Input
                  w={"600px"}
                  p={7}
                  placeholder="Email Address"
                  id="email"
                />
              </FormControl>
              <FormControl id="name" mt={5}>
                <Input w={"600px"} placeholder="Subjects" id="field" p={7} />
              </FormControl>
              <FormControl id="name" mt={5}>
                <Textarea placeholder="Tell us about the project" h={"200px"} />
              </FormControl>
              <Button {...btnStyle}>Send</Button>
            </Box>
            <Box mt={"-250px"}>
              <HStack spacing={20}>
                <Box>
                  <Text {...textStyle}>New Business</Text>
                  <Text color={"gray.500"}>hello@Domian.com</Text>
                </Box>

                <Box>
                  <Text {...textStyle}>Main Studio</Text>
                  <Text color={"gray.500"}>Studio@Domian.com</Text>
                </Box>
              </HStack>

              <Divider mt={20} />
              <HStack spacing={20} mt={5}>
                <Box>
                  <Text {...textStyle}>Our Office</Text>
                  <Text color={"gray.500"} w={"190px"}>
                    Akershusstranda 20, 0150 Oslo, Norway
                  </Text>
                </Box>

                <Box>
                  <Text {...textStyle}>Our Social</Text>
                  <HStack spacing={5} mt={5}>
                    <Icon as={FaFacebookMessenger} {...IcontStyle} />
                    <Icon as={FaYoutube} {...IcontStyle} />
                    <Icon as={FaInstagram} {...IcontStyle} />
                    <Icon as={FaWhatsapp} {...IcontStyle} />
                  </HStack>
                </Box>
              </HStack>
            </Box>
          </HStack>
        </Center>
      </Box>
    </>
  );
}

export default SectionTwo;
