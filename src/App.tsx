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

type Page = 1 | 2 | 3 | 4 | 5 | 6 | 7;

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(1);
  const [activeColor, setActiveColor] = useState("red");

  const iconStyle = {
    cursor: "pointer",
    _hover: { color: "red" },
    boxSize: "20px",
  };

  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
    setActiveColor("red");
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <Home />;
      case 2:
        return <Story />;
      case 3:
        return <Products />;
      case 4:
        return <Faqs />;
      case 5:
        return <Contact />;
      case 6:
        return <Login />;
      case 7:
        return <Cart />;
      default:
        return null;
    }
  };

  return (
    <>
      <Box
        p={5}
        bg={currentPage === 6 ? "gray.700" : "white"}
        color={currentPage === 6 ? "white" : "black"}
        w="100%"
      >
        <HStack justifyContent="space-between">
          <Text
            fontSize="x-large"
            _hover={{ color: "red" }}
            cursor="pointer"
            ml="40px"
            onClick={() => handlePageChange(1)}
          >
            <span style={{ color: "red", marginRight: "5px" }}>Little</span>
            Fashion
          </Text>
          <HStack spacing={8}>
            <Link
              _hover={{ color: activeColor }}
              color={currentPage === 1 ? "red" : ""}
              onClick={() => handlePageChange(1)}
            >
              Home
            </Link>
            <Link
              _hover={{ color: activeColor }}
              color={currentPage === 2 ? activeColor : ""}
              onClick={() => handlePageChange(2)}
            >
              Story
            </Link>
            <Link
              _hover={{ color: activeColor }}
              color={currentPage === 3 ? activeColor : ""}
              onClick={() => handlePageChange(3)}
            >
              Products
            </Link>
            <Link
              _hover={{ color: activeColor }}
              color={currentPage === 4 ? activeColor : ""}
              onClick={() => handlePageChange(4)}
            >
              FAQS
            </Link>
            <Link
              _hover={{ color: activeColor }}
              color={currentPage === 5 ? activeColor : ""}
              onClick={() => handlePageChange(5)}
            >
              Contact
            </Link>
          </HStack>
          <HStack spacing={6} mr="40px">
            <Icon
              {...iconStyle}
              as={FaRegUser}
              onClick={() => handlePageChange(6)}
            />
            <Icon
              {...iconStyle}
              as={FaCartPlus}
              onClick={() => handlePageChange(7)}
            />
          </HStack>
        </HStack>
      </Box>

      {renderPage()}
      <Footer />
    </>
  );
}

export default App;
