import React from "react";
import classes from "./styles.module.css";

const SuccessMessage = () => {
  return (
    <div className={classes.successMsg}>
      <img src="./assets/images/remove.png" alt="remove" />
      <p>რეზიუმე წარმატებით გაიგზავნა 🎉</p>
    </div>
  );
};

export default SuccessMessage;
