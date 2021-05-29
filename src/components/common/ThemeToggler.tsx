import { IconButton, useColorMode } from "@chakra-ui/react";
import { MdBrightness4, MdBrightness7 } from "react-icons/md";

const ThemeToggler = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      p={{ base: "2", lg: "3" }}
      bg="transparent !important"
      border="1px solid"
      borderColor="transparent"
      position="absolute"
      right={{ base: "5", lg: "10", xl: "76px" }}
      top="10px"
      aria-label="Toggle theme"
      onClick={toggleColorMode}
      _focus={{ boxShadow: "0 0 0 2px #fff !important" }}
      icon={
        colorMode === "light" ? (
          <MdBrightness7 size="24px" />
        ) : (
          <MdBrightness4 size="24px" />
        )
      }
    />
  );
};

export default ThemeToggler;
