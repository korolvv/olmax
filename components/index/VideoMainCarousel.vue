<template>
<div class="" style="min-height: 100%">

    <div class="container-fluid box-main-container d-flex align-items-end justify-content-center">
        <div class="w-100">
            <div class="row ">
                <div class="col-12 text-left">
                    <no-ssr>
                        <div class="d-inline-flex box-main-carousel flex-wrap flex-center w-100">

            <video-thumb href="/about/solutions/#solution1" icon="/svg/phone_icon.svg" src="/index/1.mp4" v-bind:class="{ active: $store.getters.getVideo == 1}" @click.prevent.native="$store.commit('setVideo', 1)"></video-thumb>
            <video-thumb href="/about/solutions/#solution2" icon="/svg/chip_icon.svg" src="/index/2.mp4" v-bind:class="{ active: $store.getters.getVideo == 2 }" @click.prevent.native="$store.commit('setVideo', 2)"></video-thumb>
            <video-thumb v-if="false" href="/about/solutions#solution3" icon="/svg/cloud_icon.svg" src="/index/3.mp4" v-bind:class="{ active: $store.getters.getVideo == 3 }" @click.prevent.native="$store.commit('setVideo', 3)"></video-thumb>
            <video-thumb href="/about/solutions/#solution4" icon="/svg/communication_icon.svg" src="/index/4.mp4" v-bind:class="{ active: $store.getters.getVideo == 4 }" @click.prevent.native="$store.commit('setVideo', 4)"></video-thumb>

    </div>
    </no-ssr>
</div>
</div>
</div>

</div>
</div>
</template>

<script>
import videoThumb from '~/components/index/video-thumb.vue'

export default {
    mounted() {
        // video = this.$store.getters.getVideo();
    },
    components: {
        'video-thumb': videoThumb,
    },
    data() {
        return {
            video: this.$store.getters.getVideo,
            docState: 'saved'
        }
    }
}
</script>
