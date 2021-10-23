<template>
<div class="w-100">
    <div class="title-about-rive m-0">
        <div class="title-about-rive-left title-about-rive-long"></div>
        <div class="title-about-rive-content   d-flex align-items-center flex-center justify-content-md-start  title-about-rive-p-left">

            <span class="text-title-middle  text-thin box-shadow-title text-spacing1 text-upper" >
                            {{title}}
                        </span>

        </div>
        <div class="title-about-rive-right title-about-rive-long--invert d-block d-sm-none"></div>
    </div>

    <div class="title-about-rive-text d-flex title-about-rive-p-left ">

        <div class="about-coub-container d-flex flex-center">
            <div class="icon-wrapper-about-main ">
                <simple-svg ref="navigation" :filepath="icon" class="icon icon-blue">
                </simple-svg>
            </div>

            <div class="about-coub--static">
                <div class="about-coub-move box-shadow-blue-icon"></div>
                <div class="about-coub-move box-shadow-blue-icon"></div>

            </div>
        </div>

        <div class="  text-title-small text-thin text-center text-md-left"></div>

    </div>
    <div class="marg"></div>
    <div class="  text-title-small text-thin container-fluid">
        <slot></slot>
    </div>

</div>
</template>

<script>
import coube from '~/components/solutions/coube.vue'
export default {
    props: ['icon', 'title'],
    components: {
         coube: coube,
    }
}
</script>
