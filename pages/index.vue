<template>
   <data-btn :groups="['index_msg']" class="media-bg d-flex flex-center">
 
<span class="text-title-middle text-thin box-shadow-title text-spacing1 text-upper ">{{$GD('index_msg.text')}}</span>     
  
</data-btn>
</template>

<script>
import VideoMainCarousel from '~/components/index/VideoMainCarousel'

export default {
    auth: false,
     head: {
        title: "Главная"
    },
    components: {
        'video-main-carousel': VideoMainCarousel,
        
    },
    beforeDestroy(){
        this.$store.commit('setVideo', 5)
    },
    beforeCreate(){
        this.$store.commit('setVideo', 0)
    }
}
</script>