import React, { useEffect } from "react";
// formik
import { Field, Form } from "formik";

// mui components
import { Button, Grid } from "@mui/material";
import FormControl from "../../components/formikHelpers/FormControl";
import NextBtn from "../../components/UI/NextBtn";

const MyForm = ({
  values,
  setFormValues,
  touched,
  setFieldValue,
  setValues,
}) => {
  useEffect(() => {
    const storedValues = JSON.parse(localStorage.getItem("personalValues"));
    if (storedValues) {
      setValues(storedValues);
    }
  }, []);

  useEffect(() => {
    setFormValues(values);
    localStorage.setItem("personalValues", JSON.stringify(values));
  }, [values]);

  return (
    <Form autoComplete="off" style={{ position: "relative" }}>
      <Grid container spacing={5} paddingTop="70px">
        <Grid item xs={6}>
          <FormControl
            control="input"
            name="name"
            label="სახელი"
            placeholder="ანზორ"
            below_text="მინიმუმ ორი სიმბოლო, ქართული ასოები"
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl
            control="input"
            name="surname"
            label="გვარი"
            placeholder="მუმლაძე"
            below_text="მინიმუმ ორი სიმბოლო, ქართული ასოები"
          />
        </Grid>
        {/* image */}
        <Grid
          item
          xs={6}
          display="flex"
          alignItems="center"
          justifyContent="space-between">
          <label
            className={`${
              touched.image && values.image === "" ? "error-text" : undefined
            }`}>
            პირადი ფოტოს ატვირთვა
          </label>
          <Button variant="contained" component="label">
            ატვირთვა
            <input
              hidden
              accept="image/*"
              multiple
              type="file"
              name="image"
              value={undefined}
              onChange={(e) => {
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                  setFieldValue("image", reader.result);
                };
              }}
            />
          </Button>
        </Grid>
        <Grid item xs={12}>
          <FormControl
            control="textarea"
            name="about_me"
            label="ჩემ შესახებ(არასავალდებულო)"
            placeholder="ზოგადი ინფო შენს შესახებ"
            minRows={5}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl
            control="input"
            name="email"
            label="ელ.ფოსტა"
            placeholder="giorgi@redberry.ge"
            below_text="უნდა მთავრდებოდეს @redberry.ge-ით"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl
            control="input"
            name="phone_number"
            label="მობილურის ნომერი"
            placeholder="+995 598 91 14 52"
            below_text="უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს"
          />
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="flex-end">
        <NextBtn />
      </Grid>
    </Form>
  );
};

export default MyForm;
