import * as React from "react";
import { Box, IconButton, useColorMode } from "@chakra-ui/react";
import { animateScroll as scroll } from "react-scroll";
import { FaRocket } from "react-icons/fa";

const ScrollToTop = () => {
  const { colorMode } = useColorMode();
  const handleToTop = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    scroll.scrollToTop({
      duration: 300,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <Box>
      <IconButton
        bg="transparent !important"
        pt="2"
        border="1px solid"
        color={colorMode === "light" ? "#000" : "#fff"}
        borderColor="transparent"
        position="fixed"
        bottom="30px"
        right="20px"
        aria-label="Scroll to top"
        onClick={handleToTop}
        icon={<FaRocket style={{ transform: "rotate(315deg)" }} size="24px" />}
      />
    </Box>
  );
};

export default ScrollToTop;
