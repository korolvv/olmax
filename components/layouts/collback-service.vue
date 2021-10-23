<template>
<popup @close="$emit('close')">
    <template slot="bg" >
         <video   class="media-bg-cover" autoplay muted loop playsinline src="/popup.mp4"></video>
         <div class="media-bg media-bg-black02"></div>
    </template>
    <template slot="title">
        <span class="text-middle text-white text-shadow-blue text-title-middle text-upper text-center text-spacing1 text-thin">{{title}}</span>
    </template>
    <template slot="content">
        
        <div class="d-flex flex-center">
            <div class="s-form  d-flex flex-center">

                <div class="s-inner">
                    <div class="row flex-nowrap ">
                        <div class="col">
                            <form-custom url="/feedback/api/new-feedback" groupInfo="service_form1_info" groupItem="service_form1" ></form-custom>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>
</popup>
</template>

<script>
import popup from './popup.vue'
import FormCustom from '~/components/layouts/FormCustom'
export default {
    components: {
        popup, FormCustom
    },
    props: ['title']
}
</script>
