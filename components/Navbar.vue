<template>
<header>
    <div class="container-fluid navbar-container">

        <div class="row navbar-size justify-content-between">
            <div class="col-auto   d-flex h-100">

                <div class="navbar-logo-wrapper d-flex flex-center">

                    <nuxt-link to="/" class="navbar-logo-container    d-flex flex-center">
                        <img class="" src="/logo1.png" alt="">
                                </nuxt-link>

                        <nuxt-link to="/" class="navbar-logo-container  d-flex flex-center">
                            <img class="navbar-logo-part" src="/logo2.png" alt="">
                                </nuxt-link>
                </div>
            </div>
            <div class="col d-md-none p-0"></div>
            <data-btn  :groups="['layout_menu']" class="col-auto col-md d-flex flex-center">
                <div class="navbar-response d-md-flex   w-100" id="navbar-response">
                    <ul class="navbar-nav d-md-flex w-100 flex-center">
                        <li v-for="(item, index) in $GDG('layout_menu')" :key="index"  class="navbar-item">
                            <nuxt-link :to="localePath({name: $GD('href', item)})" exact active-class="active " class="navbar-link">{{$GD('title', item)}}</nuxt-link>
                        </li>
                    </ul>
                </div>

                <div class="d-md-none  d-flex flex-center justify-content-end">
                    <a href="#" id="navbar-toggle" class="navbar-toggle  d-flex flex-center" data-modal="#navbar-response">
                                     <span></span>
                                     <span></span>
                                     <span></span>
                                </a>
                </div>
            </data-btn>

            <div class="col-auto  d-flex">

                <div class=" d-flex justify-content-end w-100  flex-center ">

                    <Equalizer @play="playSound" @pause="pauseSound" style="margin-right: 1rem;"></Equalizer>
                    <audio  id="audio">
                                <source  src="/audio.mp3" type="audio/mpeg">  
                            </audio>

                    <a :href="switchLocalePath(locale)" v-for="(locale) in $i18n.locales" :key="locale.code" class="icon-wrapper-contacts text-upper">
                                    <span>{{ locale }}</span>
                                </a>

                </div>

            </div>

        </div>

    </div>

</header>
</template>

<script>
import Equalizer from '~/components/layouts/Equalizer.vue'
export default {
    name: "navbar",
    methods: {
        playSound() {
            document.getElementById('audio').play();

        },

        pauseSound() {
            document.getElementById('audio').pause();

        },
    },
    components: {
        "Equalizer": Equalizer
    }
};
</script>
