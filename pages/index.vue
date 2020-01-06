<template>
	<div>
		<HeaderImage
			:image="singleton.header_image"
			:title="singleton.title"
			:subtitle="singleton.subtitle"
		></HeaderImage>

		<Mission :props="singleton.icons"></Mission>

		<!-- <Practices></Practices> -->

		<!-- ABOUT -->
		<v-container grid-list-xs>
			<v-divider></v-divider>

			<v-layout column>
				<About :props="singleton.text"></About>
			</v-layout>
		</v-container>

		<!-- ABOUT SERVICES -->
		<div class="section">
			<v-layout column wrap justify-center align-content-center>
				<v-img
					class="d-flex"
					position="center"
					height="150"
					width="150"
					:src="require('@/assets/sitting.png')"
				></v-img>

				<h1 class="primary--text main-title">Working</h1>
			</v-layout>
			<v-container grid-list-xs>
				<v-layout my-5 column>
					<About :props="singleton.about_services"></About>
				</v-layout>
			</v-container>
		</div>

		<!-- SERVICES -->
		<Services :props="services"></Services>

		<!-- BLOG -->
		<div class="section">
			<v-container>
				<v-layout column wrap justify-center align-content-center>
					<v-img
						class="d-flex"
						position="center"
						height="150"
						width="150"
						:src="require('@/assets/sitting.png')"
					></v-img>
					<h1 class="primary--text main-title">Travels</h1>
				</v-layout>
				<About :props="singleton.about_blog"></About>
				<BlogPosts class="section" :props="collection"></BlogPosts>
			</v-container>
		</div>
	</div>
</template>


<script>
export default {
	async asyncData({ $axios, route, store }) {
		let collection1 = "blog";
		let collection2 = "services";
		let singleton = "home";

		//Get  blog
		let request1 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection1 +
				"?token=" +
				store.state.collectionsToken,
			{ limit: 3, sort: { _created: -1 } }
		);

		//Get services
		let request2 = await $axios.post(
			store.state.webRoot +
				"/api/collections/get/" +
				collection2 +
				"?token=" +
				store.state.collectionsToken,
			{ limit: 3 }
		);
		//Get singleton
		let request3 = await $axios.get(
			store.state.webRoot +
				"/api/singletons/get/" +
				singleton +
				"?token=" +
				store.state.singletonsToken
		);
		return {
			collection: request1.data.entries,
			services: request2.data.entries,
			singleton: request3.data
		};
	},

	components: {
		About: () => import("@/components/About"),
		BlogPosts: () => import("@/components/BlogPosts"),
		Gallery: () => import("@/components/Gallery"),
		Feedback: () => import("@/components/Feedback"),
		HeaderImage: () => import("@/components/HeaderImage"),
		Mission: () => import("@/components/Mission"),
		OpeningTimes: () => import("@/components/OpeningTimes"),
		Services: () => import("@/components/Services")
	},
	data() {
		return {
			ids: [],
			pageBar: {
				text: "Call us on 017583 34234",
				componentIds: ["About", "Map", "FAQ", "Practises"]
			}
		};
	},

	methods: {
		scroll(to) {
			var el = document.getElementById(to);
			if (el) {
				el.scrollIntoView({
					behavior: "smooth",
					block: "center"
				});
			}
		}
	},

	head() {
		return {
			title: "Home",
			meta: [
				// hid is used as unique identifier. Do not use `vmid` for it as it will not work
				{
					hid: "description",
					name: "description",
					content: "My custom description"
				}
			]
		};
	},

	jsonld() {
		const items = this.services.map((item, index) => ({
			"@type": "Product",
			name: item.title,
			description: item.preview,
			url: this.$store.state.root + "/services/" + item.slug,
			position: index + 1,
			offers: {
				"@type": "AggregateOffer",
				lowPrice: item.prices[0].value.price,
				priceCurrency: "eur"
			}
		}));
		return {
			"@context": "http://schema.org",
			"@type": "ItemList",
			itemListElement: items
		};
	}
};
</script>




<style lang="css">
.section {
	margin: 5vh 0;
}

.main-title {
	font-size: 60px;
}
</style>
