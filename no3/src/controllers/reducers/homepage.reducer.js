import {
  homepageConstants,
} from "../constants";

const initialState = {
  loading: false,
  error: "",
  categories: [],
  products: [],
  productDetail: {}
};

export default function homepage(state = initialState, action) {
  switch (action.type) {
    case homepageConstants.GETCATEGORIES_REQUEST:
      return { ...state, loading: true };
    case homepageConstants.GETCATEGORIES_SUCCESS:
      return { ...state, loading: false, categories: action.payload };
    case homepageConstants.GETCATEGORIES_FAILURE:
      return { ...state, loading: false, error: action.error };

    case homepageConstants.GETPRODUCTS_REQUEST:
      return { ...state, loading: true };
    case homepageConstants.GETPRODUCTS_SUCCESS:
      return { ...state, loading: false, products: action.payload };
    case homepageConstants.GETPRODUCTS_FAILURE:
      return { ...state, loading: false, error: action.error };

    case homepageConstants.GETPRODUCT_DETAIL_REQUEST:
      return { ...state, loading: true };
    case homepageConstants.GETPRODUCT_DETAIL_SUCCESS:
      return { ...state, loading: false, productDetail: action.payload };
    case homepageConstants.GETPRODUCT_DETAIL_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}