<template>
	<div class="container">
		<div>
			<UserProfile :user="$store.state.user.data" />
			<UserProfile :user="user" />

			<h1 class="title">my-nuxt-starter</h1>

			<button @click="showSpinnerFor2Sec">showSpinnerFor2Sec()</button>
			<br />
			<br />
			<div>
				<pre>{{ message | toUpperCase }}</pre>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

import UserProfile from '@/components/UserProfile.vue'

export default Vue.extend({
	components: {
		UserProfile,
	},

	data() {
		return {
			user: {
				firstName: '',
				lastName: '',
			} as User,
			message: 'MeSSagE',
		}
	},

	mounted() {
		this.fetchUser()
	},

	methods: {
		showSpinnerFor2Sec(): void {
			this.$appSpinner.start()

			setTimeout(() => {
				this.$appSpinner.stop()
			}, 2000)
		},
		async fetchUser(): Promise<void> {
			const u = await new Promise<User>(resolve =>
				resolve({
					firstName: 'BioMaRu',
					lastName: 'from client',
				}),
			)

			this.user = u
		},
	},
})
</script>

<style lang="scss" scoped>
body .container {
	display: flex;
	min-height: 100px;

	align-items: center;
	justify-content: center;

	margin: 0 auto;

	text-align: center;
}

.title {
	display: block;
	color: #35495e;
	font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
		Roboto, 'Helvetica Neue', Arial, sans-serif;
	font-size: 100px;
	font-weight: 300;
	letter-spacing: 1px;
}
</style>
