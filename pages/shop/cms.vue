<template>
	<div>
		<h1 class="primary--text main-title" style="text-align: center;">Manage Items</h1>
		<v-container grid-list-xs>
			<v-layout row wrap>
				<v-flex xs12>
					<v-btn color="success" @click="addItem()">Add item</v-btn>
				</v-flex>
			</v-layout>
		</v-container>
		<v-container grid-list-lg>
			<v-layout row wrap>
				<v-flex xs12 sm6 lg4 v-for="(item, index) in values" :key="index">
					<v-card>{{item.name}}</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template> 

<script>
export default {
	async asyncData({ $axios, route, store }) {
		let collection = "Products";

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

	computed: {},

	methods: {
		async addItem() {
			let collection = "Products";

			await this.$axios.post(
				this.$store.state.webRoot +
					"/api/collections/save/" +
					collection +
					"?token=" +
					this.$store.state.masterToken,
				{
					data: {
						name: "name",
						description: "Description",
						price: Math.ceil(Math.random() * (300 - 1) + 1),
						image: {
							path: "/2020/03/23/5e78c189a34caIMG_20180930_073616-e4785b5c.jpg",
							title: "placeholder.png"
						}
					}
				}
			);
			return window.location.reload(true);
		}
	},

	data() {
		return {
			show: false,
			data: ""
		};
	}
};
</script>