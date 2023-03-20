import * as Yup from "yup";

const patterns = {
  name: /^[ა-ჰ]{2,}$/,
  surname: /^[ა-ჰ]{2,}$/,
  mail: /^[a-zA-Z\d\.-]+@redberry\.ge$/,
  phoneNumber: /^\+995\s5\d{2}\s\d{2}\s\d{2}\s\d{2}$/,
};

export const personalValidationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(patterns.name, "მინიმუმ ორი სიმბოლო, ქართული ასოები")
    .required("მინიმუმ ორი სიმბოლო, ქართული ასოები"),
  surname: Yup.string()
    .matches(patterns.surname, "მინიმუმ ორი სიმბოლო, ქართული ასოები")
    .required("მინიმუმ ორი სიმბოლო, ქართული ასოები"),
  image: Yup.string().required("გთხოვთ ატვირთოთ თქვენი ფოტი!"),
  email: Yup.string()
    .matches(patterns.mail, "უნდა მთავრდებოდეს redberry.ge-ით")
    .required("უნდა მთავრდებოდეს @redberry.ge-ით"),
  phone_number: Yup.string()
    .matches(
      patterns.phoneNumber,
      "უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს"
    )
    .required("უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს"),
});


export const experienceValidationSchema = Yup.object().shape({

})



export const educationValidationSchema = Yup.object().shape({});