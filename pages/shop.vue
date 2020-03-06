<template>
	<div>
{{values}}

    </div>

</template> 

<script>
export default {
        async asyncData({ $axios, route, store }) {
		let collection = "Products";

		//Get collection
		let request1 = await $axios.post(store.state.webRoot +
				"/api/collections/get/" +
				collection +
				"?token=" +
				store.state.collectionsToken,
			);

		return {
            values: request1.data.entries 
        };
    },
    methods:{
        fetch(url){
            var hello=url
            return hello
        }
    },

	data() {
		return {
			data: ""
		};
	}
};
</script>