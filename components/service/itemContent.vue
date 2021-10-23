<template>
    <div :class="item.pos === 'left'? 'title-about-rive-text title-about-rive-p-left': 'title-about-rive-text-right title-about-rive-p-right'" class="justify-content-center  d-flex">
    
        <div class="about-coub-container d-flex flex-center">
            <div class="icon-wrapper-about-main ">
                <simple-svg v-if="item.svg" ref="navigation" :filepath="item.svg" class="icon icon-blue icon-stroke0">
                </simple-svg>
            </div>
    
            <div class="about-coub--static">
                <div class="about-coub-move box-shadow-blue-icon"></div>
                <div class="about-coub-move box-shadow-blue-icon"></div>
    
            </div>
        </div>
        <div class="text-title-small text-thin text-center inner" v-html="item.desc"></div>
    </div>
</template>

<script>
export default {
    props: ['item', 'index']
}
</script>
