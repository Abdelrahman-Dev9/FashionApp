import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function SectionTwo() {
  const [blueColorItemOne, setBlueColorItemOne] = useState(false);
  const [blueColorItemTwo, setBlueColorItemTwo] = useState(false);
  const [blueColorItemThree, setBlueColorItemThree] = useState(false);
  const [blueColorItemFour, setBlueColorItemFour] = useState(false);
  const [blueColorItemFive, setBlueColorItemFive] = useState(false);
  const accodiontbtnStyle = {
    mt: 5,
    mb: 5,
    justifyContent: "space-between",
    _hover: { bg: "none" },
  };
  return (
    <>
      <Box mt={20} ml={20}>
        <Heading fontWeight={"bold"}>General Info.</Heading>
        <Accordion allowToggle w={"700px"} mt={10}>
          <AccordionItem>
            <AccordionButton
              {...accodiontbtnStyle}
              onClick={() => setBlueColorItemOne(!blueColorItemOne)}
            >
              <Text fontSize={"25px"} color={blueColorItemOne ? "red" : ""}>
                What is this Little Fashion?
              </Text>
              <AccordionIcon as={IoIosArrowDown} />
            </AccordionButton>
            <AccordionPanel>
              <Text>
                <Text color={"gray.600"} as={"span"}>
                  {" "}
                  Little Fashion
                </Text>{" "}
                is free Bootstrap 5 website template for everyone. There are 8
                HTML pages included in this template and you can expand more
                pages as you need.
              </Text>
              <Text mt={3}>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion allowToggle w={"700px"}>
          <AccordionItem>
            <AccordionButton
              {...accodiontbtnStyle}
              onClick={() => setBlueColorItemTwo(!blueColorItemTwo)}
            >
              <Text fontSize={"25px"} color={blueColorItemTwo ? "red" : ""}>
                Nullam in nisl ex. Morbi?
              </Text>
              <AccordionIcon as={IoIosArrowDown} />
            </AccordionButton>
            <AccordionPanel>
              <Text>
                Convallis blandit massa, dictum mattis diam finibus sed. Integer
                elementum consectetur nibh, in varius dui fermentum nec. Nulla
                placerat aliquam turpis, vel dictum elit condimentum ut. Nunc
                orci.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion allowToggle w={"700px"}>
          <AccordionItem>
            <AccordionButton
              {...accodiontbtnStyle}
              onClick={() => setBlueColorItemThree(!blueColorItemThree)}
            >
              <Text fontSize={"25px"} color={blueColorItemThree ? "red" : ""}>
                Sapien, auctor id consequat?
              </Text>
              <AccordionIcon as={IoIosArrowDown} />
            </AccordionButton>
            <AccordionPanel>
              <Text>
                Nec, semper in erat. Ut fermentum semper ornare. Suspendisse non
                accumsan ex. Morbi molestie ante eget lectus.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
      <Box mt={"70px"} ml={20}>
        <Heading fontWeight={"bold"} fontSize={"xx-large"}>
          About{" "}
          <Text as={"span"} color={"red"}>
            our products
          </Text>{" "}
        </Heading>
        <Accordion allowToggle w={"700px"} mt={10}>
          <AccordionItem>
            <AccordionButton
              {...accodiontbtnStyle}
              onClick={() => setBlueColorItemFour(!blueColorItemFour)}
            >
              <Text fontSize={"25px"} color={blueColorItemFour ? "red" : ""}>
                What is Fashion Design?
              </Text>
              <AccordionIcon as={IoIosArrowDown} />
            </AccordionButton>
            <AccordionPanel>
              <Text>
                <Text color={"gray"} as={"span"} fontWeight={"bold"}>
                  {" "}
                  Lorem ipsum dolor
                </Text>{" "}
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Quis ipsum
                suspendisse ultrices gravida. Risus commodo viverra maecenas
                accumsan lacus vel facilisis.
              </Text>
              <Text mt={3}>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion allowToggle w={"700px"}>
          <AccordionItem>
            <AccordionButton
              {...accodiontbtnStyle}
              onClick={() => setBlueColorItemFive(!blueColorItemFive)}
            >
              <Text fontSize={"25px"} color={blueColorItemFive ? "red" : ""}>
                How do I use the product?
              </Text>
              <AccordionIcon as={IoIosArrowDown} />
            </AccordionButton>
            <AccordionPanel>
              <Text>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </>
  );
}

export default SectionTwo;
