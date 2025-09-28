import axios from 'axios'

export function SaveToken(token) {
	localStorage.setItem('accesToken', token)
};

export function GetToken() {
	return localStorage.getItem('accesToken')
};

export const BaseApi = import.meta.env.VITE_API_URL;

export const AxiosNozina = axios.create({
	baseURL: BaseApi
});

AxiosNozina.interceptors.request.use(
	(config) => {
		const token = GetToken();
		if(token) {
			config.headers['Authorization'] = `Bearer ${token}`
		}
		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)