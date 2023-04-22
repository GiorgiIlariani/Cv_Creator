import React from "react";
import { Textarea } from "@mui/joy";
import { useField } from "formik";

const TextareaComponent = (props) => {
  const { label, name, placeholder, minRows } = props;
  const [field] = useField(name);

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Textarea
        minRows={minRows}
        name={name}
        {...field}
        placeholder={placeholder}
        sx={{ marginTop: "10px"}}
      />
    </>
  );
};

export default TextareaComponent;
