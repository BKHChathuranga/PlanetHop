import axios from "./ApiService";

export const booking = () => axios.post('/planetHop-booking/create-booking')