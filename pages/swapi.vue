<template>
	<div>
		<div v-for="(item, index) in values" :key="index">{{item}}</div>
	</div>
</template>

<script>
export default {
	async asyncData({ $axios, route, store }) {
		let singleton = "privacyPolicy";

		//Get collection
		let request1 = await $axios.post("https://swapi.co/api/people");

		return {
			values: request1.data.results
		};
	},

	data() {
		return {
			data: ""
		};
	}
};
</script>