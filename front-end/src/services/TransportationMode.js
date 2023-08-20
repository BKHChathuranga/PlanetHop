import axios from "./ApiService";

export const getTransportationMode = () => axios.get('/planetHop-transportation/transportation-mode');