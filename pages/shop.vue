<template>
	<div>
        {{values}}
    <v-layout row>
    <v-flex xs12 sm6 offset-sm3 v-for="(item, index) in values" :key="index">
      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">{{item.name}}</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat>Share</v-btn>
          <v-btn flat color="purple">Explore</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'mdi-chevron-down' : 'mdi-chevron-up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show">
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>

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