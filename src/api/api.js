
import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let base = 'http://113.10.158.154:8080';

export const rebackGood = (params,header) => { return axios.get(`${base}/student/rebackgood`, {headers:header,params: params}); };

export const queryLendingOrder = (headers) => { return axios.get(`${base}/student/querylendingorder`, {headers: headers}); };

export const delOrderByBuyer = (params,header) => { return axios.get(`${base}/student/delorderbybuyer`, {headers:header,params: params}); };

export const changeFreeze = (params,header) => { return axios.get(`${base}/student/freezegood`, {headers:header,params: params}); };

export const deleteOrder = (params,header) => { return axios.get(`${base}/student/deleteorder`, {headers:header,params: params}); };

export const confirmOrder = (params,header) => { return axios.get(`${base}/student/confirmorder`, {headers:header,params: params}); };

export const getSellerGood = (headers) => { return axios.get(`${base}/student/selfgoods`, {headers: headers}); };

export const getBuyerOrder = (headers) => { return axios.get(`${base}/student/buyeruncompletedorder`, {headers: headers}); };

export const getSellerOrder = (headers) => { return axios.get(`${base}/student/selleruncompetedorder`, {headers: headers}); };

export const createOrder = (params,header) => { return axios.get(`${base}/student/createorder`, {headers:header,params: params}); };

export const regist = (params) => { return axios.post(`${base}/access/regist`, {params: params}); };

export const getGoodsByFirId = (params) => { return axios.get(`${base}/common/firgoods`, {params: params}); };

export const getGoodsBySecId = (params) => { return axios.get(`${base}/common/secgoods`, {params: params}); };

export const getFormCat = (headers) => { return axios.get(`${base}/student/formcategory`, {headers: headers}); };

export const getSubMenu = (params) => { return axios.get(`${base}/common/submenu`, {params: params}); };

export const hotGoods = () => { return axios.get(`${base}/common/hotgoods`, {}); };
// params: params
export const addGood = (params,header) => { return axios.get(`${base}/student/addgood`, {headers:header,params: params}); };

export const delPic = (params,header) => { return axios.get(`${base}/student/delPic`, {headers:header,params: params}); };

export const getGoodDetailById = params => {return axios.get(`${base}/common/gooddetail`,  { params: params }) };

export const getCategories =()=> { return axios.get(`${base}/common/categorylist`); };

export const requestLogin = params => { console.log("123");return axios.post(`${base}/auth/login`, params).then(res => res.data); };

export const getUserList = params => { return axios.get(`${base}/category/list`, { params: params }); };

export const getUserListPage = (params,header) => { return axios.get(`${base}/category/list`, { headers:header}); };

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = (params,header) => { return axios.get(`${base}/category/add`, { params: params,headers:header }); };
