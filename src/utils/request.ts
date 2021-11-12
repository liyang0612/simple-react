import { message } from "antd";
import axios, { AxiosRequestConfig } from "axios";

axios.interceptors.request.use(
  (request) => {
    const token = "8eb2358a-158d-44e0-a6f4-f3c62f3c2fc0";
    if (token) {
      request.url += request.url?.indexOf("?") === -1 ? "?" : "&";
      request.url += "access_token=" + token;
    }
    return request;
  },
  (err) => {
    return Promise.reject(err);
  }
);

axios.interceptors.response.use((response) => {
  const { data } = response;

  // 统一处理接口返回的错误
  if (!data.success) {
    message.error(data.errorMessage || `请求错误: ${data.errorCode || ""}`);
  }
  return data;
});

const request = function (url: string, options: AxiosRequestConfig) {
  return axios({
    url,
    method: "GET",
    ...options,
  });
};

export default request;
