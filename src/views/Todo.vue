<template>
	<div>
		<section class="hero is-fullheight has-background-grey-lighter">
			<div class="hero-body">
				<div class="container">
					<div class="field">
						<div :class="[ { 'is-loading': isSaving }, 'control is-medium']">
							<input 
								type="text"
								v-model="task"
								class="input is-medium" 
								placeholder="Enter a new task..."
								@keyup.enter="handleKeydown"
							>
						</div>
					</div>
					<div class="has-margin-top-10">
						<task :tasks="tasks"></task>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import {Task} from '@/components'
import {mapState, mapActions} from 'vuex';
import { ADD_NEW_TASK, FETCH_TASKS } from '@/store/action.types';

export default {
	name: 'Todo',
	components: {Task},
	data() {
		return {
			task: '',
			isSaving: false
		}
	},
	computed: {
		...mapState({
			tasks: state => state.tasks
		})
	},
	created() {
		this.getAllTasks()
	},
	methods: {
		/**
		 * Map actions to this view
		 */
		...mapActions({
			'getAllTasks': `${FETCH_TASKS}`,
			'addNewTask' : `${ADD_NEW_TASK}`
		}),
		/**
		 * Handle the entered text in the input field
		 * @return void
		 */
		handleKeydown() {			
			this.isSaving = true
			this.addNewTask({
				task: this.task
			})
			.then(() => {
				this.isSaving = false

			})
			this.task = ''
		}
	}
}
</script>

<style scoped>
.container input{
    border-radius: 8px;
}
</style>
