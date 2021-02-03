import axios from 'axios';

const axiosInstance = axios.createInstance({
	baseURL: 'http://localhost:8000'
});

export default axiosInstance;