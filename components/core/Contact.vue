<template>
    <div>
        <v-btn color="primary" dark @click="snackbar = true">
        Contact me
        </v-btn>
    <v-snackbar
        color="info" v-model="snackbar" :bottom="y === 'bottom'" :left="x === 'left'" :multi-line="mode === 'multi-line'" :right="x === 'right'" :timeout="timeout" :top="y === 'top'" :vertical="mode === 'vertical'">
        <v-card width="240px" color="info">
            <v-card-title primary-title>
               <p> {{values.title}} </p>
            </v-card-title>  
            <v-card-text>
       <p><v-icon>mdi-email</v-icon> {{values.email}}</p> 
       <p><v-icon>mdi-contact-phone</v-icon> {{values.telephone_number}} </p>
       <p><v-icon>mdi-account</v-icon> {{values.full_name}} </p>
            </v-card-text>
        </v-card>
      <v-btn color="grey darken-2" flat @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
    </div>
</template>

<script>
export default {
  async asyncData({ $axios, route, store }) {
    let singleton = "contact";

    //Get collection
    let request1 = await $axios.post(
      store.state.webRoot +
        "/api/singletons/get/" +
        singleton +
        "?token=" +
        store.state.singletonsToken
    );
    return {
      values: request1.data
    };
  },
  data() {
    return {
      snackbar: false,
      y: "bottom",
      x: null,
      mode: ""
    };
  }
};
</script>
