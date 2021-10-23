import Vue from 'vue'
import VueCarousel from 'vue-carousel';
import VueMq from 'vue-mq'

Vue.use(VueCarousel);
Vue.use(VueMq, {
    breakpoints: { // default breakpoints - customize this
        xs: 768,
        sm: 992,
        md: 1200,
        lg: Infinity,
    }
})