<template>
    <v-app>
        <!-- LEFT DRAWER  -->
        <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
            <v-list>
                <v-list-item v-for="(item, i) in navigation" :key="i" :to="item.to" router exact>
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.title" />
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <!-- Navbar  -->
        <v-app-bar class="primary accent--text" :clipped-left="clipped" fixed app>
            <v-app-bar-nav-icon color="accent lighten-1" @click.stop="drawer = !drawer" />

            <v-toolbar-title style="cursor:pointer;" @click="go('/')" class="toolbar-title title-cursive">
                {{$store.state.name}}
                <v-icon large color="accent" style="margin-left:10px">mdi-earth</v-icon>
            </v-toolbar-title>

    	<!--<v-btn color="success" @click="changeCurrency('EUR')">EUR</v-btn>
       		<v-btn color="success" @click="changeCurrency('GBP')">GBP</v-btn> 
  			<v-btn color="info" @click="setCurrency('EUR')">EUR</v-btn>
            <v-btn color="info" @click="setCurrency('GBP')">GBP</v-btn>
            <v-btn color="info" @click="setCurrency('HRK')">HRK</v-btn>-->
            <v-spacer />
			<v-flex xs2>
			<v-overflow-btn
				dark
				@change="setCurrency(newCurrency)"
				:items="currencylist"
				v-model="newCurrency"
				label="Choose your currency"
			></v-overflow-btn>
			</v-flex>		

            <nuxt-link :to="'/cart'">
                <v-btn color="success">Cart {{$store.state.cart.items.length}}</v-btn>
            </nuxt-link>

            <!-- <div class="accent--text">
                Contact Us
                <v-icon mr-3 color="accent lighten-1">mdi-phone-message</v-icon>
            </div>-->
        </v-app-bar>

        <v-content>
            <!-- navigation -->

            <!-- Site Content -->
            <nuxt />

            <!-- Footer -->
            <v-footer height="auto" color="primary">
                <v-layout justify-center row wrap>
                    <v-container>
                        <v-layout row wrap align-center justify-center>
                            <v-flex class="accent--text" v-for="(item, index) in navigation" :key="index">
                                <nuxt-link :to="item.to">
                                    <div class="accent--text">{{item.title}}</div>
                                </nuxt-link>
                            </v-flex>
                        </v-layout>
                    </v-container>

                    <v-flex primary lighten-2 py-3 text-xs-center accent--text xs12>
                        &copy;2020 —
                        <strong>Sams Nomad Diaries</strong>
                    </v-flex>
                </v-layout>
            </v-footer>
        </v-content>

        <!-- GO UP BUTTON  -->
        <ScrollUpButton></ScrollUpButton>

        <!-- CONTACT ME BUTTON
        <Contact></Contact>-->

        <!-- RIGHT DRAWER  -->
        <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
            <v-list>
                <v-list-item @click.native="right = !right">
                    <v-list-item-action>
                        <v-icon light>mdi-repeat</v-icon>
                    </v-list-item-action>
                    <v-list-item-title>Switch drawer (click me)</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-app>
</template>

<script>
import { mapMutations } from "vuex";
import { mapActions } from "vuex";
export default {
    components: {
        LogoLink: () => import("@/components/core/LogoLink"),
        ScrollUpButton: () => import("@/components/core/ScrollUpButton"),
        Contact: () => import("@/components/core/Contact")
    },

    data() {
        return {
            clipped: false,
            drawer: false,
			fixed: false,
			newCurrency:'',
			currencylist: [
				'USD', 'GBP', 'EUR', 'JPY', 'BGN', 'CZK', 'DKK', 'HUF', 'PLN', 'RON',
				'SEK', 'CHF', 'ISK', 'NOK', 'HRK', 'RUB', 'TRY', 'AUD', 'BRL', 'CAD',
				'CNY', 'HKD', 'IDR', 'ILS', 'INR', 'KRW', 'MXN', 'MYR', 'NZD', 'BHP',
				'SGD', 'THB', 'ZAR'
			],
            navigation: [
                {
                    icon: "mdi-home",
                    title: "Welcome",
                    to: "/"
                },
                {
                    icon: "mdi-map-marker-radius",
                    title: "Blog",
                    to: "/blog"
                },
                {
                    icon: "mdi-format-quote-close-outline",
                    title: "Articles",
                    to: "/articles"
                },
                {
                    icon: "mdi-package-variant-closed",
                    title: "Services",
                    to: "/services"
                },
                {
                    icon: "mdi-contact-mail",
                    title: "Contact",
                    to: "/contact"
                },
                {
                    icon: "mdi-contact-mail",
                    title: "Currency",
                    to: "/currencies"
                },
                {
                    icon: "mdi-security",
                    title: "Privacy Policy",
                    to: "/privacy-policy"
                },
                {
                    icon: "mdi-home",
                    title: "Swapi",
                    to: "/swapi"
                },
                {
                    icon: "mdi-home",
                    title: "Shop",
                    to: "/shop"
                }
            ],
            miniVariant: false,
            right: true,
            rightDrawer: false
        };
    },
    methods: {
        ...mapMutations(["setCurrency"]),
        changeCurrency(value) {
            this.setCurrency(value);
        },
        setCurrency(value) {
            this.$store.dispatch("FETCH_EXCHANGE_RATE", value);
        },

        go(route) {
            this.$router.push(route);
        },
        goBack() {
            this.$router.back();
        }
    },

    head() {
        return {
            link: [
                {
                    rel: "stylesheet",
                    href:
                        "https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap"
                }
            ]
        };
    }
};
</script>

<style lang="css">
h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: "Bebas Neue";
    letter-spacing: 2px;
}

a {
    text-decoration: none;
}
</style>