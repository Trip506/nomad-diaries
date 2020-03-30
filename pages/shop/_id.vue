<template>
	<div>
    <h1 class="primary--text main-title mb-10" style="text-align: center;">Traveller Store</h1>
    <v-container grid-list-lg class="mt-10">
    <v-layout row wrap>
    <v-flex xs12 sm6>

        <v-img
          :src="$store.state.assetRoot + values.image.path"
          height="500px"
          contain=""
        >
        </v-img>
                            

    </v-flex>
    <v-flex xs12 sm6>
      <v-layout align-content-space-between justify-space-between>
                                <v-flex>
                                    <p class="headline d-flex">{{values.name}}</p>
                                </v-flex>

                                <span
                                    v-if="values.discount_price!=0"
                                    class="title red--text"
                                >{{values.discount_price/values.price*100}}% OFF!</span>
                            </v-layout>
 
          <p v-if="values.discount_price==0" class="title" style="margin-right: 15px;">£{{values.price}}</p>
          <p v-else class="title red--text" style="margin-right: 15px; "><span class="grey--text" style="margin-right: 15px; text-decoration-line: line-through;">£{{values.price}}</span>£{{values.discount_price}}</p>
                {{values.description}}

          <v-overflow-btn
                    :items="dropdown_font"
                    label="Overflow Btn"
                    target="#dropdown-example"
                  ></v-overflow-btn>
          <v-btn flat color="grey lighten-1">Buy Now</v-btn>

   
  
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
        store.state.collectionsToken,
        { filter: { slug: route.params.id} }
    );

    return {
      values: request1.data.entries[0]
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
