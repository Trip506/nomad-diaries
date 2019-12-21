<template>
	<v-layout column>
		<h1>My adventure blog</h1>
		<BlogPost v-for="(item, index) in props" :key="index" :props="item"></BlogPost>
		<BlogPost v-for="(item, index) in $store.state.loadedBlogEntries[0]" :key="index" :props="item"></BlogPost>

		<v-btn color="success" @click="fetch()">GET MORE</v-btn>
	</v-layout>
</template>

<script>
export default {
	components: {
		BlogPost: () => import("@/components/BlogPost")
	},
	props: ["props"],
	data() {
		return {
			ip: ""
		};
	},
	methods: {
		async fetch() {
			let collection = "blog";
			const ip = await this.$axios.$post(
				this.$store.state.webRoot +
					"/api/collections/get/" +
					collection +
					"?token=" +
					this.$store.state.collectionsToken,
				{
					limit: 5,
					skip: 5,
					sort: { _created: -1 }
				}
			);

			this.$store.commit("loadBlogEntries", ip.entries);
		}
	}
};
</script>