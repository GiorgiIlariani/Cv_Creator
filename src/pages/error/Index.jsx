// css module
import classes from "./styles.module.css";

export default function Error() {
  return (
    <div className={classes["error-wrapper"]}>
      <p className={classes["error-page"]}>
        404 error page not found the requested url
        <span className={classes["error-url"]}>
          {window.location.pathname}
        </span>{" "}
        was not found
      </p>
    </div>
  );
}
