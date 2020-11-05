<template>
	<div class="container">
		<div>
			<Logo :user="user" />
			<h1 class="title">my-nuxt-starter</h1>
			<div class="links">
				<a
					v-if="true"
					href="https://nuxtjs.org/"
					rel="noopener noreferrer"
					class="button--green"
					target="_blank"
				>
					Documentation
				</a>
				<a
					href="https://github.com/nuxt/nuxt.js"
					target="_blank"
					rel="noopener noreferrer"
					class="button--grey"
				>
					GitHub {{ message }}
				</a>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Logo from '@/components/Logo.vue'
import Vue from 'vue'

export default Vue.extend({
	name: 'YourComponent',

	components: {
		Logo,
	},

	data() {
		return {
			user: {} as User,
			message: 'This is a message',
		}
	},
})
</script>

<style lang="scss">
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

.subtitle {
	padding-bottom: 15px;
	color: #526488;
	font-size: 42px;
	font-weight: 300;
	word-spacing: 0;
}

.links {
	padding-top: 15px;
}
</style>
