import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    border: "5px solid black",
  },
  name: {
    color: "#F1584F",
    fontWeight: "600"
  },
}));

export default useStyles