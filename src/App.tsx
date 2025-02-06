import { useState } from "react";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/HomePage/Home";
import Story from "./Components/StoryPage/Story";
import { Box, HStack, Icon, Link, Text } from "@chakra-ui/react";
import Products from "./Components/ProductsPage/Products";
import Faqs from "./Components/FAQS/Faqs";
import Contact from "./Components/ContactPage/Contact";
import { FaCartPlus, FaRegUser } from "react-icons/fa";
import Login from "./Components/UserLogIn/Login";
import Cart from "./Components/ShoppingCart/Cart";

function App() {
  const IconStyle = {
    cursor: "pointer",
    _hover: { color: "red" },
    boxSize: "20px",
  };
  const [count, setcount] = useState(1);
  const [Color, setColor] = useState("red");
  // const [ShowNavBar, setShowNavBar] = useState(1);

  return (
    <>
      <Box
        p={5}
        bg={count == 6 ? "gray.700" : "white"}
        color={count == 6 ? "white" : "black"}
        w={"100%"}
      >
        <HStack justifyContent={"space-between"}>
          <Text
            fontSize={"x-large"}
            _hover={{ color: "red" }}
            cursor={"pointer"}
            ml={"40px"}
            onClick={() => setcount(1)}
          >
            <span style={{ color: "red", marginRight: "5px" }}>Little</span>
            Fashion
          </Text>
          <HStack spacing={8}>
            <Link
              _hover={{ color: Color }}
              color={count === 1 ? "red" : ""}
              onClick={() => {
                setcount(1), setColor("red");
              }}
            >
              Home
            </Link>
            <Link
              _hover={{ color: Color }}
              color={count === 2 ? Color : ""}
              onClick={() => {
                setcount(2), setColor("red");
              }}
            >
              Story
            </Link>
            <Link
              _hover={{ color: Color }}
              color={count === 3 ? Color : ""}
              onClick={() => {
                setcount(3), setColor("red");
              }}
            >
              Products
            </Link>
            <Link
              _hover={{ color: Color }}
              color={count === 4 ? Color : ""}
              onClick={() => {
                setcount(4), setColor("red");
              }}
            >
              FAQS
            </Link>
            <Link
              _hover={{ color: Color }}
              color={count === 5 ? Color : ""}
              onClick={() => {
                setcount(5), setColor("red");
              }}
            >
              Contact
            </Link>
          </HStack>
          <HStack spacing={6} mr={"40px"}>
            <Icon
              {...IconStyle}
              as={FaRegUser}
              onClick={() => {
                setcount(6), setColor("red");
              }}
            />
            <Icon
              {...IconStyle}
              as={FaCartPlus}
              onClick={() => {
                setcount(7), setColor("red");
              }}
            />
          </HStack>
        </HStack>
      </Box>

      {count === 1 ? (
        <Home />
      ) : count === 2 ? (
        <Story />
      ) : count === 3 ? (
        <Products />
      ) : count === 4 ? (
        <Faqs />
      ) : count === 5 ? (
        <Contact />
      ) : count === 6 ? (
        <Login />
      ) : count === 7 ? (
        <Cart />
      ) : (
        ""
      )}
      <Footer />
    </>
  );
}

export default App;
