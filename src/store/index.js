import Vue from 'vue'
import Vuex from 'vuex'
import apiService from '@/services/apiService';
import { ADD_NEW_TASK, FETCH_TASKS } from '@/store/action.types';
import { UPDATE_TASK_LIST } from '@/store/mutation.types';

Vue.use(Vuex)

export default new Vuex.Store({
	/**
	 * State related to App
	 * @type {Object}
	 */
	state: {
		tasks: [
			'Clean up desk',
			'Buy groceries',
			'Cook dinner'
		]
	},
	/**
	 * Actions related to App
	 * @type {Object}
	 */
	actions: {
		/**
		 * Add a new task in the task list
		 * @param {object} commit
		 * @param {object} payload [New task]
		 */
		[FETCH_TASKS]({commit}) {
			return new Promise((resolve, reject) => {
				apiService.get('tasks')
				.then(({data:{ data}}) => {
					commit(UPDATE_TASK_LIST, data)
					resolve(data)
				})
				.catch(error => {
					reject(error.response.message);
				});
			})
		},
		/**
		 * Add a new task in the task list
		 * @param {object} commit
		 * @param {object} payload [New task]
		 */
		[ADD_NEW_TASK]({commit}, payload) {
			return new Promise((resolve, reject) => {
				apiService.post('tasks', payload)
				.then(() => {
					resolve()
				})
				.catch(error => {
					reject(error.response.message);
				});

				commit(UPDATE_TASK_LIST, payload.task)
			})
		}
	},
	/**
	 * Mutations related to App
	 * @type {Object}
	 */
	mutations: {
		/**
		 * Update the task list
		 * @param {object} state
		 * @param {object} payload [New task]
		 * @return mixed
		 */
		[UPDATE_TASK_LIST](state, payload) {
			if(Array.isArray(payload)){
				payload.forEach((val) => {
					state.tasks.unshift(val.title)
				})

				return
			}
			
			state.tasks.unshift(payload)
		}
	}
	
})
