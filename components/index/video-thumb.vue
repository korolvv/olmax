<template>
<div  href="#" @mouseover="play" @mouseout="pause" class="box-rotate-container box-main-wrapper d-inline-block">
<div class="media-bg box-rotate">

<div class="media-bg box-rotate-item  text-upper text-upper box-hidden"  >      
    <video  ref="video" class="media-bg-cover" muted loop playsinline :src="src"></video>
<nuxt-link :to="href"  href="#" class="box-main-more d-flex flex-center">
    <span class="text-middle d-inline-block text-spacing1">Подробней</span>
</nuxt-link>
</div>
<div class="media-bg flex-center d-flex box-rotate-item media-bg-black08 box-border-blue box-shadow-blue05" style="padding: 1rem">
    <div class="icon-wrapper-index-tabs ">
        <simple-svg ref="navigation" :filepath="icon" class="icon icon-blue">
        </simple-svg>
    </div>
</div>
</div>
</div>
</template>

<script>
export default {
    props: ['src', 'icon', 'href'],
    methods: {
        play() {
            if (this.$refs.video)
                this.$refs.video.play();
        },
        pause() {
            if (this.$refs.video)
                this.$refs.video.pause();
        }
    }
}
</script>
