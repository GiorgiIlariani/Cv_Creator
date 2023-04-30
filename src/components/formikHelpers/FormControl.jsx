
// TextFields
import InputComponent from "./textFields/Input";
import TextareaComponent from "./textFields/Textarea";
import DatePickerComponent from "./textFields/DatePickerComponent";
import SelectComponent from "./textFields/SelectComponent";

const FormControl = (props) => {
  const { control, ...otherProps } = props;

  if (control === "input") {
    return <InputComponent {...otherProps} />;
  }

  if (control === "textarea") {
    return <TextareaComponent {...otherProps} />;
  }

  if (control === "date") {
    return <DatePickerComponent {...otherProps} />;
  }

  if (control === "select") {
    return <SelectComponent {...otherProps} />;
  }
};

export default FormControl;
