import axios from "axios";
import queryString from "query-string";
const PORT = process.env.PORT || 8000;

const axiosClient = axios.create({
  baseURL: `http://localhost:${PORT}/api/v1/`,
  headers: {
    "Content-Type": "application/json",
  },
  // paramsSerializer: (params) => queryString.stringify(params),
});
// axiosClient.interceptors.request.request.use(async (config) => {
//   // Thêm các header hoặc thực hiện bất kỳ xử lý nào khác tại đây
//   return config;
// });

axiosClient.interceptors.response.use((response) => {
  // Xử lý dữ liệu trả về tại đây

  if (response && response.data.error_code === 200) {
    return response.data;
  }
  throw response.data;
});

export default axiosClient;
