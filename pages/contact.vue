<template>
    <div>
        <v-btn color="primary" 
        @click="snackbar = true">
        Contact me
        </v-btn>
    <v-snackbar
        color="info"
        v-model="snackbar"
        :bottom="y === 'bottom'"
        :left="x === 'left'"
        :multi-line="mode === 'multi-line'"
        :right="x === 'right'"
        :timeout="timeout"
        :top="y === 'top'"
        :vertical="mode === 'vertical'"
    >
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
      <v-btn
        color=""
        flat
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
    


{{name}}
{{email}}



<div>
    <v-form @submit.prevent>
        <v-container grid-list-lg>
            <v-layout row space>
                <v-flex xs12 md6>
                        <v-text-field v-model="name" required :rules="[v => !!v || 'Name is required']" label="Name"></v-text-field>
                </v-flex>
                <v-flex xs12 md6>
                        <v-text-field v-model="email" required :rules="[v => !!v || 'E-mail is required']" label="E-mail"></v-text-field>
                </v-flex>
                <v-flex xs12>
                    <v-textarea v-model="text" solo label="Message"></v-textarea>
                </v-flex>
            </v-layout>
                    <v-btn @click="submit_post">Submit</v-btn>
        </v-container>
    </v-form>
</div>







    </div>
</template>

<script>
export default {
    methods: {
  async submit_post() {
      let form = "contact";
			const ip = await this.$axios.$post(
                this.$store.state.webRoot +
					"/api/forms/submit/" +
					form +
					"?token=" +
					this.$store.state.formToken,
				{
                    form: {
                            Name: this.name,
                            Email: this.email,
                            Text: this.text
                            }
				},
            this.name='', this.email='', this.text=''
            );
}
    },
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
    data () {
    return {
        snackbar: false,
        y: 'bottom',
        x: null,
        mode: '',
        name: '',
        email: '',
        text: ''
           }
        },
};
</script>