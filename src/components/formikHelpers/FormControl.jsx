import React from "react";
import InputComponent from "./textFields/Input";
import TextareaComponent from "./textFields/Textarea";

const FormControl = (props) => {
  const { control, ...otherProps } = props;

  if (control === "input") {
    return <InputComponent {...otherProps} />;
  }

  if (control === "textarea") {
    return <TextareaComponent {...otherProps} />;
  }
};

export default FormControl;
