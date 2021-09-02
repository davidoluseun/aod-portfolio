import { Box, Flex, Text, Icon, Link } from "@chakra-ui/react";
import { VisuallyHidden, useColorMode } from "@chakra-ui/react";
import { MdFavorite } from "react-icons/md";
import { FaTwitter, FaGithub, FaPhone, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex p="5" as="footer" direction="column" align={{ base: "center" }}>
      <Box my="2">
        <Link
          href="https://github.com/davidoluseun"
          target="_blank"
          rel="noopener noreferrer"
          p="2"
          d="inline-block"
        >
          <VisuallyHidden>Github</VisuallyHidden>
          <Icon
            color={colorMode === "light" ? "#000" : "#fff"}
            as={FaGithub}
            boxSize="5"
          />
        </Link>

        <Link
          href="https://www.linkedin.com/in/oluwaseun-anifowose-460001165/"
          target="_blank"
          rel="noopener noreferrer"
          p="2"
          d="inline-block"
        >
          <VisuallyHidden>LinkedIn</VisuallyHidden>
          <Icon as={FaLinkedinIn} boxSize="5" />
        </Link>

        <Link
          href="https://twitter.com/ADavidOluseun"
          target="_blank"
          rel="noopener noreferrer"
          p="2"
          d="inline-block"
        >
          <VisuallyHidden>Twitter</VisuallyHidden>
          <Icon as={FaTwitter} boxSize="5" />
        </Link>

        <Link href="tel:09154105623" p="2" d="inline-block">
          <VisuallyHidden>Phone number</VisuallyHidden>
          <Icon as={FaPhone} boxSize="5" />
        </Link>
      </Box>
      <Box>
        <Text>
          Made with{" "}
          <Text as="em">
            <VisuallyHidden>love</VisuallyHidden>
            <Icon as={MdFavorite} boxSize="5" color="#dc004e" />
          </Text>{" "}
          by aod
        </Text>
      </Box>
    </Flex>
  );
};

export default Footer;
