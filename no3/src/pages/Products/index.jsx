import { useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import { Card } from "../../components";
import { Grid } from "@material-ui/core";
import { useNavigate } from "react-router";
import { homepageActions } from "../../controllers/actions/homepage.action";
import { useParams } from "react-router-dom";

function Products() {
  const dispatch = useDispatch()
  const classes = useStyles()
  const navigate = useNavigate();
  const { id } = useParams()
  const { products } = useSelector(
    (state) => state.homepage
  );
  
  useEffect(() => {
    console.log("ini params id : >>", id);
    dispatch(homepageActions.getProducts(id));
  }, [dispatch, id]);

  const goToProductDetail = (product_id) => {
    navigate(`/product/${product_id}`)
  }


  return (
    <Grid container spacing={5} className={classes.root}>
      {
        products?.map(item => (
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <Card onPress={() => goToProductDetail(item?.id)} name={item?.name} img_path={item?.img_path} />
          </Grid>
        ))
      }
    </Grid>
  );
}

export default Products;
