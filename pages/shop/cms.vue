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
				<v-btn @click="selectMultiple = !selectMultiple">Select Multiple</v-btn>

				<v-btn v-if="selectMultiple" color="red" @click="deleteMultiple()">Delete all</v-btn>
			</v-layout>
		</v-container>
		<v-container grid-list-lg>
			<v-layout row wrap>
				<v-flex xs12 sm4 lg3 v-for="(item, index) in values" :key="index">
					<v-card>
						<v-checkbox
							v-if="selectMultiple"
							label="Select"
							v-bind="item.selected"
							v-model="selectedItems"
							:value="item._id"
						>Checkbox</v-checkbox>
						<v-img :src="$store.state.assetRoot + item.image.path" max-height="10cm"></v-img>

						<v-card-title primary-title>
							<v-layout align-content-space-between justify-space-between>
								<v-flex>
									<p class="headline d-flex">{{item.name}}</p>
								</v-flex>

								<span
									v-if="item.discount_price!=0"
									class="title red--text"
								>{{item.discount_price/item.price*100}}% OFF!</span>
							</v-layout>
						</v-card-title>

						<v-card-text>
							{{item.price}}
							<span v-show="!item.show">{{item.description | truncate(54)}}</span>
							<span v-show="item.show">{{item.description}}</span>
							<span style="margin-left: 45%;">
								<v-btn icon @click="item.show = !item.show">
									<v-icon>{{ !item.show ? 'mdi-chevron-down' : 'mdi-chevron-up' }}</v-icon>
								</v-btn>
							</span>
						</v-card-text>

						<!-- v-if="!item.inCart" -->
						<v-card-actions>
							<v-btn color="secondary">
								<nuxt-link :to="'/shop/'+item.slug" class="accent--text">Read more</nuxt-link>
							</v-btn>
							<v-btn color="red" @click="deleteItem(item._id)">Delete</v-btn>
							<v-spacer></v-spacer>
							<p
								v-if="item.discount_price==0"
								class="title"
								style="margin-right: 15px;"
							>{{$store.state.currency}}:{{ Math.round($store.state.exchangeRate * item.price )}}</p>

							<p v-else class="title red--text" style="margin-right: 15px; ">
								<span
									class="grey--text"
									style="margin-right: 15px; text-decoration-line: line-through;"
								>{{$store.state.currency}}:{{Math.round($store.state.exchangeRate * item.price)}}</span>
								{{$store.state.currency}}:{{Math.round($store.state.exchangeRate * item.discount_price) }}
							</p>
						</v-card-actions>
					</v-card>
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

	methods: {
		async deleteItem(itemId) {
			let collection = "Products";
			await this.$axios.post(
				this.$store.state.webRoot +
					"/api/collections/remove/" +
					collection +
					"?token=" +
					this.$store.state.masterToken,
				{
					filter: { _id: itemId }
				}
			);
			return window.location.reload(true);
		},

		async deleteMultiple() {
			// if list has items
			if (this.selectedItems.length > 0) {
				let collection = "Products";
				//send delete request for each item
				this.selectedItems.forEach(element => {
					this.$axios.post(
						this.$store.state.webRoot +
							"/api/collections/remove/" +
							collection +
							"?token=" +
							this.$store.state.masterToken,
						{
							filter: { _id: element }
						}
					);
				});

				//Clear list
				this.selectedItems = [];
				return window.location.reload(true);
			} else return false;
		},

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
			data: "",
			selectMultiple: false,
			selectedItems: []
		};
	}
};
</script>