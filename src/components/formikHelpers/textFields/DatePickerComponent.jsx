import React from "react";

// formik
import { useField } from "formik";

const DatePickerComponent = (props) => {
  const { name, label, setFieldValue } = props;
  const [field, meta] = useField(name);

  let hasError = meta.touched && meta.error !== undefined;

  return (
    <React.Fragment>
      <label htmlFor={name} style={{ fontWeight: "600" }}>
        {label}
      </label>
      <input
        className={`${
          hasError
            ? "input-error"
            : !meta.error && field.value !== ""
            ? "input-success"
            : ""
        }`}
        type="date"
        name={name}
        id={name}
        {...field}
        onChange={(e) => {
          setFieldValue(name, e.target.value);
        }}
        style={{
          width: "100%",
          padding: "16px 20px",
          borderRadius: "4px",
          fontSize: "18px",
          background: "transparent",
          marginTop: "8px",
        }}
      />
    </React.Fragment>
  );
};

export default DatePickerComponent;
