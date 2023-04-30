import React, { useState } from "react";

//import styles
import classes from "./styles.module.css";

const SuccessMessage = () => {
  const [isShownSuccessMsg, setIsShownSuccessMsg] = useState(true);

  return (
    isShownSuccessMsg && (
      <div className={classes.successMsg}>
        <img
          src="./assets/images/remove.png"
          alt="remove"
          onClick={() => setIsShownSuccessMsg(false)}
        />
        <p>რეზიუმე წარმატებით გაიგზავნა 🎉</p>
      </div>
    )
  );
};

export default SuccessMessage;
