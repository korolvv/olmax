<template>
<div>
    <div class="marg2"></div>
    <div class="container">
        <div class="row">
            <div class="col">
                <breadcrumbs group="projects_head"> </breadcrumbs>
            </div>
        </div>
    </div>
    <div class="marg2"></div>
    <data-btn :groups="['project_tabs']" class="row no-gutters justify-content-between d-none d-sm-flex">

        <div class="col-5 d-flex">
            <div class="title-box-wrapp box-contacts">
                <div class="row no-gutters w-100">
                    <div class="col-3 d-flex">
                        <div class="title-tringle--left-long"></div>
                    </div>
                    <div class="col-9 d-flex">
                        <a href="#" @click.prevent="type = 'gos'" class="title-box d-flex flex-center">
                                <div class="d-flex flex-center box-contacts-inner">
                                    <div class="icon-wrapper-contacts2-large ">
                                        <simple-svg ref="navigation" :filepath="'/clients/house.svg'" class="icon icon-blue">
                                        </simple-svg>
                                    </div>
                                </div>
    
                                <div class="box-contacts-inner flex-column justify-content-around flex-center">
                                    <span v-html="$GD('project_tabs.tab1')" class="text-middle text-shadow-blue text-title-small text-upper text-center text-spacing1 text-thin" style="padding-right: 2rem"></span>
                                </div>
                            </a>
                        <div class="title-tringle--right-r"></div>
                    </div>
                </div>
            </div>

        </div>

        <div class="col-2 d-flex mx-auto">

        </div>

        <div class="col-5 d-flex">
            <div class="title-box-wrapp box-contacts--right">
                <div class="row no-gutters w-100">

                    <div class="col-9 d-flex">
                        <div class="title-tringle--left-r"></div>

                        <a href="#" @click.prevent="type = 'com'" class="title-box d-flex flex-center">
                                <div class="d-flex flex-center box-contacts-inner">
                                    <div class="icon-wrapper-contacts2-large ">
                                        <simple-svg ref="navigation" :filepath="'/clients/portfolio.svg'" class="icon icon-blue">
                                        </simple-svg>
                                    </div>
                                </div>
    
                                <div class="box-contacts-inner flex-column justify-content-around flex-center">
                                    <span v-html="$GD('project_tabs.tab2')" class="text-middle text-shadow-blue text-title-small text-upper text-center text-spacing1 text-thin" style="padding-right: 2rem"></span>
                                </div>
                            </a>

                    </div>
                    <div class="col-3 d-flex">
                        <div class="title-tringle--right-long"></div>
                    </div>
                </div>
            </div>

        </div>

    </data-btn>
    <div class="marg15"></div>
    <div class="box-content">
        <data-btn :groups="['project_item']" class="container">
            <div class="row">
                <div class="col">

                    <no-ssr>
                        <carousel class="row pagination-custom" :scrollPerPage="true" :perPageCustom="[[320, 2], [768, 4]]" paginationActiveColor="grey" :paginationSize="15" :paginationPadding="10">
                            <slide class="col-6 col-md-3  " v-if="index%2 === 0" v-for="(item, index) in items" :key="index">
                                <a @click.prevent="showPopup(item)" href="#" class="box-sqr50 box-partner box-hide-container box-contacts--top">
                                        <div class="media-bg flex-center d-flex box-contacts-inner">
    
                                            <span class="text-middle text-blue-light  text-title-small text-upper text-center text-spacing1 text-thin">{{$GD('title', item)}}</span>
                                        </div>
                                        <div class="media-bg flex-center d-flex box-contacts-inner">
                                            <span class="text-middle text-white text-title-small text-upper text-center text-spacing1 text-thin">{{$GD('project_tabs.btn_more')}}</span>
                                        </div>
                                    </a>
                                <a v-if="items[index+1]" @click.prevent="showPopup(item)" href="#" class="box-sqr50 box-partner box-hide-container box-contacts--top">
                                        <div class="media-bg flex-center d-flex box-contacts-inner">
    
                                            <span class="text-middle text-blue-light  text-title-small text-upper text-center text-spacing1 text-thin">{{$GD('title', item)}}</span>
                                        </div>
                                        <div class="media-bg flex-center d-flex box-contacts-inner">
                                            <span class="text-middle text-white text-title-small text-upper text-center text-spacing1 text-thin">{{$GD('project_tabs.btn_more')}}</span>
                                        </div>
                                    </a>
                            </slide>
                        </carousel>
                    </no-ssr>
                    <div class="marg"></div>
                </div>
            </div>
        </data-btn>

    </div>
    <transition name="page">
        <popup @close="close" v-if="$store.state.popupShow">
            <template slot="bg">
                <video   class="media-bg-cover" autoplay muted loop playsinline src="/popup.mp4"></video>
                <div class="media-bg media-bg-black02"></div>
            </template>

            <template slot="title">
                <span class="text-middle text-white text-shadow-blue text-title-middle text-upper text-center text-spacing1 text-thin">{{popupTitle}}</span>
            </template>

            <template slot="content">
                <span v-html="popupDesc"></span>
            </template>
        </popup>
    </transition>
</div>
</template>

<script>
import Popup from "~/components/layouts/popup";
export default {
    auth: false,
    head() {
        return {
            title: this.$GD("projects_head.title")
        };
    },

    components: {
        Popup
    },
    data() {
        return {
            type: false,
            popupTitle: '',
            popupDesc: '',
        };
    },
    computed: {
        items() {
            var items = [];
            if (this.type) {
                this.$GDG("project_item").forEach(item => {

                    if (this.$GD('type', item) == this.type) {
                        console.log(this.type)
                        items.push(item);
                    }

                });
               return items;

            } else {
                return this.$GDG("project_item");
            }
        },
    },
    methods: {

        showPopup(item) {
            this.popupDesc = this.$GD('desc', item);
            this.popupTitle = this.$GD('title', item);
            this.$store.state.popupShow = true;
        },
        close() {
            this.$store.state.popupShow = false;
        }
    }
};
</script>
