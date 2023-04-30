// mui material
import { Button } from "@mui/material";

const RemoveBtn = ({ index, remove, length }) => {
  return (
    <Button
      variant="contained"
      type="button"
      onClick={() => length !== 1 && remove(index)}
      disableElevation
      disabled={length === 1}
      sx={{
        width: "289px",
        "&:hover": {
          backgroundColor: "crimson",
        },
        backgroundColor: "crimson",
        margin: "50px 0",
        padding: "12px 0",
        letterSpacing: "1px",
      }}>
      გამოცდილების წაშლა
    </Button>
  );
};

export default RemoveBtn;
