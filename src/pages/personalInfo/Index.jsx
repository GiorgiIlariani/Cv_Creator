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
    console.log(values);
    navigate("/experience", { replace: true });
  };

  return (
    <Layout>
      <div className="left-side">
        <Header page="1/3" title="პირადი ინფო" />
        <Formik
          initialValues={personalInitialValues}
          validationSchema={personalValidationSchema}
          onSubmit={onSubmit}>
          {({ values, touched, setFieldValue, setValues }) => {
            return (
              <MyForm
                values={values}
                touched={touched}
                setFieldValue={setFieldValue}
                setFormValues={setFormValues}
                setValues={setValues}
              />
            );
          }}
        </Formik>
      </div>
      <Resume
        personalInfo={formValues}
        experiences={
          JSON.parse(localStorage.getItem("experiences"))?.experiences
        }
        educations={JSON.parse(localStorage.getItem("educations"))?.educations}
      />
    </Layout>
  );
};

export default PersonalInfo;
