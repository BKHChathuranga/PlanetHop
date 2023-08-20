import axios from "./ApiService";

export const booking = () => axios.post('/planetHop-booking/create-booking')
export const GetAllBookings = () => axios.get('/planetHop-booking/');
export const CancelBooking = (id) => axios.put('/planetHop-booking/cancel-booking')
