<template>
    <div>
        {{data2}}
        <h1 class="primary--text main-title" style="text-align: center;">Traveller Store</h1>
        <v-container grid-list-lg>
            <v-layout row wrap>
                <v-flex xs12 sm6 lg4 v-for="(item, index) in values" :key="index">
                    <v-card>
                        <v-img :src="$store.state.assetRoot + item.image.path" max-height="10cm"></v-img>

                        <v-card-title primary-title>
                            <v-layout align-content-space-between justify-space-between>
                                <v-flex>
                                    <p class="headline d-flex">{{item.name}}</p>
                                </v-flex>

                                <span
                                    v-if="item.discount_price!=0 && item.discount_price < parseInt(item.price)"
                                    class="title red--text"
                                >{{item.discount_price/item.price*100}}% OFF!</span>
                            </v-layout>
                        </v-card-title>

                        <v-card-text>
                            <span v-show="!item.show">{{item.description | truncate(54)}}</span>
                            <span v-show="item.show">{{item.description}}</span>
                            <span style="margin-left: 45%;">
                                <v-btn icon @click="item.show = !item.show">
                                    <v-icon>{{ !item.show ? 'mdi-chevron-down' : 'mdi-chevron-up' }}</v-icon>
                                </v-btn>
                            </span>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn @click="cart(item)" flat color="grey lighten-1">Buy Now</v-btn>
                            <v-btn>
                                <nuxt-link :to="'/shop/'+item.slug" class="accent--text">Read more</nuxt-link>
                            </v-btn>
                            <v-spacer></v-spacer>
                            <p
                                v-if="item.discount_price==0 || item.discount_price>=parseInt(item.price)"
                                class="title"
                                style="margin-right: 15px;"
                            >{{$store.state.currency}}:{{ Math.round($store.state.exchangeRate * item.price )}}</p>

                            <p v-else class="title red--text" style="margin-right: 15px; ">
                                <span
                                    class="grey--text"
                                    style="margin-right: 15px; text-decoration-line: line-through;"
                                >{{$store.state.currency}}:{{Math.round($store.state.exchangeRate * item.price)}}</span>
                                {{$store.state.currency}}:{{Math.round($store.state.exchangeRate * item.discount_price) }}
                            </p>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template> 

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

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

    computed: {},

    methods: {
        ...mapMutations({ cart: "addToCart" }),

        fetch(url) {
            var hello = url;
            return hello;
        },

        ...mapGetters({
            exchangeRate: "getExchangeRate"
        }),

        exchange(value) {
            return this.exchangeRate() * 5;
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