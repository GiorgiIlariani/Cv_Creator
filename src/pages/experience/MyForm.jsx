import React, { useEffect } from "react";

// mui
import { Button, Grid } from "@mui/material";

// formik
import { FieldArray, Form } from "formik";

import FormControl from "../../components/formikHelpers/FormControl";
import BackBtn from "../../components/UI/BackBtn";
import NextBtn from "../../components/UI/NextBtn";
import { Link } from "react-router-dom";

const MyForm = ({
  values,
  setFormValues,
  dirty,
  isValid,
  setValues,
  setFieldValue,
}) => {
  useEffect(() => {
    const storedValues = JSON.parse(localStorage.getItem("experiences"));
    if (storedValues) {
      setValues(storedValues);
    }
  }, []);

  useEffect(() => {
    setFormValues(values);
    localStorage.setItem("experiences", JSON.stringify(values));
  }, [values]);

  let formObj = {
    position: "",
    employer: "",
    start_date: "",
    due_date: "",
    description: "",
  };

  return (
    <Form autoComplete="off" style={{ position: "relative" }}>
      <Grid container paddingTop="70px">
        <FieldArray name="experiences">
          {({ remove, push }) => (
            <React.Fragment>
              {values.experiences.map((value, index) => {
                return (
                  <Grid container spacing={5} key={index}>
                    <Grid item xs={12}>
                      <FormControl
                        name={`experiences[${index}].position`}
                        control="input"
                        label="თანამდებობა"
                        placeholder="დეველოპერი, დიზაინერ, ა.შ"
                        below_text="მინიმუმ ორი სიმბოლო"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl
                        name={`experiences[${index}].employer`}
                        control="input"
                        label="დამსაქმებელი"
                        placeholder="დამსაქმებელი"
                        below_text="მინიმუმ ორი სიმბოლო"
                      />
                    </Grid>
                    {/* date pickers */}
                    <Grid item xs={6}>
                      <FormControl
                        name={`experiences[${index}].start_date`}
                        control="date"
                        setFieldValue={setFieldValue}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl
                        name={`experiences[${index}].due_date`}
                        control="date"
                        setFieldValue={setFieldValue}
                      />
                    </Grid>
                    {/* textarea */}
                    <Grid
                      item
                      xs={12}
                      borderBottom="1px solid #C1C1C1"
                      paddingBottom="50px">
                      <FormControl
                        control="textarea"
                        name={`experiences[${index}].description`}
                        label="აღწერა"
                        placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                        minRows={6}
                      />
                    </Grid>

                    <Grid item>
                      <Button
                        type="button"
                        onClick={() => dirty && isValid && push(formObj)}
                        sx={{
                          width: "289px",
                          color: "#FFFFFF",
                          backgroundColor: "#62A1EB",
                          margin: "50px 0",
                          padding: "12px 0",
                        }}>
                        ახალი გამოცდილების დამატება
                      </Button>
                    </Grid>
                  </Grid>
                );
              })}
            </React.Fragment>
          )}
        </FieldArray>
      </Grid>
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="space-between"
        alignItems="center">
        <Link to="/personalInfo">
          <BackBtn />
        </Link>
        <NextBtn />
      </Grid>
    </Form>
  );
};

export default MyForm;
