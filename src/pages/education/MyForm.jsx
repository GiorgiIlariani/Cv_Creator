import { Button, Grid } from "@mui/material";
import { FieldArray, Form } from "formik";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import FormControl from "../../components/formikHelpers/FormControl";
import BackBtn from "../../components/UI/BackBtn";
import NextBtn from "../../components/UI/NextBtn";

const MyForm = ({
  values,
  dirty,
  isValid,
  setValues,
  setFormValues,
  setFieldValue,
}) => {
  useEffect(() => {
    const storedValues = JSON.parse(localStorage.getItem("educations"));
    if (storedValues) {
      setValues(storedValues);
    }
  }, []);

  useEffect(() => {
    setFormValues(values);
    localStorage.setItem("educations", JSON.stringify(values));
  }, [values]);

  const formObj = {
    institute: "",
    degree: "",
    due_date: "",
    description: "",
  };

  return (
    <Form autoComplete="off" style={{ position: "relative" }}>
      <Grid container paddingTop="70px">
        <FieldArray name="educations">
          {({ push, remove }) => (
            <React.Fragment>
              {values.educations.map((value, index) => {
                return (
                  <Grid container spacing={5} key={index}>
                    <Grid item xs={12}>
                      <FormControl
                        name={`educations[${index}].institute`}
                        control="input"
                        label="სასწავლებელი"
                        placeholder="სასწავლებელი"
                        below_text="მინიმუმ ორი სიმბოლო"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl
                        control="select"
                        setFieldValue={setFieldValue}
                        name={`educations[${index}].degree`}
                        value={value.degree}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl
                        name={`educations[${index}].due_date`}
                        control="date"
                        setFieldValue={setFieldValue}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl
                        control="textarea"
                        name={`educations[${index}].description`}
                        label="აღწერა"
                        placeholder="განათლების აღწერა"
                        minRows={7}
                      />
                    </Grid>
                    <Grid item xs={6}>
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
                        ახალი განათლების დამატება
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
        <Link to="/experience">
          <BackBtn />
        </Link>
        <NextBtn />
      </Grid>
    </Form>
  );
};

export default MyForm;
