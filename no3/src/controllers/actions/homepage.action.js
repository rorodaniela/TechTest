import {
  homepageConstants,
} from "../constants";
import { homepageService } from "../services";

export const homepageActions = {
  getCategories,
  getProducts,
  getProductDetail,
};

function getCategories() {
  return async (dispatch) => {
    dispatch(request())
    const res = await homepageService.getCategories();

    if (res?.status === 200) {
      dispatch(success(res?.data))
    } else {
      dispatch(failure(res?.status))
    }

  }

  function request() {
    return { type: homepageConstants.GETCATEGORIES_REQUEST,};
  }
  function success(payload) {
    return { type: homepageConstants.GETCATEGORIES_SUCCESS, payload };
  }
  function failure(error) {
    return { type: homepageConstants.GETCATEGORIES_FAILURE, error };
  }
}

function getProducts(id) {
  return async (dispatch) => {
    dispatch(request());
    const res = await homepageService.getProducts(id);

    if (res?.status === 200) {
      dispatch(success(res?.data));
    } else {
      dispatch(failure(res?.status));
    }
  };

  function request() {
    return { type: homepageConstants.GETPRODUCTS_REQUEST };
  }
  function success(payload) {
    return { type: homepageConstants.GETPRODUCTS_SUCCESS, payload };
  }
  function failure(error) {
    return { type: homepageConstants.GETPRODUCTS_FAILURE, error };
  }
}

function getProductDetail(id) {
  return async (dispatch) => {
    dispatch(request());
    const res = await homepageService.getProductDetail(id);

    if (res?.status === 200) {
      dispatch(success(res?.data));
    } else {
      dispatch(failure(res?.status));
    }
  };

  function request() {
    return { type: homepageConstants.GETPRODUCT_DETAIL_REQUEST };
  }
  function success(payload) {
    return { type: homepageConstants.GETPRODUCT_DETAIL_SUCCESS, payload };
  }
  function failure(error) {
    return { type: homepageConstants.GETPRODUCT_DETAIL_FAILURE, error };
  }
}
