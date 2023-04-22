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

const SelectComponent = ({ setFieldValue, name, value }) => {
  const [selectValues, setSelectValues] = useState([]);

  const [field, meta] = useField(name);

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
    <FormControl fullWidth error={meta.touched && value === ""}>
      <InputLabel id="multiple-quality">აირჩიეთ ხარისხი</InputLabel>
      <Select
        {...field}
        labelId="multiple-quality"
        id="multiple-quality"
        defaultValue=""
        value={value}
        onChange={(e) => {
          setFieldValue(name, e.target.value);
        }}
        input={<OutlinedInput label="აირჩიეთ ხარისხი" />}>
        {selectValues.map((eachValue) => (
          <MenuItem key={eachValue.id} value={eachValue.title}>
            {eachValue.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectComponent;
