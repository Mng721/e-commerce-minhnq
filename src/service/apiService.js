import axios from "axios";

const getAllProduct = () => {
  return axios.get("https://6705e517031fd46a83114bf5.mockapi.io/app");
};

const getProductPaging = (page, limit) => {
  return axios.get(
    `https://6705e517031fd46a83114bf5.mockapi.io/app?page=${page}&limit=${limit}`
  );
};

const searchProduct = (searchParam, page) => {
  return axios.get(
    `https://6705e517031fd46a83114bf5.mockapi.io/app?page=${page}&limit=20&search=${searchParam}`
  );
};

export { getAllProduct, getProductPaging, searchProduct };
