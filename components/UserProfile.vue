<template>
	<div>
		<div>Hello {{ user.firstName }}, {{ user.lastName }}</div>
	</div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

export default Vue.extend({
	props: {
		user: {
			type: Object,
			required: true,
		} as PropOptions<User>,
	},

	data() {
		return {
			message: 'This is a message',
		}
	},

	computed: {
		fullName(): string {
			return `${this.user.firstName} ${this.user.toString()}`
		},
	},

	mounted() {},
})
</script>

<style>
.NuxtLogo {
	margin: auto;
	animation: asas;
}

@keyframes appear {
	0% {
		opacity: 0;
	}
}
</style>
