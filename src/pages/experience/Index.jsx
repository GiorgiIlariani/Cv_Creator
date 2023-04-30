import React, { useEffect, useState } from "react";

// formik
import { Formik } from "formik";

// navigation
import { useNavigate } from "react-router-dom";

// header and layout components
import Header from "../../components/header";
import Layout from "../../components/layout";

// form
import MyForm from "./MyForm";

//helpers
import { experienceValidationSchema } from "../../components/formikHelpers/validationSchema";
import { experienceInitialValues } from "../../components/formikHelpers/initialValues";

// main resume
import Resume from "../cv/Index";

const Experience = () => {
  const [formValues, setFormValues] = useState({});

  const navigate = useNavigate();

  const onSubmit = () => {
    navigate("/education", { replace: true });
  };

  return (
    <Layout>
      <div className="left-side">
        <Header page="2/3" title="გამოცდილება" />
        <Formik
          initialValues={experienceInitialValues}
          onSubmit={onSubmit}
          validationSchema={experienceValidationSchema}>
          {(fields) => {
            const { values, setValues, dirty, isValid, setFieldValue } = fields;
            return (
              <MyForm
                values={values}
                setFormValues={setFormValues}
                setValues={setValues}
                dirty={dirty}
                isValid={isValid}
                setFieldValue={setFieldValue}
              />
            );
          }}
        </Formik>
      </div>
      <Resume
        personalInfo={JSON.parse(localStorage.getItem("personalValues"))}
        experiences={formValues.experiences}
        educations={JSON.parse(localStorage.getItem("educations"))?.educations}
      />
    </Layout>
  );
};

export default Experience;
