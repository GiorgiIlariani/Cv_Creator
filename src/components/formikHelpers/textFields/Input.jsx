import { TextField } from "@mui/material";
import { ErrorMessage, useField } from "formik";
import React, { useEffect } from "react";

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
        sx={{
          "& input:valid:focus": {
            borderColor: meta.touched && !meta.error ? "#98E37E" : "",
          },
          "& input:valid ~ fieldset": {
            borderColor: meta.touched && !meta.error ? "#98E37E" : "",
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
