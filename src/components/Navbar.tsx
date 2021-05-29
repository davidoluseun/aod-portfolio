import * as React from "react";
import { Flex } from "@chakra-ui/react";
import NavToggler from "./common/NavToggler";
import ThemeToggler from "./common/ThemeToggler";
import Nav from "./common/Nav";
import Logo from "./common/Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <Flex
      bg="#161b22"
      color="rgba(240, 246, 252, 0.7)"
      as="header"
      align="center"
      justify="space-between"
      px={{ base: "5", lg: "10", xl: "76px" }}
      py={{ base: "10px", lg: "6.5px" }}
      wrap={{ base: "wrap", lg: "nowrap" }}
      position="sticky"
      top="0"
      zIndex="sticky"
    >
      <Logo />
      <NavToggler isOpen={isOpen} toggle={handleToggle} />
      <Nav isOpen={isOpen} />
      <ThemeToggler />
    </Flex>
  );
};

export default Navbar;
