<template>
    <div v-if="!_env" class="media-bg   media-bg-main" :class="$store.getters.getVideo === 5?'full':'full'"> <!-- full -->
        
        <transition name="page" appear mode="out-in">
            <video key="video0" v-if="$store.getters.getVideo === 0" class="media-bg-cover media-bg-pos-top" autoplay muted loop playsinline src="/video_main_carousel0.mp4"></video>
            <video key="video2" v-if="$store.getters.getVideo === 2" class="media-bg-cover media-bg-pos-top" autoplay muted loop playsinline src="/video_main_carousel2.mp4"></video>
            <video key="video1"  v-if="$store.getters.getVideo === 1" class="media-bg-cover media-bg-pos-top" autoplay muted loop playsinline src="/video_main_carousel1.mp4"></video>
            <video key="video3"  v-if="$store.getters.getVideo === 3" class="media-bg-cover media-bg-pos-top" autoplay muted loop playsinline src="/video_main_carousel3.mp4"></video>
            <video key="video4"  v-if="$store.getters.getVideo === 4" class="media-bg-cover media-bg-pos-top" autoplay muted loop playsinline src="/video_main_carousel4.mp4"></video>
            <video key="video5" v-if="$store.getters.getVideo === 5"  class="media-bg-cover media-bg-pos-top" autoplay muted loop playsinline src="/bg.mp4"></video> <!--bg-contacts.mp4 -->
        </transition>
        

    </div>
</template>
<script>
export default {
    mounted(){
        //video = this.$store.getters.getVideo();
    },
    data() {
        return {
            video:  this.$store.getters.getVideo,
            docState: 'saved'
        }
    }
}
</script>