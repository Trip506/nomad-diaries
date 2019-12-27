<template>
	<div>
		<v-parallax max-height="300" :src="$store.state.assetRoot + values.image.path"></v-parallax>
		<v-container>
			<!-- {{values}} -->
			<v-layout row wrap>
				<v-flex my-5 xs12 md7>
					<h1>{{values.title}}</h1>
					<div v-html="values.description"></div>
				</v-flex>
				<v-flex xs12 md5>
					<Gallery :props="values.gallery"></Gallery>
				</v-flex>
			</v-layout>
		</v-container>
		<Services :props="services"></Services>
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
		Gallery: () => import("@/components/Gallery"),
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
				store.state.collectionsToken,
			{ filter: { slug: route.params.id } }
		);
		let request2 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection +
				"?token=" +
				store.state.collectionsToken,

			{ fields: { title: 1, preview: 1, image: 1, prices: 1, slug: 1 } }
		);
		return {
			values: request1.data.entries[0],
			services: request2.data.entries
		};
	},
	data() {},
	head() {
		return {
			title: this.values.title,
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

