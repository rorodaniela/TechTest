import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px 37px",
    [theme.breakpoints.only("xs")]: {
      padding: "9px 20px",
    },
  },
  name: {
    color: "#F1584F",
  },
}));

export default useStyles