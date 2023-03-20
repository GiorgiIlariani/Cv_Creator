import React, { useEffect, useState } from "react";
import { Formik } from "formik";

// helper components
import Header from "../../components/header";
import Layout from "../../components/layout";
import Resume from "../cv/Index";
import { personalInitialValues } from "../../components/formikHelpers/initialValues";
import { personalValidationSchema } from "../../components/formikHelpers/validationSchema";
// navigation
import { useNavigate } from "react-router-dom";

//  my form
import MyForm from "./MyForm";

const PersonalInfo = () => {
  const [formValues, setFormValues] = useState({});

  // for navigate
  const navigate = useNavigate();

  const onSubmit = (values, formikHelpers) => {
    navigate("/experience", { replace: true });
    formikHelpers.resetForm();
  };

  return (
    <Layout>
      <div className="left-side">
        <Header page="1/3" title="პირადი ინფო" />
        <Formik
          initialValues={personalInitialValues}
          validationSchema={personalValidationSchema}
          onSubmit={onSubmit}>
          {({ values, touched, setFieldValue }) => {
            return (
              <MyForm
                values={values}
                touched={touched}
                setFieldValue={setFieldValue}
                setFormValues={setFormValues}
              />
            );
          }}
        </Formik>
      </div>
      <Resume formValues={formValues} />
    </Layout>
  );
};

export default PersonalInfo;
