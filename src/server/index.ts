import axios from "axios";

const service = axios.create({
  baseURL: '/api',
  timeout: 1000,
})

service.interceptors.request.use(config => {
  //获取token
  let token = localStorage.getItem('token')
  //去除token前后引号
  token = token!.replace(/^(\s|")+|(\s|")+$/g, '');
  if (config && config.headers) { // 多一步判断
    //请求中携带token
    config.headers.Authorization = "Bearer " + token
  }
  return config;
}, error => {
  return Promise.reject(error);
});

service.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);
export default service