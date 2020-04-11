<template>
	<div>
		<v-container grid-list-lg>
			<v-layout row wrap>
				<v-flex xs4 v-for="(item, index) in values" :key="index">
					<v-card>
						<v-card-title primary-title>{{item.title}}</v-card-title>
						<v-img max-height="300" :src="item.thumbnailImage"></v-img>

						<!-- {{item.itemDetail}} -->

						<br />
						<br />

						<div v-for="(item, index) in item.itemDetail" :key="index">
							{{item}}
							<br />
						</div>
						<!-- <div v-if="item.itemDetail.featureDesc" v-html="item.itemDetail.featureDesc"></div> -->
						<br />
						<br />
						<!-- {{item}} -->
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
		let request1 = await $axios.get(
			"https://api.apify.com/v2/datasets/xpNGhU1qNoubGgk2q/items"
		);

		return {
			values: request1.data
		};
	}
};
</script>