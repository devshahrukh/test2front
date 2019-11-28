import Vue from 'vue';
import axios from 'axios';
import {api} from '@/config';
import VueAxios from 'vue-axios';

const apiService = {
	/**
	 * Initialise the axios for requests
	 * @return void
	 */
	init() {
		Vue.use(VueAxios, axios);
		Vue.axios.defaults.baseURL = api.local.url;
	},

	/**
	 * Get request to any given endpoint
	 * @param  String endpoint
	 * @param  String params  
	 * @return Promise         
	 */
	get(endpoint, params=''){
		return Vue.axios.get(`${endpoint}/${params}`)
		.catch(error => {
			console.log('get request', error);
		});
	},

	/**
	 * Post request to any given endpoint
	 * @param  String endpoint
	 * @param  Object params
	 * @return Promise
	 */
	post(endpoint, params) {
		return Vue.axios.post(`${endpoint}`, params);
	},

	/**
	 * Put request to any given endpoint
	 * @param  String endpoint
	 * @param  Object params
	 * @return Promise
	 */
	put(endpoint, params){
		return Vue.axios.put(`${endpoint}`, params);
	},
};

export default apiService;