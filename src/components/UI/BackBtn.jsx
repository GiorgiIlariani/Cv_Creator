import { Button } from "@mui/material";
import React from "react";

const BackBtn = () => {
  return (
    <Button
      type="button"
      variant="contained"
      disableElevation
      sx={{
        backgroundColor: "#6B40E3",
        width: "150px",
        height: "45px",
        margin: "100px 0",
      }}>
      უკან
    </Button>
  );
};

export default BackBtn;
