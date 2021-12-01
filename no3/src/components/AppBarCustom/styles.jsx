import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  appbar: {
    height: "94px",
    backgroundColor: "#F1584F",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingInline: "30px",
  },
  logo: {
    width: "50px"
  }
}));

export default useStyles