<template>
	<div>
    <h1 class="primary--text main-title" style="text-align: center;">Traveller Store</h1>
    <v-container grid-list-lg>
    <v-layout row wrap>
    <v-flex xs4 v-for="(item, index) in values" :key="index">
      <v-card>
        <v-img
          :src="$store.state.assetRoot + item.image.path"
          max-height="10cm"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <p class="headline">{{item.name}} <span v-if="item.discount_price!=0" class="title red--text" style="margin-left: 90px;">{{item.discount_price/item.price*100}}% OFF!</span></p>
          </div>
          <v-spacer></v-spacer>
        </v-card-title>

        <v-card-text>
            <span v-show="!show">
                {{item.description | truncate(54)}}
            </span>
            <span v-show="show">
                {{item.description}}
            </span>
            <span style="margin-left: 45%;">
                <v-btn icon @click="show = !show">
                    <v-icon>{{ show ? 'mdi-chevron-down' : 'mdi-chevron-up' }}</v-icon>
                </v-btn>
            </span>
         </v-card-text>

        <v-card-actions>
          <v-btn flat color="grey lighten-1">Buy Now</v-btn>
          <v-spacer></v-spacer>
          <p v-if="item.discount_price==0" class="title" style="margin-right: 15px;">£{{item.price}}</p>
          <p v-else class="title red--text" style="margin-right: 15px;"><span class="grey--text" style="margin-right: 15px;">£{{item.price}}</span>£{{item.discount_price}}</p>
        </v-card-actions>
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
    let request1 = await $axios.post(
      store.state.webRoot +
        "/api/collections/get/" +
        collection +
        "?token=" +
        store.state.collectionsToken
    );

    return {
      values: request1.data.entries
    };
  },
  methods: {
    fetch(url) {
      var hello = url;
      return hello;
    }
  },

  data() {
    return {
      show: false,
      data: ""
    };
  },
  filters: {
    truncate(string, value) {
      return (string || "").substring(0, value);
    }
  }
};
</script>
