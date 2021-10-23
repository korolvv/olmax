import Vue from 'vue'
import Navbar from '../components/Navbar'
import Footer from '../components/layouts/Footer'
import Breadcrumbs from '../components/layouts/Breadcrumbs'
import {SimpleSVG} from 'vue-simple-svg'
import env from '../mixins/env'
import posts from '../mixins/posts'
import Data from '~/components/data/data.js'


Vue.mixin(env)
Vue.mixin(posts)
Vue.component('navbar', Navbar);
Vue.component('layout-footer', Footer);
Vue.component('simple-svg', SimpleSVG);
Vue.component('breadcrumbs', Breadcrumbs);
Vue.use(Data, {data: 'getData'})

 