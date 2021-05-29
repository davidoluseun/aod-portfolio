import * as React from "react";
import {
  Box,
  Text,
  Heading,
  Icon,
  GridItem,
  useColorMode,
  As,
} from "@chakra-ui/react";

type ServicesItemProps = {
  ItemIcon: As;
  title: string;
  text: string;
};

const ServicesItem = ({ ItemIcon, title, text }: ServicesItemProps) => {
  const { colorMode } = useColorMode();
  return (
    <GridItem
      p="5"
      border="1px solid rgba(0, 0, 0, 0.23)"
      borderRadius="8px"
      bg={colorMode === "dark" ? "darkV" : ""}
      borderColor={colorMode === "dark" ? "borderDark" : ""}
    >
      <Box
        bg="primary"
        color="#fff"
        borderRadius="full"
        boxSize="100px"
        mx="auto"
        d="grid"
        placeContent="center"
      >
        <Icon boxSize="35px" as={ItemIcon} />
      </Box>

      <Heading
        as="h3"
        my="4"
        fontSize="18px"
        lineHeight="1.3"
        textAlign="center"
        fontWeight="semibold"
      >
        {title}
      </Heading>
      <Text textAlign="center">{text}</Text>
    </GridItem>
  );
};

export default ServicesItem;
