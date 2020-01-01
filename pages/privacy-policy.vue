<template>
	<div>
		<v-container>
			<v-layout row wrap>
				<v-flex xs12>
					<div v-html="values.content"></div>
				</v-flex>
			</v-layout>
		</v-container>

		<!-- Blog -->
		<!-- <v-sheet color="info lighten-1">
			<v-container>
				<BlogPosts :props="blogItems"></BlogPosts>
			</v-container>
		</v-sheet>-->
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
		BlogPosts: () => import("@/components/BlogPosts")
	},

	async asyncData({ $axios, route, store }) {
		let singleton = "privacyPolicy";

		//Get collection
		let request1 = await $axios.post(
			store.state.webRoot +
				"/api/singletons/get/" +
				singleton +
				"?token=" +
				store.state.singletonsToken
		);

		return {
			values: request1.data
		};
	},
	data() {},
	head() {
		return {
			title: this.values.title,
			meta: [
				// hid is used as unique identifier. Do not use `vmid` for it as it will not work
				{
					hid: this.values.title,
					name: this.values.title,
					content: this.values.title
				}
			]
		};
	}
	// jsonld() {
	// 	return {
	// 		"@context": "http://schema.org",
	// 		"@type": "Article",
	// 		name: this.values.title,
	// 		description: this.values.preview,
	// 		keywords: this.values.keywords
	// 		// keyWord
	// 	};
	// }
};
</script>

