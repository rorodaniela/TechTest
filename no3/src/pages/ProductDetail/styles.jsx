import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 37px",
    [theme.breakpoints.only("xs")]: {
      padding: "9px 20px",
    },
  },
  boxCard: {
    width: "50%",
  },
  boxDesc: {
    width: "70%",
  },
  name: {
    color: "#F1584F",
    fontSize: "20px",
    fontWeight: "600",
    marginTop: "10px",
    marginBottom: "20px"
  },
  desc: {
    color: "#F1584F",
    fontWeight: "400",
  },
}));

export default useStyles