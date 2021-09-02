import { Field, FieldAttributes } from "formik";
import { FormControl, FormLabel, Input, useColorMode } from "@chakra-ui/react";
import { VisuallyHidden, FormErrorMessage, Textarea } from "@chakra-ui/react";

type CustomFieldProps = {
  name: string;
  label: string;
  type?: string;
  isTextarea?: boolean;
  errors: any;
  touched: any;
};

const CustomField = ({
  name,
  label,
  type,
  isTextarea,
  errors,
  touched,
}: CustomFieldProps) => {
  const { colorMode } = useColorMode();
  return (
    <Field name={name}>
      {({ field }: FieldAttributes<any>) => (
        <FormControl mb="8" isInvalid={!!errors[name] && touched[name]}>
          <VisuallyHidden>
            <FormLabel>{label}</FormLabel>
          </VisuallyHidden>
          {!isTextarea ? (
            <Input
              {...field}
              type={type}
              bg={colorMode === "dark" ? "dark" : ""}
              focusBorderColor="primary"
              errorBorderColor="error"
              borderColor={colorMode === "light" ? "borderDark" : "borderLight"}
              _hover={{ borderColor: "none" }}
              placeholder={label}
            />
          ) : (
            <Textarea
              {...field}
              name="message"
              bg={colorMode === "dark" ? "dark" : ""}
              focusBorderColor="primary"
              errorBorderColor="error"
              borderColor={colorMode === "light" ? "borderDark" : "borderLight"}
              _hover={{ borderColor: "none" }}
              placeholder="Your Message (required)"
            />
          )}

          <FormErrorMessage fontSize="16px" color="error">
            {errors[name]}
          </FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default CustomField;
