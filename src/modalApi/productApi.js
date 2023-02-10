import axiosClient from "./axiosClient";

const productApi = {
  getAllProduct: () => {
    const url = "product/get_all";
    return axiosClient.get(url);
  },
};
export default productApi;
