import React from "react";

// formik
import { ErrorMessage, useField } from "formik";

// mui material
import { TextField } from "@mui/material";

const InputComponent = (props) => {
  const { label, name, placeholder, below_text } = props;

  const [field, meta] = useField(name);

  const configTextField = {
    ...field,
    label,
    name,
    id: name,
    placeholder,
    fullWidth: true,
    variant: "outlined",
  };

  let hasError = meta && meta.touched && meta.error;

  if (hasError) {
    configTextField.error = true;
  }

  return (
    <>
      <TextField
        {...configTextField}
        InputProps={{
          endAdornment:
            !meta.error && field.value !== "" ? (
              <img src="./assets/images/success.png" alt="success" />
            ) : hasError ? (
              <img src="./assets/images/danger.png" alt="danger" />
            ) : (
              ""
            ),
        }}
        sx={{
          "& input:valid:focus": {
            borderColor: !meta.error && field.value !== "" ? "#98E37E" : "",
          },
          "& input:valid ~ fieldset": {
            borderColor: !meta.error && field.value !== "" ? "#98E37E" : "",
          },
        }}
      />

      {hasError ? (
        <ErrorMessage name={name} component="p" className="error-text margin" />
      ) : (
        <p style={{ marginTop: "5px" }}>{below_text}</p>
      )}
    </>
  );
};

export default InputComponent;
