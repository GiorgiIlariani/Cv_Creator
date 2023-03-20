import { useField, useFormikContext, withFormik } from "formik";
import React, { useEffect, useState } from "react";
import { personalInitialValues } from "../../components/formikHelpers/initialValues";
import classes from "./styles.module.css";

function Resume({ formValues }) {
  // uploaded image
  const [uploadeImage, setUploadedImage] = useState(null);

  //get values
  const { name, surname, email, phone_Number, description, image } = formValues;

  const reader = new FileReader();
  if (image) {
    reader.readAsDataURL(image);
  }
  reader.onload = () => {
    setUploadedImage(reader.result);
  };

  return (
    <div className={classes["right-side"]}>
      <div className={classes["personal-info"]}>
        <div>
          <h2>
            {name} {surname}
          </h2>
          {email && (
            <p className={classes.mail}>
              <img src="./assets/images/forEmail.png" alt="email-icon" />
              <span>{email}</span>
            </p>
          )}

          {phone_Number && (
            <p>
              <img src="./assets/images/phone.png" alt="phone-icon" />
              <span>{phone_Number}</span>
            </p>
          )}
          {description && <h4>ჩემ შესახებ</h4>}
          <p>{description}</p>
        </div>
        {uploadeImage !== null ? (
          <img src={uploadeImage} className={classes.photo} alt="person-img" />
        ) : null}
      </div>
    </div>
  );
}

export default Resume;
