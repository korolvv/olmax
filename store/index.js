import Vuex from 'vuex'
import Vue from 'vue'
//import * as axios from 'axios'

Vue.use(Vuex)

const createStore = () => {
    return new Vuex.Store({
        state: {
            video: 5,
            popupShow: false,
            popupService: false,

            groups: [],
            data: {},
            dataGroupsActive: [],
            dataBtnShow: false,
            posts: false,
            postsArr: []

        },
        getters: {
            getVideo(state) {
                return state.video;
            },
            getData(state) {
                return state.data.data;
            },
            getDataGroupsActive(state){
                return state.data.dataGroupsActive
            },
             
        },
        mutations: {
            setVideo(state, data) {
                state.video = data;
            },
            setData(state, data) {
                state.data = data;
            },
            setLanguage(state, data) {
                state.language = data;
            },
        },
        actions: {
            async loadData(context) {      
                const rec = await this.$axios.get(process.env.apiUrl+"/data/api/data");
                context.commit("setData", rec.data)
                
                return rec.data;
            },
 

            async nuxtServerInit(context ) {
                const rec = await this.$axios.get(process.env.apiUrl+"/data/api/data");
                context.commit("setData", rec.data)
            },
        }

    })
}

export default createStore