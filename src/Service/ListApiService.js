import axios from "axios"
const BASE_URL='http://localhost:8080';

export function insert(user)
{
   return axios.post(`${BASE_URL}/userAdd`,user);
}

export function userLogin(loginData)
{
   return axios.post(`${BASE_URL}/userLogin`,loginData);
}
export function addCrop(id,cropToSell)
{
    console.log("Inside AXIOS");
    console.log();
    return axios.post(`${BASE_URL}/addCrop/${id}`,cropToSell);
}
export function getAllCropList(id)
{
    return axios.get(`${BASE_URL}/getAllCropList/${id}`);
}
export function getAccDetails(id)
{
    return axios.get(`${BASE_URL}/getAccDetails/${id}`);
}

export function cancelCropSelling(orderId)
{
    
    return axios.put(`${BASE_URL}/updateStatusCrop/${orderId}`);
}