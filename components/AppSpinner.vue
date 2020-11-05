<script>
export default {
	data() {
		return {
			isLoading: false,
		}
	},

	created() {
		if (process.client) {
			this.$appSpinner.eventBus.$on('start', () => {
				this.isLoading = true
			})
			this.$appSpinner.eventBus.$on('stop', () => {
				this.isLoading = false
			})
		}
	},

	beforeDestroy() {
		this.$appSpinner.eventBus.$off('show')
		this.$appSpinner.eventBus.$off('hide')
	},

	render() {
		return (
			<div>
				{this.isLoading && (
					<div class="spinner-container">
						<div class="spinner-panel">
							<div class="lds-ellipsis">
								<div></div>
								<div></div>
								<div></div>
								<div></div>
							</div>
						</div>
					</div>
				)}
			</div>
		)
	},
}
</script>

<style lang="scss" scoped>
.spinner-container {
	position: fixed;
	z-index: 999;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(255, 255, 255, 0.4);
}

.navigation-bar ~ .content {
	.spinner-container {
		top: 0;
	}
}

.spinner-panel {
	padding: 0 24px;
	background: white;
	border-radius: 8px;
	box-shadow: 0 2px 40px 0 rgba(0, 0, 0, 0.07);
}

.lds-ellipsis {
	position: relative;
	display: inline-block;
	width: 80px;
	height: 60px;
}

.lds-ellipsis div {
	position: absolute;
	top: 27px;
	width: 13px;
	height: 13px;
	animation-timing-function: cubic-bezier(0, 1, 1, 0);
	background: red;
	border-radius: 50%;
}

.lds-ellipsis div:nth-child(1) {
	left: 8px;
	animation: lds-ellipsis1 0.6s infinite;
}

.lds-ellipsis div:nth-child(2) {
	left: 8px;
	animation: lds-ellipsis2 0.6s infinite;
}

.lds-ellipsis div:nth-child(3) {
	left: 32px;
	animation: lds-ellipsis2 0.6s infinite;
}

.lds-ellipsis div:nth-child(4) {
	left: 56px;
	animation: lds-ellipsis3 0.6s infinite;
}

@keyframes lds-ellipsis1 {
	0% {
		transform: scale(0);
	}
	100% {
		transform: scale(1);
	}
}

@keyframes lds-ellipsis3 {
	0% {
		transform: scale(1);
	}
	100% {
		transform: scale(0);
	}
}

@keyframes lds-ellipsis2 {
	0% {
		transform: translate(0, 0);
	}
	100% {
		transform: translate(24px, 0);
	}
}
</style>
