import Vue from 'vue'
const eventBus = new Vue()

export default (_: any, inject: any) => {
	inject('appSpinner', {
		start() {
			eventBus.$emit('start')
		},
		stop() {
			eventBus.$emit('stop')
		},
		eventBus,
	})
}
