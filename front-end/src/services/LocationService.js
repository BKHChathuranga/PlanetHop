import axios from "./ApiService";

export const getLocations = () => axios.get('/planetHop-transportation/location')