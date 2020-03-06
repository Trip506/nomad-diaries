<template>
	<div>
        {{fetch("hello I am a function hopefully")}}
        <!--<p v-for="(item, index) in values" :key="index">{{item}}</p>-->
        <v-container grid-list-lg>
            <v-layout row wrap>
                <v-flex xs6 v-for="(item, index) in values" :key="index">   
                    <v-card>
                        <v-card-title primary-title>
                           {{item.name}}
                        </v-card-title>
                        <v-card-text v-for="(item, index) in values" :key="index">{{item.films}}</v-card-text> 
                    </v-card>
                </v-flex>    
            </v-layout>    
        </v-container>

    </div>


 <div v-for="(item, index) in values" :key="index">{{item}}</div>
 </div>

</template> 

<script>
export default {
    methods:{
        fetch(url){
            var hello=url
            return hello
        }
    },


	async asyncData({ $axios, route, store }) {
		let singleton = "privacyPolicy";

		//Get collection
		let request1 = await $axios.post("https://swapi.co/api/people");

		return {
			values: request1.data.results
		};
	},

	data() {
		return {
			data: ""
		};
	}
};
</script>