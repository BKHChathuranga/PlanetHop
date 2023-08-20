import axios from './ApiService'

export const UserLogin = (payLoad) => axios.post('/planetHop-user/login', payLoad);
export const UserRegister = (payLoad) => axios.post('/planetHop-user/register', payLoad);