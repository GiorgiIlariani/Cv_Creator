import React, { useEffect, useState } from "react";

// formik
import { Formik } from "formik";

//helper functions
import { educationInitialValues } from "../../components/formikHelpers/initialValues";
import { educationValidationSchema } from "../../components/formikHelpers/validationSchema";

// header and layout
import Header from "../../components/header";
import Layout from "../../components/layout";

// form
import MyForm from "./MyForm";

// main resume
import Resume from "../cv/Index";

// for navigating
import { useNavigate } from "react-router-dom";

const Education = () => {
  const [formValues, setFormValues] = useState({});
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate("/finishedResume", { replace: true });
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
