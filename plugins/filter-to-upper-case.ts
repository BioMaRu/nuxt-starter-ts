import Vue from 'vue'

Vue.filter('toUpperCase', (val: string): string => {
	try {
		return val.toUpperCase()
	} catch (err) {
		throw new Error('filter:toUpperCase - error while running filter')
	}
})
