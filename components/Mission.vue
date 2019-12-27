<template>
	<div class="assurance">
		<v-container fluid>
			<v-slide-y-transition>
				<v-layout mx-5 my-5 row wrap v-show="show">
					<v-flex v-for="(item, index) in props" :key="index" xs12 sm6 md4>
						<div class="primary--text">
							<v-icon large color="primary">{{item.value.icon}}</v-icon>
							<v-spacer></v-spacer>
							<h1>{{item.value.text}}</h1>
						</div>
					</v-flex>
				</v-layout>
			</v-slide-y-transition>
		</v-container>
	</div>
	<!-- We're accepting dentist referrals -->
	<!--  -->
</template>

<script>
export default {
	props: ["props"],
	data() {
		return {
			show: false,
			values: [
				{
					icon: "mdi-ambulance",
					text: "Emergency Appointments"
				},
				{
					icon: "mdi-wheelchair-accessibility",
					text: "Wheelchair Friendly"
				},
				{
					icon: "mdi-clipboard-account-outline",
					text: "We're accepting dentist's referrals"
				}
			]
		};
	},
	mounted() {
		// manually trigger transition
		this.show = true;
	}
};
</script>

<style lang="css" scoped>
.assurance {
	text-align: center;
}

/* .fade-transition-enter-active,
.fade-transition-leave-active {
	transition: 3s;
} */
.slide-y-transition-enter-active,
.slide-y-transition-leave-active {
	transition: 2s;
}
</style>

