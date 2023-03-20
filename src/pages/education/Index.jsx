import React, { useEffect } from "react";

// formik
import { Formik } from "formik";

//helper functions
import { educationInitialValues } from "../../components/formikHelpers/initialValues";
import { educationValidationSchema } from "../../components/formikHelpers/validationSchema";
import Header from "../../components/header";
import Layout from "../../components/layout";
import MyForm from "./MyForm";

const Education = () => {
  const onSubmit = (values, formikHelpers) => {
    console.log("values", values);
  };

  return (
    <Layout>
      <div className="left-side">
        <Header page="3/3" title="განათლება" />
        <Formik
          initialValues={educationInitialValues}
          onSubmit={onSubmit}
          validationSchema={educationValidationSchema}>
          {() => {
            return <MyForm />;
          }}
        </Formik>
      </div>
    </Layout>
  );
};

export default Education;
