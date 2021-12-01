import { Box } from "@material-ui/core";
import AppBarCustom from "../AppBarCustom";
import useStyles from "./styles";

export default function Layout(props){
  const classes = useStyles()

 return (
   <Box className={classes.root}>
     <AppBarCustom/>
     <>
      {props.children}
     </>
  </Box>
 );
}