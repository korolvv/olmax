<template>
<div class="about-coub-container--response d-flex flex-center">

    <a href="#" class="box-contacts--fade no-hover"  @mouseover="activeVideo = 1; $emit('over') " @mouseout="activeVideo = 0 ; ; $emit('out')" >
        <div class="about-coub-zoom">
        <div class="about-coub-inner-r  flex-center  box-contacts-inner" >
            <div v-if="icon" class="icon-wrapper-solutions ">
                <simple-svg ref="navigation" :filepath="icon" class="icon icon-blue">
                </simple-svg>
            </div>
            <div class="text-center" v-else>
                <span class="text-title-middle-large text-thin box-shadow-title text-spacing1 text-upper text-height15">{{title}}</span>
            </div>
        </div>
        <div class="about-coub-inner-r   flex-column justify-content-around box-contacts-inner">

            <div class="about-coub-title text-left">
                <span class="text-title-middle text-thin box-shadow-title text-spacing1 text-upper">{{title}}</span>
            </div>
            <scrollbar classes="about-coub-content" ref="Scrollbar">
                <div class="about-coub-content-inner text-thin">
                    <slot>Слот содержимого</slot>
                    <div class="clearfix"></div>
                </div>
            </scrollbar>
            
        </div>

    <div class="about-coub--response" >
        <!-- <div class="about-coub-move box-shadow-blue-icon"></div> -->
        <div class="about-coub-move box-shadow-blue-icon"></div>
        <div class="about-coub-inner hidden">
             
        </div>
        <div class="media-bg media-bg-black05"></div>
    </div>
    <span v-if="gallery" @click.prevent="$emit('gallery')" class="gallery-btn">
        <div class="media-bg d-flex flex-center media-bg-black05">
            <img v-if="gallery_icon_image" :src="gallery_icon_image" class="media-bg-cover" alt="">
            <simple-svg v-if="gallery_icon_svg" ref="navigation" :filepath="gallery_icon_svg" class="icon  icon-wrapper-coub">
            </simple-svg>
            
        </div>
        <div v-if="textMore" class="gallery-more">
            
             <span class="text-middle text-white text-shadow-blue text-title-small text-upper text-center text-spacing2 text-thin">{{textMore}}</span>
        </div>
    </span>
    </div>
    </a>
</div>
</template>

<script>
import Vue2Scrollbar from 'vue2-scrollbar';
export default {
    props: ['title', 'icon', 'video', 'gallery', 'gallery_icon_svg', 'gallery_icon_image', 'textMore'],
    data() {
        return {
            activeVideo: 0,
            text: 'Комплекс работ по созданию ИТ-инфраструктуры представляет собой: <br>' +
                '- Консалтинговые услуги для конкретного решения ваших бизнес-задач. <br>' +
                '- Установку программного обеспечения, необходимого оборудования и его запуск (вы получаете оборудование «под ключ» — уже настроенное и готовое к эксплуатации). <br>' +
                '- Внедрение программно-аппаратной платформы (при необходимости для удобства клиентов можем совмещать наше программное обеспечение предприятия с другими, например, 1С, CRM). <br>' +
                '- Сервисное обслуживание всего пакета услуг.'
        }
    },
    methods: {
        href() {
            console.log('href');
        }
    },
    components: {
        scrollbar: Vue2Scrollbar,
    }
}
</script>
