import React from "react";

// mui material
import { Textarea } from "@mui/joy";

// formik
import { useField } from "formik";

const TextareaComponent = (props) => {
  const { label, name, placeholder, minRows } = props;
  const [field, meta] = useField(name);

  const hasError = meta.error && meta.touched && meta;

  return (
    <>
      <label
        htmlFor={name}
        style={{
          fontWeight: "600",
          color: hasError ? "crimson" : "",
        }}>
        {label}
      </label>
      <Textarea
        minRows={minRows}
        name={name}
        {...field}
        placeholder={placeholder}
        sx={{
          marginTop: "10px",
        }}
        error={hasError}
      />
    </>
  );
};

export default TextareaComponent;
