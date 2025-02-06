import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";

function Login() {
  return (
    <>
      <Center mt={"100px"}>
        <Box>
          <Center>
            <Heading fontSize={"7xl"} fontWeight={"bold"}>
              Sign In
            </Heading>
          </Center>
          <FormControl id="email" mt={10}>
            <Input placeholder="Email address" w={"600px"} p={6} h={"60px"} />
          </FormControl>
          <FormControl mt={5}>
            <Input placeholder="Password" w={"600px"} p={6} h={"60px"} />
          </FormControl>
          <Button
            w={"600px"}
            rounded={"full"}
            mt={5}
            h={"60px"}
            bg={"black"}
            color={"white"}
            _hover={{ color: "white", bg: "orange.500" }}
          >
            SIGN IN
          </Button>
          <Center>
            <Text mt={5} color={"gray.500"} fontSize={"large"}>
              Don’t have an account? Create One
            </Text>
          </Center>
        </Box>
      </Center>
    </>
  );
}

export default Login;
