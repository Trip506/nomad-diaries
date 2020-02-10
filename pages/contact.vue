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
{{error}}



<div>
    <v-form @submit.prevent>
        <v-container grid-list-lg>
            <v-layout row space>
                <v-flex xs12 md6>
                        <v-text-field v-model="name" required :rules="nameRules" label="Name"></v-text-field>
                </v-flex>
                <v-flex xs12 md6>
                        <v-text-field v-model="email" required :rules="emailRules" label="E-mail"></v-text-field>
                </v-flex>
                <v-flex xs12>
                        <v-textarea v-model="text" solo  :rules="[v => !!v]" label="Message"></v-textarea>
                </v-flex>
            </v-layout>
                    <v-checkbox v-model="valid" label="Allow us to contact you"></v-checkbox>
                    <v-btn @click="submit_post" :disabled="!valid">Submit</v-btn>
        </v-container>
    </v-form>
</div>



    </div>
</template>

<script>
export default {
    methods: {
    async submit_post() {

        if (name.rules && email.rules) {
            this.error=0

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
                                Text: this.text,
                                Check: this.checkbox
                                }
                        },
                this.name='', this.email='', this.text=''
                );

        } else {
            this.error=1
        }
                            
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
        error: '',
        snackbar: false,
        y: 'bottom',
        x: null,
        mode: '',
        valid: false,
            nameRules: [
              (v) => !!v || 'Name is required',
              (v) => v.length <= 10 || 'Name must be less than 10 characters'
            ],
            emailRules: [
              (v) => !!v || 'E-mail is required',
              (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ],
        name: '',
        email: '',
        text: ''
           }
        },
    
};
</script>