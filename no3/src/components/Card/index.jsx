import { Box, ButtonBase, Typography } from "@material-ui/core";
import useStyles from "./styles";
import image from "../../assets/images/work.JPG"

export default function Card({ img_path, name, onPress }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <ButtonBase onClick={onPress}>
        <img
          className={classes.image}
          src={img_path ? img_path : image}
          alt={name}
        />
      </ButtonBase>
      <Typography className={classes.name} align='center'>
        {name}
      </Typography>
    </Box>
  );
}
