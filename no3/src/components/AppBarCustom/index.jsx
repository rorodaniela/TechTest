import { AppBar } from "@material-ui/core";
import useStyles from "./styles";
import logo from "../../assets/images/k.JPG"
export default function AppBarCustom() {
  const classes = useStyles();

  return (
    <AppBar
      position={"sticky"}
      className={classes.appbar}
    >
      <img className={classes.logo} src={logo} alt="logo"/>
    </AppBar>
  );
}
