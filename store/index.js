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


})


export const mutations = {

    addToCart: (state, payload) => (state.cart.push(payload)),
    setNavigation: (state, payload) => (state.navigation = payload),
    setPage: (state, payload) => (state.page = payload),


}

export const actions = {

    // nuxtServerInit({ commit, state }) {
    //     let collection = "bupaPractices";
    //     // console.log("inited")
    //     return axios.post(

    //         state.webRoot + "/api/collections/get/" +
    //         collection +
    //         "?token=" + state.collectionsToken,
    //         {
    //             fields: { title: 1, slug: 1, image: 1 }
    //         }
    //     )
    //         .then(res => {
    //             commit("setNavigation", res.data);
    //         });
    // }

}