import axios from "axios";

// BASE URL
const BASE_URL = `http://localhost:8000`;

// ::::::::: API: Brands and Categories List :::::::::
export const GET_LIST_API_REQUEST = async (path) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/api/v1/${path}`);
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