import {
  Box,
  Text,
  Link,
  Heading,
  Image,
  useColorMode,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import WavingImg from "../images/waving-hand-img.png";

const wave = keyframes`
  0% { transform: rotate(0deg); }
  50% { transform: rotate(45deg);}
  100% { transform: rotate(0deg);}
`;

const Hero = () => {
  const { colorMode } = useColorMode();
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${wave} infinite 700ms linear`;

  return (
    <Box as="section" pt="60px" id="home">
      <Heading as="h1" fontSize="16px" fontWeight="normal" lineHeight="1.3">
        Hi there,{" "}
        <Image
          src={WavingImg}
          d="inline-block"
          htmlWidth="60"
          htmlHeight="70"
          w={{ base: "20px", lg: "25px" }}
          mr={prefersReducedMotion ? "0" : "3"}
          alt="Waving hand"
          animation={animation}
          style={{ transformOrigin: "right bottom" }}
        />{" "}
        meet
      </Heading>
      <Heading
        as="h2"
        mt="4px"
        lineHeight="1.3"
        fontWeight="bold"
        fontSize="clamp(32px, 5vw, 45px)"
      >
        A. David Oluseun.
      </Heading>
      <Heading
        as="h3"
        mt="4px"
        lineHeight="1.3"
        fontSize="clamp(32px, 5vw, 45px)"
        fontWeight="bold"
      >
        I build UI that users love to use.
      </Heading>
      <Text fontSize={{ lg: "20px" }} mt="24px" maxW="500px">
        I'm a front-end web developer base in Lagos, Nigeria, specializing in
        React, with 2+ years experience, I love to build User Interfaces for
        everyone, I'm passionate about following best practices and standards.
      </Text>

      <Link
        as={ScrollLink}
        to="contact"
        spy={true}
        offset={-120}
        smooth={"easeInOutQuint"}
        duration={300}
        activeClass="active"
        href="/#contact"
        px="4"
        h="10"
        mt="12"
        w="100px"
        color="#fff"
        bg="primary"
        d="inline-flex"
        borderRadius="md"
        border="1px solid"
        alignItems="center"
        verticalAlign="middle"
        fontWeight="semibold"
        borderColor="primary"
        _hover={{ textDecor: "none" }}
      >
        Hire me
      </Link>

      <Link
        px="4"
        h="10"
        ml="8"
        mt="12"
        w="100px"
        bg="#fff"
        href="http://bit.ly/aoddemo"
        rel="noopener noreferrer"
        target="_blank"
        color="primary"
        d="inline-flex"
        borderRadius="md"
        border="1px solid"
        alignItems="center"
        verticalAlign="middle"
        fontWeight="semibold"
        borderColor={colorMode === "light" ? "primary" : "dark"}
        _hover={{ textDecor: "none" }}
      >
        Resume
      </Link>
    </Box>
  );
};

export default Hero;
