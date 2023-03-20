import { Button } from "@mui/material";
import React from "react";

const NextBtn = ({}) => {
  return (
    <Button
      type="submit"
      variant="contained"
      disableElevation
      sx={{
        backgroundColor: "#6B40E3",
        width: "150px",
        height: "45px",
        position: "absolute",
        right: 0,
        marginTop: "160px",
      }}>
      შემდეგი
    </Button>
  );
};

export default NextBtn;
