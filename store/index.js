import axios from "axios"
export const state = () => ({

    name: "Sam's Nomad Diaries",

    //TOKENS 

    masterToken: '2fb04e7093a4a4c60003a17180bf01',
    // bupaPracticesToken: '5f75965a9da5820efd6b82f8c4293a',

    //All collections
    collectionsToken: 'fc6c7faa21c0678f849f0d34e6f664',

    //All singletons
    singletonsToken: 'ec30521c5c674ea992fed2fa24cb3d',

    // For getting thumbnails
    imageToken: '77f3abfbb1ab1ecd0d339031fb209f',

    //Form Token
    formToken: '1e4cfae2425ece6599cf254d9de494',


    //COLLECTION API TOKENS GO HERE 
    assetRoot: "https://cms.hackmylanguage.com/storage/uploads",
    webRoot: "https://cms.hackmylanguage.com",
    navigation: [],
    page: [],


    //Loading
    loadedBlogEntries: [],

    //CURRENCIES  
    defaultCurrency: 'GBP',
    currency: 'GBP',
    exchangeRate: '1',

    //cart


    cart: {},
    cartLength: 0,



})


export const mutations = {

    //Test
    addToCart: (state, payload) => (state.cartLength++, state.cart[payload.id] = payload),
    mutateCartLength: (state) => (state.cartLength == state.cartLength++),
    ///

    removeFromCart: (state, payload) => (state.cart.items.splice(payload, 1)),
    setNavigation: (state, payload) => (state.navigation = payload),
    setPage: (state, payload) => (state.page = payload),
    setCurrency: (state, payload) => (state.currency = payload),
    setExchangeRate: (state, payload) => (state.exchangeRate = payload),




}

export const actions = {



    async FETCH_EXCHANGE_RATE({ commit, state }, payload) {

        const { data } = await axios.get("https://api.exchangeratesapi.io/latest?base=" + state.defaultCurrency + "&symbols=" + payload)
        commit('setExchangeRate', Math.round(data.rates[payload] * 100) / 100)
        commit('setCurrency', payload)

    },

    pushToCart({ commit, state }, payload) {
        if (!state.cart[payload._id]) {
            commit('addToCart', payload)

        }

    },

}

export const getters = {
    getExchangeRate: state => state.exchangeRate,
    getCart: state => state.cart,
    getCartLength: state => Object.keys(state.cart).length,
}


