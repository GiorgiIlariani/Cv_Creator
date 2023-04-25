import * as Yup from "yup";

const patterns = {
  name: /^[ა-ჰ]{2,}$/,
  surname: /^[ა-ჰ]{2,}$/,
  mail: /^[a-zA-Z\d\.-]+@redberry\.ge$/,
  phoneNumber: /^\+9955\d{8}$/,
};

export const personalValidationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(patterns.name, "მინიმუმ ორი სიმბოლო, ქართული ასოები")
    .required("მინიმუმ ორი სიმბოლო, ქართული ასოები"),
  surname: Yup.string()
    .matches(patterns.surname, "მინიმუმ ორი სიმბოლო, ქართული ასოები")
    .required("მინიმუმ ორი სიმბოლო, ქართული ასოები"),
  image: Yup.string().required("გთხოვთ ატვირთოთ თქვენი ფოტო!"),
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
  experiences: Yup.array().of(
    Yup.object().shape({
      position: Yup.string()
        .min(2, "მინიმუმ ორი სიმბოლო")
        .required("მინიმუმ ორი სიმბოლო"),
      employer: Yup.string()
        .min(2, "მინიმუმ ორი სიმბოლო")
        .required("მინიმუმ ორი სიმბოლო"),
      start_date: Yup.date().required(""),
      due_date: Yup.date().required(""),
    })
  ),
});

export const educationValidationSchema = Yup.object().shape({
  educations: Yup.array().of(
    Yup.object().shape({
      institute: Yup.string()
        .min(2, "მინიმუმ ორი სიმბოლო")
        .required("მინიმუმ ორი სიმბოლო"),
      degree: Yup.string().required(""),
      due_date: Yup.date().required(""),
    })
  ),
});
