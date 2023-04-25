import React, { useEffect, useState } from "react";

// formik
import { Formik } from "formik";

//helper functions
import { educationInitialValues } from "../../components/formikHelpers/initialValues";
import { educationValidationSchema } from "../../components/formikHelpers/validationSchema";
import Header from "../../components/header";
import Layout from "../../components/layout";
import MyForm from "./MyForm";
import Resume from "../cv/Index";
import axios from "axios";

const Education = () => {
  const [formValues, setFormValues] = useState({});

  const onSubmit = () => {
    const savedPersonalInfo = JSON.parse(
      localStorage.getItem("personalValues")
    );
    const savedExperience = JSON.parse(localStorage.getItem("experiences"));
    const savedEducation = JSON.parse(localStorage.getItem("educations"));
    const { degree, ...modifiedSavedEducation } = savedEducation;

    const values = Object.assign(
      {},
      savedPersonalInfo,
      savedExperience,
      modifiedSavedEducation
    );

    axios
      .post("https://resume.redberryinternship.ge/api/cvs", values)
      .then((response) => {
        console.log(response);
        // handle the response from the server
      })
      .catch((error) => {
        console.error(error);
        // handle the error
      });
    // navigate("/finishedResume", { replace: true });
  };

  return (
    <Layout>
      <div className="left-side">
        <Header page="3/3" title="განათლება" />
        <Formik
          initialValues={educationInitialValues}
          onSubmit={onSubmit}
          validationSchema={educationValidationSchema}>
          {(fields) => {
            const { values, dirty, isValid, setValues, setFieldValue } = fields;
            return (
              <MyForm
                values={values}
                dirty={dirty}
                isValid={isValid}
                setValues={setValues}
                setFormValues={setFormValues}
                setFieldValue={setFieldValue}
              />
            );
          }}
        </Formik>
      </div>
      <Resume
        personalInfo={JSON.parse(localStorage.getItem("personalValues"))}
        experiences={
          JSON.parse(localStorage.getItem("experiences"))?.experiences
        }
        educations={formValues.educations}
      />
    </Layout>
  );
};

export default Education;
