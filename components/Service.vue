<template>
	<div>
		<nuxt-link :to="'/services/' + props.slug">
			<v-card elevation="5" color="info ">
				<v-card-media>
					<v-img
						height="200"
						:lazy-src="$store.state.webRoot+'/api/cockpit/image?token='+$store.state.imageToken+'&src='+props.image._id+'&w=200&h=200&o=true'"
						:src="$store.state.assetRoot + props.image.path"
					></v-img>
				</v-card-media>
				<v-card-title class="accent--title">
					<h2 class="accent--text">{{props.title}}</h2>
				</v-card-title>
				<v-card-text>{{props.preview}}</v-card-text>

				<v-container>
					<v-layout row>
						<v-flex xs12 v-for="(price, index) in props.prices" :key="index">
							<v-card-text>
								<h2>
									{{price.value.title}}
									<v-icon large>mdi-package-variant-closed</v-icon>
								</h2>
								{{price.value.price}}
							</v-card-text>
						</v-flex>
					</v-layout>
				</v-container>
			</v-card>
		</nuxt-link>
	</div>
</template>

<script>
export default {
	props: ["props"]

	// jsonld() {
	// 	return {
	// 		"@context": "http://schema.org",
	// 		"@type": "IndividualProduct",
	// 		name: this.props.title,
	// 		description: this.props.preview
	// 		// image: this.store.state.assetRoot + props.image.path
	// 	};
	// }
};
</script>