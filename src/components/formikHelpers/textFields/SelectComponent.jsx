import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { useField } from "formik";
const url = "https://resume.redberryinternship.ge/api/degrees";

const SelectComponent = ({ setFieldValue, name, value, id }) => {
  const [selectValues, setSelectValues] = useState([]);

  const [field, meta] = useField(name);

  const handleChange = (e) => {
    const selectValue = e.target.value;
    const selectOptionId = selectValues.find(
      (item) => item.title === selectValue
    ).id;
    setFieldValue(name, e.target.value);
    setFieldValue(id, selectOptionId);
  };

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setSelectValues(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <FormControl
      fullWidth
      error={meta.touched && value === ""}
      sx={{
        "& input:valid:focus": {
          borderColor: meta.touched && !meta.error ? "#98E37E" : "",
        },
        "& input:valid ~ fieldset": {
          borderColor: meta.touched && !meta.error ? "#98E37E" : "",
        },
      }}>
      <InputLabel id="multiple-quality">აირჩიეთ ხარისხი</InputLabel>
      <Select
        {...field}
        labelId="multiple-quality"
        id="multiple-quality"
        defaultValue=""
        value={value}
        onChange={handleChange}
        input={<OutlinedInput label="აირჩიეთ ხარისხი" />}>
        {selectValues.map((eachValue) => {
          return (
            <MenuItem key={eachValue.id} value={eachValue.title}>
              {eachValue.title}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectComponent;
