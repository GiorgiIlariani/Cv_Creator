import React, { useEffect } from "react";

// mui material
import { Grid } from "@mui/material";

// formik
import { FieldArray, Form } from "formik";

// router link
import { Link } from "react-router-dom";

// formik helpers
import FormControl from "../../components/formikHelpers/FormControl";

// buttons
import BackBtn from "../../components/UI/BackBtn";
import NextBtn from "../../components/UI/NextBtn";
import AddMoreBtn from "../../components/UI/AddMoreBtn";
import RemoveBtn from "../../components/UI/RemoveBtn";

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
                    <Grid item container spacing={5} alignItems="end">
                      <Grid item xs={6}>
                        <FormControl
                          control="select"
                          setFieldValue={setFieldValue}
                          name={`educations[${index}].degree`}
                          value={value.degree}
                          id={`educations[${index}].degree_id`}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl
                          name={`educations[${index}].due_date`}
                          control="date"
                          setFieldValue={setFieldValue}
                          label="დამთავრების რიცხვი"
                        />
                      </Grid>
                    </Grid>
                    <Grid item xs={12} paddingBottom="50px">
                      <FormControl
                        control="textarea"
                        name={`educations[${index}].description`}
                        label="აღწერა"
                        placeholder="განათლების აღწერა"
                        minRows={7}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <hr />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center">
                      <Grid item>
                        <AddMoreBtn
                          formObj={formObj}
                          push={push}
                          isValid={isValid}
                          dirty={dirty}
                        />
                      </Grid>
                      <Grid item>
                        <RemoveBtn
                          length={values.educations.length}
                          index={index}
                          remove={remove}
                        />
                      </Grid>
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
