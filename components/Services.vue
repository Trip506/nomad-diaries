<template>
	<!-- <div>{{values}}</div> -->
	<div>
		<v-container grid-list-lg>
			<v-layout row>
				<v-flex xs12 md4 v-for="(item, index) in props" :key="index">
					<Service :props="item"></Service>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	props: ["props"],
	components: {
		Service: () => import("@/components/Service")
	},
	data() {
		return {
			values: this.$store.state.navigation.entries
		};
	}
};
</script>
