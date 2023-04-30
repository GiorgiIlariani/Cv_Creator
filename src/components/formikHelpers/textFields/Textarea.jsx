import React from "react";

// mui material
import { Textarea } from "@mui/joy";

// formik
import { useField } from "formik";

const TextareaComponent = (props) => {
  const { label, name, placeholder, minRows } = props;
  const [field] = useField(name);

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
      />
    </>
  );
};

export default TextareaComponent;
