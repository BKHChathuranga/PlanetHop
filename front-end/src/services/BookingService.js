import axios from './ApiService'

export const GetAllBookings = () => axios.get('/planetHop-booking/');
export const CancelBooking = (id) => axios.put('/planetHop-booking/cancel-booking')