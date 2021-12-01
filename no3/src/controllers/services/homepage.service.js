import axios from "axios";

const baseUrl = "https://intense-reef-34811.herokuapp.com/";

export const homepageService = {
  getCategories,
  getProducts,
  getProductDetail,
};

async function getCategories() {
  try {
    const requestUrl = `category`;

    const response = await axios
      .get(`${baseUrl}${requestUrl}`)
      .then((res) => {
        console.log("ini response dari list category : >", res);
        
        if (res.status === 200) {
          return {
            data: res?.data,
            status: res?.status
          }
        } else {
          return {
            data: [],
            status: res?.status
          }
        }
      })
    return response;
  } catch (error) {
    return { error }
  }
}

async function getProducts(id) {
  try {
    const requestUrl = `products/${id}`;

    const response = await axios.get(`${baseUrl}${requestUrl}`).then((res) => {
      console.log("ini response dari list product by category : >", res);
      if (res.status === 200) {
        return {
          data: res?.data,
          status: res?.status,
        };
      } else {
        return {
          data: [],
          status: res?.status,
        };
      }
    });
    return response;
  } catch (error) {
    return { error };
  }
}

async function getProductDetail(id) {
  try {
    const requestUrl = `product/${id}`

    const response = await axios.get(`${baseUrl}${requestUrl}`).then((res) => {
      console.log("ini response dari product detail : >", res);

      if (res.status === 200) {
        return {
          data: res?.data,
          status: res?.status,
        };
      } else {
        return {
          data: [],
          status: res?.status,
        };
      }
    });
    return response;
  } catch (error) {
    return { error };
  }
}