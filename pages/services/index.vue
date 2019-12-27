<template>
	<div>
		<Services :props="values"></Services>
	</div>
</template>

<script>
export default {
	props: ["props"]
};
</script>

<script>
export default {
	components: {
		Services: () => import("@/components/Services")
	},

	async asyncData({ $axios, route, store }) {
		let collection = "services";

		//Get collection
		let request1 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection +
				"?token=" +
				store.state.collectionsToken
		);
		return {
			values: request1.data.entries
		};
	},
	data() {},
	head() {
		return {
			title: "Services",
			meta: [
				// hid is used as unique identifier. Do not use `vmid` for it as it will not work
				{
					hid: "description",
					name: "description",
					content: "My custom description"
				}
			]
		};
	}
};
</script>

