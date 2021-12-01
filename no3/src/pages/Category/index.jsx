import { useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import { Card } from "../../components";
import { Grid } from "@material-ui/core";
import { useNavigate } from "react-router";
import { homepageActions } from "../../controllers/actions/homepage.action";

function CategoryPage() {
  const dispatch = useDispatch()
  const classes = useStyles()
  const navigate = useNavigate();

  const { categories } = useSelector(
    (state) => state.homepage
  );
  
  useEffect(() => {
    dispatch(homepageActions.getCategories());
  }, [dispatch]);

  const goToProducts = (id) => {
    navigate(`/products/${id}`)
  }


  return (
    <Grid container spacing={5} className={classes.root}>
      {
        categories?.map(item => (
          <Grid key={item?.id} item xs={12} sm={4} md={4} lg={4} xl={4}>
            <Card onPress={() => goToProducts(item?.id)} name={item?.category} img_path={item?.img_path} />
          </Grid>
        ))
      }
    </Grid>
  );
}

export default CategoryPage;
