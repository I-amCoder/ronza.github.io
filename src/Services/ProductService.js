import axios from "axios";
import { config } from "../utils/config";

export const getCategories = async () => {
  try {
    const response = await axios.get(`${config.url.API_URL}/get-categories`);
    return response.data;
  } catch (error) {
    console.error("Error while fetching user:", error);
    throw error;
  }
};

export const getProducts = async (category, page = 1) => {
  try {
    const response = await axios.get(
      `${config.url.API_URL}/get-products/${category}?page=${page}`
    );
    return response.data;
  } catch (error) {
    console(error);
  }
};

// Search Service
export const searchProducts = async (query, page = 1) => {
  try {
    const response = await axios.get(
      `${config.url.API_URL}/search-products/search?q=${query}&page=${page}`
    );
    return response.data;
  } catch (error) {
    console(error);
  }
};

export const showProduct = async (id) => {
  try {
    const response = await axios.get(`${config.url.API_URL}/product/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCategory = async (slug) => {
  try {
    const response = await axios.get(`${config.url.API_URL}/category/${slug}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getCategories,
  getProducts,
  searchProducts,
  showProduct,
  getCategory,
};
