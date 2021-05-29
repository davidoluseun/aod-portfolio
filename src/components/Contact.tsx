import { Box, Text, Grid, Heading, Button } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import swal from "@sweetalert/with-react";
import CustomField from "./common/CustomField";
import ContactFeedback from "./common/ContactFeedback";
import http from "../services/httpService";
import { schema } from "../utils/validationSchema";

const Contact = () => {
  return (
    <Box as="section" py="14" id="contact">
      <Box mb="12" textAlign="center">
        <Heading fontSize="40px" lineHeight="1.3">
          Contact
        </Heading>
        <Text maxW="490px" mx="auto" pt="2">
          Do you have a project you want me to work on? Do you want me to be
          part of your team? Shoot at me, let’s build great things together.
        </Text>
      </Box>

      <Formik
        initialValues={{
          name: "",
          email: "",
          subject: "",
          phone: "",
          message: "",
        }}
        validationSchema={schema}
        onSubmit={async (formData, { setSubmitting, resetForm }) => {
          setSubmitting(true);

          let firstname: string | undefined = formData.name;

          if (firstname.indexOf(" ") >= 0) {
            firstname = firstname.split(" ").shift();
          }

          try {
            const { data } = await http.post("/mail", formData);

            if (data.message === "INVALID") {
              swal({
                icon: "warning",
                button: "Close",
                content: (
                  <ContactFeedback
                    firstname={firstname}
                    text="Your name, valid email address and message are required"
                  />
                ),
              });
            }

            if (data.message === "FAIL") {
              swal({
                icon: "error",
                button: "Close",
                content: (
                  <ContactFeedback
                    firstname={firstname}
                    text="It seems my mail server is down, please try again"
                  />
                ),
              });
            }

            if (data.message === "SUCCESS") {
              swal({
                icon: "success",
                button: "Close",
                content: (
                  <ContactFeedback
                    firstname={firstname}
                    text="Thanks for getting in touch"
                  />
                ),
              });
            }
          } catch (error) {
            swal({
              icon: "error",
              button: "Close",
              content: (
                <Text color="#000" fontSize="18px">
                  An unexpected error occurred.
                </Text>
              ),
            });
          }

          setSubmitting(false);
          resetForm();
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form style={{ maxWidth: "750px", margin: "0 auto" }}>
            <Grid
              templateColumns={{ sm: "repeat(2, 1fr)" }}
              gridColumnGap={{ sm: "4" }}
            >
              <CustomField
                name="name"
                type="text"
                label="Your Name (required)"
                errors={errors}
                touched={touched}
              />
              <CustomField
                name="email"
                type="email"
                label="Your E-mail (required)"
                errors={errors}
                touched={touched}
              />
            </Grid>

            <Grid
              templateColumns={{ sm: "repeat(2, 1fr)" }}
              gridColumnGap={{ sm: "4" }}
            >
              <CustomField
                name="subject"
                type="text"
                label="Subject"
                errors={errors}
                touched={touched}
              />
              <CustomField
                name="phone"
                type="tel"
                label="Your Phone Number"
                errors={errors}
                touched={touched}
              />
            </Grid>

            <CustomField
              name="message"
              label="Your Message (required)"
              errors={errors}
              touched={touched}
              isTextarea={true}
            />

            <Button
              w="100px"
              bg="primary"
              color="#fff"
              type="submit"
              fontWeight="semibold"
              border="1px solid"
              borderColor="primary"
              isLoading={isSubmitting}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Contact;
