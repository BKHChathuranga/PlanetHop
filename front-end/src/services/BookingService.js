import axios from './ApiService'

export const GetAllBookings = () => axios.get('/planetHop-booking/');