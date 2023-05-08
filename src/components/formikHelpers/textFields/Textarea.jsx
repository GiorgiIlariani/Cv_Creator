import React from "react";

// mui material
import { Textarea } from "@mui/joy";

// formik
import { useField } from "formik";

const TextareaComponent = (props) => {
  const { label, name, placeholder, minRows } = props;
  const [field, meta] = useField(name);

  return (
    <>
      <label htmlFor={name} style={{ fontWeight: "600" }}>
        {label}
      </label>
      <Textarea
        minRows={minRows}
        name={name}
        {...field}
        placeholder={placeholder}
        sx={{ marginTop: "10px" }}
        error={meta.error && meta.touched && meta}
      />
    </>
  );
};

export default TextareaComponent;
