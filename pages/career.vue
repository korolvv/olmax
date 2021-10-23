<template>
    <div id="career">
        <div class="marg2"></div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <breadcrumbs group="career_head"> </breadcrumbs>
                </div>
            </div>
        </div>
        <div class="marg2"></div>
        <no-ssr>
            <data-btn :groups="['career_item']">
                <mq-layout class="container" :mq="['md', 'lg']">
                    <div class="row no-gutters ">
    
                        <div v-for="(item, index) in items" :key="index" class="col-5" :class="index%2==0?' offset-1 ':' offset-6 '">
                            <div class="about-coub-wrap">
                                <coube @gallery="popupShow = true" gallery_icon_svg="/svg/attach.svg" :textMore="$GD('btn', item)" :gallery="true" :class="(index%2 === 0?' about-coub-container--left ':' about-coub-container--right ')+(index === 0?' about-coub-container--first ':'')"
                                    :title="$GD('title', item)">
                                    <span v-html="$GD('desc', item)"></span>
                                </coube>
                            </div>
                        </div>
                        <div class="col-12"></div>
    
    
                    </div>
                    <div class="row no-gutters about-coub-container--last" id="solution3" ref="solution3"></div>
                    <div class="clearfix"></div>
    
                </mq-layout>
            </data-btn>
        </no-ssr>
        <no-ssr>
            <mq-layout class="row no-gutters" :mq="['xs', 'sm']">
    
                <div class="col-12" v-for="(item, index) in items" :key="index">
                    <block-info :title="$GD('title', item)" icon="/svg/attach.svg">
                        <span v-html="$GD('desc', item)" class="about-coub-content-res box-shadow-blue"></span>
                    </block-info>
                    <div class="marg3"></div>
                    <div class="marg05"></div>
                </div>
    
            </mq-layout>
        </no-ssr>
        <transition name="page">
            <popup @close="popupShow = false" v-if="popupShow">
                <template slot="bg">
                        <video   class="media-bg-cover" autoplay muted loop playsinline src="/popup.mp4"></video>
                        <div class="media-bg media-bg-black02"></div>
</template>

<template slot="title">
    <span class="text-middle text-white text-shadow-blue text-title-middle text-upper text-center text-spacing1 text-thin">Резюме</span>
</template>

<template slot="content">
    <div class="d-flex flex-center">
        <div class="s-form  d-flex flex-center">
    
            <div class="s-inner">
                <div class="row flex-nowrap ">
                    <div class="col">
                        <form-custom url="/feedback/api/new-feedback" groupInfo="career_form_info" groupItem="career_form"></form-custom>
                    </div>
    
                </div>
    
            </div>
        </div>
    </div>
</template>
        </popup>
    </transition>
</div>
</template>

<script>
import coube from "~/components/solutions/coube.vue";
import blockInfo from "~/components/solutions/block-info.vue";
import Popup from '~/components/layouts/popup'
import FormCustom from '~/components/layouts/FormCustom'

export default {
    auth: false,
    head() {
        return {
            title: this.$GD('career_head.title')
        }
    },
    mounted() {

    },
    data() {
        return {
            items: this.$GDG('career_item'),
            activeVideo: 0,
            crambs: {},
            popupShow: false,
            text:

                'ТРЕБОВАНИЯ: <br />' +
                'Администрирование операционных систем семейства Windows, Active Directory Domain Services и типовые сервисы;<br>' +
                'Понимание аппаратной части IT-оборудования, умение диагностировать и устранять неполадки;<br>' +
                'Построения отказоустойчивых систем;' +
                'Опыт работы с сетевым и серверным; оборудованием, системами хранения данных;<br>' +
                'Опыт администрирования виртуальных сред (VmWare);<br>' +
                'Опыт администрирования сетевого оборудования HP (Aruba), Cisco, MicroTic, приветствуется наличие сертификатов;<br>' +
                'Опыт работы по настройке и администрированию сетей<br>'

        };
    },
    components: {
        coube: coube,
        "block-info": blockInfo,
        'popup': Popup,
        FormCustom
    },
    methods: {}
};
</script>
