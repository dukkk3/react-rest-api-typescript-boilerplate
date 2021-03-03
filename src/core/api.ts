import axios from "axios";
import { apiConfig } from "./config";

const api = axios.create({
	baseURL: apiConfig.serverURI,
});

api.interceptors.request.use((req) => {
	return {
		...req,
		baseURL: apiConfig.serverURI,
	};
});

export { api };
