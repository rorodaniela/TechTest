import { useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import { Card } from "../../components";
import { Box, Typography } from "@material-ui/core";
import { homepageActions } from "../../controllers/actions/homepage.action";
import { useParams } from "react-router-dom"

function ProductDetail() {
  const dispatch = useDispatch()
  const classes = useStyles()
  const { id } = useParams()

  const { productDetail } = useSelector(
    (state) => state.homepage
  );
  
  useEffect(() => {
    dispatch(homepageActions.getProductDetail(id));
  }, [dispatch, id]);

  return (
    <Box className={classes.root}>
      <Box className={classes.boxCard}>
        <Card img_path={productDetail?.img_path} />
      </Box>
      <Typography className={classes.name} align='center'>
        {productDetail?.name}
      </Typography>
      <Box className={classes.boxDesc}>
        <Typography className={classes.desc} align='justify'>
          {productDetail?.description}
        </Typography>
      </Box>
    </Box>
  );
}

export default ProductDetail;
