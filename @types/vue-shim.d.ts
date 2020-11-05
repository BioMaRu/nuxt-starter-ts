import Vue from 'vue'

// module augmentation for a Vue instance
declare module 'vue/types/vue' {
	interface Vue {
		/** App spinnner plugin */
		$appSpinner: {
			/** Show app spinnner */
			start: () => void

			/** Hide app spinnner */
			stop: () => void
		}
	}
}

// module augmentation for a Vue ComponentOptions
declare module 'vue/types/options' {
	interface ComponentOptions<V extends Vue> {}
}
