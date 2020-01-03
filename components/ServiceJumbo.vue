<template>
	<div>
		<nuxt-link :to="'/services/' + props.slug">
			<v-container>
				<v-layout row wrap>
					<v-flex xs12 md3>
						<v-img
							:lazy-src="$store.state.webRoot+'/api/cockpit/image?token='+$store.state.imageToken+'&src='+props.image._id+'&w=200&h=200&o=true'"
							:src="$store.state.assetRoot + props.image.path"
						></v-img>
					</v-flex>

					<v-flex xs12 md9>
						<h2 class>{{props.title}}</h2>
						{{props.preview}}
						<v-layout row mt-5>
							<v-flex xs4 v-for="(price, index) in props.prices" :key="index">
								<v-card>
									<v-card-text>
										<v-layout align-content-space-between>
											<span d-flex>
												<h2>{{price.value.title}}</h2>
												{{price.value.price}}
											</span>
											<v-icon d-flex large>mdi-package-variant-closed</v-icon>
										</v-layout>
									</v-card-text>
								</v-card>
							</v-flex>
						</v-layout>
					</v-flex>
				</v-layout>
			</v-container>
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