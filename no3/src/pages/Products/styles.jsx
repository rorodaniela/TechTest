import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    // width: "100%",
    // overflow: "hidden",
    padding: "20px 37px",
    [theme.breakpoints.only("xs")]: {
      padding: "9px 20px",
    },
  },
}));

export default useStyles