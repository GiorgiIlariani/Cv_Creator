import React, { useEffect } from "react";

// formik
import { Formik } from "formik";

// helper components
import Header from "../../components/header";
import Layout from "../../components/layout";
import MyForm from "./MyForm";
import { experienceValidationSchema } from "../../components/formikHelpers/validationSchema";
import { experienceInitialValues } from "../../components/formikHelpers/initialValues";

const Experience = () => {
  const onSubmit = (values, formikHelpers) => {
    console.log("values", values);
  };

  return (
    <Layout>
      <div className="left-side">
        <Header page="2/3" title="გამოცდილება" />
        <Formik
          initialValues={experienceInitialValues}
          onSubmit={onSubmit}
          validationSchema={experienceValidationSchema}>
          {() => {
            return <MyForm />;
          }}
        </Formik>
      </div>
    </Layout>
  );
};

export default Experience;
