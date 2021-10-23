<template>
    <div>
        <div class="marg2"></div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <breadcrumbs group="about_head"> </breadcrumbs>
                </div>
            </div>
        </div>
        <div class="marg2"></div>
        <div class="container">
            <div class="row">
                <div class="col-8 col-sm-6 d-flex flex-center">
    
                    <data-btn :groups="['about_desc']" class="d-block-inline">
                        <span class="text-title-middle   text-upper  text-shadow-blue text-spacing2">
                                        {{$GD('about_desc.title')}}
                                    </span>
                        <div class="marg"></div>
                        <span class="text-title-small text-thin" v-html="$GD('about_desc.desc')">
                
                                    </span>
    
                        <div class="marg15"></div>
                    </data-btn>
    
                </div>
                <div class="col-4 col-sm-6 d-flex flex-center flex-column">
    
                    <div class="about-coub-container d-flex flex-center">
                        <div class="icon-wrapper-about-main ">
                            <simple-svg ref="navigation" :filepath="'/about/icon_main.svg'" class="icon icon-blue">
                            </simple-svg>
                        </div>
    
                        <div class="about-coub">
                            <div class="about-coub-move box-shadow-blue-icon"></div>
                            <div class="about-coub-move box-shadow-blue-icon"></div>
                            <div class="about-coub-move box-shadow-blue-icon"></div>
                            <div class="about-coub-move box-shadow-blue-icon"></div>
                        </div>
                    </div>
                    <div class="marg15"></div>
                </div>
            </div>
        </div>
    
        <data-btn :groups="['about_desc2']" class="text-center">
            <span class="text-title-middle   text-upper  text-shadow-blue text-spacing2">
                        {{$GD('about_desc2.title')}}
                    </span>
            <div class="marg05"></div>
    
            <span v-html="$GD('about_desc2.desc')" class="text-title-small  text-center">
                
                    </span>
        </data-btn>
    
        <div class="marg15"></div>
        <data-btn :groups="['about_item']">
            <div v-for="(item, index) in $GDG('about_item')" :key="index" class="title-about-rive">
                <div class="title-about-rive-left"></div>
                <div v-html="$GD('desc', item)" class="title-about-rive-content d-flex align-items-center"></div>
                <div class="title-about-rive-right--invert d-block d-sm-none"></div>
            </div>
        </data-btn>
    
        <div class="marg15"></div>
        <data-btn :groups="['about_round_title']" class="text-center">
            <span class="text-title-middle   text-upper  text-shadow-blue text-spacing2">
                {{$GD('about_round_title.title')}}
                </span>
        </data-btn>
    
        <div class="marg15"></div>
    
        <div class="d-flex flex-center">
    
            <navigation></navigation>
        </div>
        <div class="marg15"></div>
    </div>
</template>

<script>
import navigation from "~/components/layouts/AboutNavigation";
export default {
    auth: false,
    head() {
        return {
            title: this.$GD('about_head.title')
        }
    },

    components: {
        navigation: navigation
    },
    data() {
        return {

        };
    }
};
</script>
