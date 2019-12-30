<template>
	<!-- <div>{{values}}</div> -->
	<div>
		<v-container grid-list-lg>
			<v-layout row>
				<v-flex xs12 md4 v-for="(item, index) in props" :key="index">
					<nuxt-link :to="'/services/' + item.slug">
						<v-card @hover="raise()" elevation="5" color="info ">
							<v-card-media>
								<v-img
									height="200"
									:lazy-src="$store.state.webRoot+'/api/cockpit/image?token='+$store.state.imageToken+'&src='+item.image._id+'&w=200&h=200&o=true'"
									:src="$store.state.assetRoot + item.image.path"
								></v-img>
							</v-card-media>
							<v-card-title class="accent--title">
								<h2 class="accent--text">{{item.title}}</h2>
							</v-card-title>
							<v-card-text>{{item.preview}}</v-card-text>
							<!-- <v-card-actions>
								<v-btn nuxt :to="'/services/'+item.slug" color="success">Explore</v-btn>
								
							</v-card-actions>-->
						</v-card>
					</nuxt-link>
				</v-flex>
			</v-layout>
			{{props[0]}}
		</v-container>
	</div>
</template>

<script>
export default {
	props: ["props"],
	data() {
		return {
			values: this.$store.state.navigation.entries,
			breadcrumbs: [
				{
					url: "https://example.com",
					text: "top page"
				},
				{
					url: "https://example.com/foo",
					text: "foo"
				},
				{
					url: "https://example.com/foo/bar",
					text: "bar"
				}
			]
		};
	}
};
</script>
