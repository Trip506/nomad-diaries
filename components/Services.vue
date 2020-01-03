<template>
	<!-- <div>{{values}}</div> -->
	<div>
		<v-container grid-list-lg>
			<v-layout column>
				<v-flex xs12 md4 v-for="(item, index) in props" :key="index">
					<ServiceJumbo :props="item"></ServiceJumbo>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	props: ["props"],
	components: {
		ServiceJumbo: () => import("@/components/ServiceJumbo"),
		Service: () => import("@/components/Service")
	},
	data() {
		return {
			values: this.$store.state.navigation.entries
		};
	}
};
</script>
