import axios from "axios";
import Unauthorized from "../utility/Unauthorized";

// BASE URL
const BASE_URL = "";

// ::::::::: API: Brands and Categories List :::::::::
export const GET_LIST_API_REQUEST = async (endpoint) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/api/v1/${endpoint}`);
    if (data.status) {
      return data.data;
    }
  } catch (error) {
    return [];
  }
};

// ::::::::: API: Product List By Remark :::::::::
export const PRODUCT_LIST_BY_REMARK_API_REQUEST = async (remark) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/api/v1/list-by-remark/${remark}`);
    if (data.status) {
      return data.data;
    }
  } catch (error) {
    return [];
  }
};

// ::::::::: API: Product Details :::::::::
export const PRODUCT_DETAILS_API_REQUEST = async (id) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/api/v1/product-details/${id}`);
    if (data.status) {
      return data.data;
    }
  } catch (error) {
    return [];
  }
};

// ::::::::: API: Create Wish List :::::::::
export const CREATE_WISH_LIST_API_REQUEST = async (id) => {
  try {
    const reqBody = { product_id: id };
    const data = await axios.post(`${BASE_URL}/api/v1/create-wish-item`, reqBody);

    if (data.status) {
      return data.data;
    }
  } catch (error) {
    Unauthorized(error.response.status);
  }
};

// ::::::::: API: Create Cart List :::::::::
export const CREATE_CART_LIST_API_REQUEST = async (reqBody) => {
  try {
    const data = await axios.post(`${BASE_URL}/api/v1/create-cart-item`, reqBody);

    if (data.status) {
      return data.data;
    }
  } catch (error) {
    Unauthorized(error.response.status);
  }
};

// ::::::::: API: Login :::::::::
export const USER_LOGIN_API_REQUEST = async (email) => {
  try {
    const data = await axios.get(`${BASE_URL}/api/v1/user-login/${email}`);
    if (data.status) {
      return data.data;
    }
  } catch (error) {
    return false;
  }
};

// ::::::::: API: Verify Login :::::::::
export const USER_LOGIN_VERIFY_API_REQUEST = async (email, otp) => {
  try {
    const data = await axios.get(`${BASE_URL}/api/v1/user-login-verify/${email}/${otp}`);
    if (data.status) {
      return data.data;
    }
  } catch (error) {
    return false;
  }
};

// ::::::::: API: Wish List :::::::::
export const WISH_LIST_API_REQUEST = async () => {
  try {
    const data = await axios.get(`${BASE_URL}/api/v1/wish-list`);
    if (data.status) {
      return data.data;
    }
  } catch (error) {
    Unauthorized(error.response.status);
  }
};

// ::::::::: API: Remove Wish List :::::::::
export const REMOVE_WISH_LIST_API_REQUEST = async (id) => {
  try {
    const reqBody = { product_id: id };
    const data = await axios.post(`${BASE_URL}/api/v1/remove-wish-item`, reqBody);
    if (data.status) {
      return data.data;
    }
  } catch (error) {
    Unauthorized(error.response.status);
  }
};

// ::::::::: API: Cart List :::::::::
export const CART_LIST_API_REQUEST = async () => {
  try {
    const data = await axios.get(`${BASE_URL}/api/v1/cart-list`);
    if (data.status) {
      return data.data;
    }
  } catch (error) {
    Unauthorized(error.response.status);
  }
};

// ::::::::: API: Remove Cart List :::::::::
export const REMOVE_CART_LIST_API_REQUEST = async (id) => {
  try {
    const reqBody = { product_id: id };
    const data = await axios.delete(`${BASE_URL}/api/v1/remove-cart-item`, reqBody);
    if (data.status) {
      return data.data;
    }
  } catch (error) {
    Unauthorized(error.response.status);
  }
};
