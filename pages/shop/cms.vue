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
						description: this.lorem[
							Math.floor(Math.random() * this.lorem.length)
						],
						price: Math.ceil(Math.random() * (300 - 1) + 1),
						image: {
							path: "/2020/04/10/5e90925f5bf86placeholder.png"
							// title: "placeholder.png"
						}
					}
				}
			);
			return window.location.reload(true);
		}
	},

	data() {
		return {
			lorem: [
				"lorem",
				"ipsum",
				"dolor",
				"sit",
				"amet",
				"consectetur",
				"adipiscing",
				"elit",
				"curabitur",
				"vel",
				"hendrerit",
				"libero",
				"eleifend",
				"blandit",
				"nunc",
				"ornare",
				"odio",
				"ut",
				"orci",
				"gravida",
				"imperdiet",
				"nullam",
				"purus",
				"lacinia",
				"a",
				"pretium",
				"quis",
				"congue",
				"praesent",
				"sagittis",
				"laoreet",
				"auctor",
				"mauris",
				"non",
				"velit",
				"eros",
				"dictum",
				"proin",
				"accumsan",
				"sapien",
				"nec",
				"massa",
				"volutpat",
				"venenatis",
				"sed",
				"eu",
				"molestie",
				"lacus",
				"quisque",
				"porttitor",
				"ligula",
				"dui",
				"mollis",
				"tempus",
				"at",
				"magna",
				"vestibulum",
				"turpis",
				"ac",
				"diam",
				"tincidunt",
				"id",
				"condimentum",
				"enim",
				"sodales",
				"in",
				"hac",
				"habitasse",
				"platea",
				"dictumst",
				"aenean",
				"neque",
				"fusce",
				"augue",
				"leo",
				"eget",
				"semper",
				"mattis",
				"tortor",
				"scelerisque",
				"nulla",
				"interdum",
				"tellus",
				"malesuada",
				"rhoncus",
				"porta",
				"sem",
				"aliquet",
				"et",
				"nam",
				"suspendisse",
				"potenti",
				"vivamus",
				"luctus",
				"fringilla",
				"erat",
				"donec",
				"justo",
				"vehicula",
				"ultricies",
				"varius",
				"ante",
				"primis",
				"faucibus",
				"ultrices",
				"posuere",
				"cubilia",
				"curae",
				"etiam",
				"cursus",
				"aliquam",
				"quam",
				"dapibus",
				"nisl",
				"feugiat",
				"egestas",
				"class",
				"aptent",
				"taciti",
				"sociosqu",
				"ad",
				"litora",
				"torquent",
				"per",
				"conubia",
				"nostra",
				"inceptos",
				"himenaeos",
				"phasellus",
				"nibh",
				"pulvinar",
				"vitae",
				"urna",
				"iaculis",
				"lobortis",
				"nisi",
				"viverra",
				"arcu",
				"morbi",
				"pellentesque",
				"metus",
				"commodo",
				"ut",
				"facilisis",
				"felis",
				"tristique",
				"ullamcorper",
				"placerat",
				"aenean",
				"convallis",
				"sollicitudin",
				"integer",
				"rutrum",
				"duis",
				"est",
				"etiam",
				"bibendum",
				"donec",
				"pharetra",
				"vulputate",
				"maecenas",
				"mi",
				"fermentum",
				"consequat",
				"suscipit",
				"aliquam",
				"habitant",
				"senectus",
				"netus",
				"fames",
				"quisque",
				"euismod",
				"curabitur",
				"lectus",
				"elementum",
				"tempor",
				"risus",
				"cras"
			],
			show: false,
			data: ""
		};
	}
};
</script>