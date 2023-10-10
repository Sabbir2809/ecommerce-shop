import axios from "axios";

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

// ::::::::: API: Brands and Categories List :::::::::
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

// ::::::::: API: Brands and Categories List :::::::::
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
