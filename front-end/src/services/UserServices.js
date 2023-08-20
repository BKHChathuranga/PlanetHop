import axios from './ApiService';

export const login = (data) => axios.post('/planetHop-user/login', data);