<template>
<div class="popup-wrapper">
    <div class="media-bg box-hidden" > <slot name="bg" ></slot></div>
    <div class="popup">
        
        
        <a href="#" @click.prevent="$emit('close')" class="popup-close"></a>
        <scrollbar class="popup-inner">
            <div>
                  
                <div class="popup-title d-flex flex-center">
                    <slot name="title">Заголовок</slot>
                </div>
                <div class="popup-content">
                    <slot name="content">Содержание</slot>
                </div>
            </div>

        </scrollbar>

    </div>
</div>
</template>

<script>
import Vue2Scrollbar from 'vue2-scrollbar';
export default {
    mounted(){
        document.body.style.overflowY = "hidden";
    },
    beforeDestroy(){
        document.body.style.overflowY = "auto";
    },
    props: ['title'],
    methods: {

    },
    components: {
        scrollbar: Vue2Scrollbar,
    }
}
</script>
