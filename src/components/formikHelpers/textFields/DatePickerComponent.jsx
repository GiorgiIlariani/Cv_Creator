import React, { useEffect } from "react";
import { useField } from "formik";

const DatePickerComponent = (props) => {
  const { name, label, setFieldValue } = props;
  const [field, meta] = useField(name);

  let hasError = meta.touched && meta.error !== undefined;

  return (
    <React.Fragment>
      <label htmlFor={name}>{label}</label>
      <input
        className={`${
          hasError
            ? "input-error"
            : meta.touched && !meta.error
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
        }}
      />
    </React.Fragment>
  );
};

export default DatePickerComponent;
