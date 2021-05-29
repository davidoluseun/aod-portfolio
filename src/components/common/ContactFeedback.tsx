import { Box, Text, Heading } from "@chakra-ui/react";

type ContactFeedbackProps = {
  firstname: string | undefined;
  text: string;
};

const ContactFeedback = ({ firstname, text }: ContactFeedbackProps) => {
  return (
    <Box>
      <Heading
        as="h1"
        mb="12"
        color="#000"
        fontSize="34px"
        lineHeight="1.3"
        fontWeight="bold"
      >
        Hi {firstname}
      </Heading>
      <Text color="#000" fontSize="18px">
        {text}
      </Text>
    </Box>
  );
};

export default ContactFeedback;
