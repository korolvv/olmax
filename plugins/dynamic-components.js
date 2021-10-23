import Vue from 'vue'
//import { Carousel, Slide } from 'vue-carousel';
//Vue.component('carousel', Carousel );
//Vue.component('slide', Slide );
Vue.component('carousel', () => import('vue-carousel').then(c => c.Carousel));
Vue.component('slide', () => import('vue-carousel').then(c => c.Slide));

Vue.component('data-popup', () => import('~/components/data/data-popup'));