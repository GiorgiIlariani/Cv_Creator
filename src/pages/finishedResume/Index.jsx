import React, { useEffect, useState } from "react";

// ain resume
import Resume from "../cv/Index";

// mui material
import { Box, CircularProgress, Grid } from "@mui/material";

// success msg
import SuccessMessage from "./SuccessMessage";

// axios
import axios from "axios";

const FinishedResume = () => {
  const [responseData, setResponseData] = useState(null);
  const [validatedImage, setValidatedImage] = useState("");
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Retrieving the file from localStorage
    const { image } = JSON.parse(localStorage.getItem("personalValues"));
    const blob = dataUrlToBlob(image);
    const file = new File([blob], "myFileName", { type: "image/png" });
    setValidatedImage(file);
    function dataUrlToBlob(image) {
      const parts = image.split(";base64,");
      const contentType = parts[0].split(":")[1];
      const byteCharacters = atob(parts[1]);
      const byteArrays = [];
      for (let i = 0; i < byteCharacters.length; i++) {
        byteArrays.push(byteCharacters.charCodeAt(i));
      }
      const byteArray = new Uint8Array(byteArrays);
      return new Blob([byteArray], { type: contentType });
    }
  }, []);

  const postData = (data) => {
    axios({
      method: "post",
      url: "https://resume.redberryinternship.ge/api/cvs",
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
      data: data,
    })
      .then(function (response) {
        setIsLoading(false);
        setStatus(response.status);
        setResponseData(response.data);
      })
      .catch(function (error) {
        setIsLoading(false);
        console.log(error.response.data);
      });
  };

  useEffect(() => {
    const savedPersonalInfo = JSON.parse(
      localStorage.getItem("personalValues")
    );
    savedPersonalInfo.image = validatedImage;
    const savedExperience = JSON.parse(localStorage.getItem("experiences"));
    const savedEducation = JSON.parse(localStorage.getItem("educations"));
    const { degree, ...modifiedSavedEducation } = savedEducation;

    const data = Object.assign(
      {},
      savedPersonalInfo,
      savedExperience,
      modifiedSavedEducation
    );

    if (validatedImage) postData(data);
  }, [validatedImage]);

  const personalInfo = {
    name: responseData?.name,
    surname: responseData?.surname,
    email: responseData?.email,
    image: `https://resume.redberryinternship.ge${responseData?.image}`,
    phone_number: responseData?.phone_number,
    about_me: responseData?.about_me,
  };

  if (isLoading) {
    return (
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <CircularProgress size="10vh" />
      </Box>
    );
  }

  return (
    <>
      {status === 201 ? (
        <Grid
          container
          display="flex"
          alignItems="center"
          justifyContent="center"
          padding="60px 0 120px 0">
          <Grid item border="0.8px solid">
            <Resume
              educations={responseData.educations}
              experiences={responseData.experiences}
              personalInfo={personalInfo}
              status={status}
            />
          </Grid>
          <SuccessMessage />
        </Grid>
      ) : (
        ""
      )}
    </>
  );
};

export default FinishedResume;
