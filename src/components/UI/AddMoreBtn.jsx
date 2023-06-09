// mui material
import { Button } from "@mui/material";

const AddMoreBtn = ({ dirty, isValid, push, formObj }) => {
  return (
    <Button
      variant="contained"
      type="button"
      onClick={() => dirty && isValid && push(formObj)}
      disableElevation
      sx={{
        width: "289px",
        "&:hover": {
          backgroundColor: "#62A1EB", // remove hover effect color
        },
        backgroundColor: "#62A1EB",
        margin: "50px 0",
        padding: "12px 0",
        letterSpacing: "1px",
      }}>
      ახალი გამოცდილების დამატება
    </Button>
  );
};

export default AddMoreBtn;
