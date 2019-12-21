<template>
	<v-flex my-5 xs12>
		<v-container grid-list-lg>
			<v-layout row wrap>
				<v-flex xs12 md3>
					<nuxt-link :to="'/blog/'+props.slug">
						<v-img
							height="150"
							:src="$store.state.webRoot+'/api/cockpit/image?token='+$store.state.imageToken+'&src='+props.image._id+'&w=250&h=250&o=true'"
						>
							<!-- Loading reticycle -->
							<template v-slot:placeholder>
								<v-layout fill-height align-center justify-center ma-0>
									<v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
								</v-layout>
							</template>
						</v-img>
					</nuxt-link>
				</v-flex>

				<v-flex xs12 md9>
					<h2>{{props.title}}</h2>
					<br />
					{{props.preview.substr(0,200)}}...
					<br />
					<br />

					<v-btn color="primary lighten-2" nuxt :to="'/blog/'+props.slug" class="accent--text">Read more</v-btn>
				</v-flex>
			</v-layout>
		</v-container>
		<br />
		<v-divider></v-divider>
	</v-flex>
</template>

<script>
export default {
	props: ["props"]
};
</script>