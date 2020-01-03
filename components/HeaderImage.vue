<template>
	<v-img
		max-height="700"
		:src="$store.state.assetRoot + image.path"
		:lazy-src="$store.state.webRoot+'/api/cockpit/image?token='+$store.state.imageToken+'&src='+image._id+'&w=200&h=200&o=true'"
	>
		<v-layout align-center justify-center fill-height>
			<v-container>
				<h1 class="accent--text">{{title}}</h1>
			</v-container>
		</v-layout>
		<!-- Loading reticycle -->
		<template v-slot:placeholder>
			<v-layout fill-height align-center justify-center ma-0>
				<v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
			</v-layout>
		</template>
	</v-img>
</template>

<script>
export default {
	props: {
		image: String,
		title: String
	},
	data() {
		return {};
	}
};
</script>

<style lang="css" scoped>
h1 {
	font-family: "Bebas Neue";
	letter-spacing: 8px;
	font-size: 500%;
	text-shadow: 5px 5px black;
}
</style>
