<template>
	<v-flex>
		<v-btn
			@click="top()"
			v-scroll="onScroll"
			v-show="scrollButton"
			color="secondary"
			large
			fixed
			bottom
			right
		>
			<v-icon large>mdi-chevron-up</v-icon>
		</v-btn>
	</v-flex>
</template>

<script>
export default {
	data() {
		return {
			scrollButton: false
		};
	},

	methods: {
		top() {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: "smooth"
			});
		},

		onScroll(e) {
			if (typeof window === "undefined") return;
			const top = window.pageYOffset || e.target.scrollTop || 0;
			this.scrollButton = top > 20;
		}
	}
};
</script>