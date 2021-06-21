import { Link, Flex, Divider, useColorMode } from "@chakra-ui/react";

const VMailLink = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      as="aside"
      direction="column"
      position="fixed"
      right="0"
      width={{ lg: "126px", xl: "200px" }}
      d={{ base: "none", lg: "flex" }}
      align="center"
    >
      <Divider
        mb="5"
        height="90px"
        orientation="vertical"
        borderColor={colorMode === "light" ? "#000" : "#fff"}
      />

      <Link
        p="2"
        style={{ writingMode: "vertical-rl" }}
        _hover={{ textDecor: "none" }}
        href="mailto:a.davidoluseun@gmail.com"
      >
        a.davidoluseun@gmail.com
      </Link>
    </Flex>
  );
};

export default VMailLink;
