import React from "react";
import Resume from "../cv/Index";
import { Grid } from "@mui/material";
import SuccessMessage from "./SuccessMessage";
import { Link } from "react-router-dom";

const FinishedResume = () => {
  return (
    <Grid
      container
      display="flex"
      alignItems="center"
      justifyContent="center"
      padding="60px 0 120px 0">
      <Grid item border="0.8px solid">
        <Resume
          personalInfo={JSON.parse(localStorage.getItem("personalValues"))}
          experiences={
            JSON.parse(localStorage.getItem("experiences")).experiences
          }
          educations={JSON.parse(localStorage.getItem("educations")).educations}
        />
      </Grid>
      <Grid item>
        <SuccessMessage />
      </Grid>
    </Grid>
  );
};

export default FinishedResume;
