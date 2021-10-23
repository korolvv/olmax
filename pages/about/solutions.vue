<template>
<div>
    <div class="marg2"></div>
    <div class="container">
        <div class="row">
            <div class="col">
                <breadcrumbs group="solutions_head"> </breadcrumbs>
            </div>
        </div>
    </div>
    <div class="marg2"></div>
    <no-ssr>
        <mq-layout class="container" :mq="['md', 'lg']">
            <div class="row no-gutters ">

                <data-btn :groups="['solutions_item1', 'solutions_photo1']" class="col-5  offset-1" id="solution1" ref="solution1">
                    <div class="about-coub-wrap">
                        <coube :textMore="$GD('solutions_item1.btn')" :gallery_icon_image="$GDIMG('solutions_item1.btn_image', false,'small')" :gallery="true" @gallery="galleryShow = true; items = $GDG('solutions_photo1')" class="about-coub-container--left  about-coub-container--first" :title="$GD('solutions_item1.title')" icon="/svg/phone_icon.svg" >
                            <span v-html="$GD('solutions_item1.desc')"></span>
                        </coube>
                    </div>
                </data-btn>
                <div class="col-12" id="solution2" ref="solution2"></div>
                

                <data-btn :groups="['solutions_item2', 'solutions_photo2']" class="col-5  offset-6">
                    <div class="about-coub-wrap">
                        <coube :textMore="$GD('solutions_item2.btn')" :gallery_icon_image="$GDIMG('solutions_item2.btn_image', false,'small')" :gallery="true" @gallery="galleryShow = true; items = $GDG('solutions_photo2')" class="about-coub-container--right" :title="$GD('solutions_item2.title')" icon="/svg/chip_icon.svg" >
                            <span v-html="$GD('solutions_item2.desc')"></span>
                        </coube>
                    </div>
                </data-btn>

                <div id="solution3" ref="solution3" class="clearfix"></div>
                <data-btn :groups="['solutions_item3', 'solutions_photo3']" class="col-5  offset-1" id="solution1" ref="solution1">
                    <div class="about-coub-wrap">
                        <coube :textMore="$GD('solutions_item3.btn')" :gallery_icon_image="$GDIMG('solutions_item3.btn_image', false,'small')" :gallery="true" @gallery="galleryShow = true; items = $GDG('solutions_photo1')" class="about-coub-container--left   " :title="$GD('solutions_item3.title')" icon="/svg/cloud_icon.svg" >
                            <span v-html="$GD('solutions_item3.desc')"></span>
                        </coube>
                    </div>
                </data-btn>
                 
                <div class="col-12" id="solution4" ref="solution4"></div>
                <data-btn :groups="['solutions_item4', 'solutions_photo4']" class="col-5  offset-6">
                    <div class="about-coub-wrap">
                        <coube :textMore="$GD('solutions_item4.btn')" :gallery_icon_image="$GDIMG('solutions_item4.btn_image', false,'small')" :gallery="true" @gallery="galleryShow = true; items = $GDG('solutions_photo4')" class="about-coub-container--right" :title="$GD('solutions_item4.title')" icon="/svg/communication_icon.svg" >
                            <span v-html="$GD('solutions_item4.desc')"></span>
                        </coube>
                    </div>
                </data-btn>
                

            </div>
            <div class="about-coub-container--last"></div>
        </mq-layout>
    </no-ssr>
    <no-ssr>
        <mq-layout class="row no-gutters" :mq="['xs', 'sm']">

            <div class="col-12">
                <block-info id="solution1" title="Обслуживание" icon="/svg/phone_icon.svg">
                    <span v-html="text" class="about-coub-content-res box-shadow-blue"></span>
                </block-info>

            </div>
            <div class="marg3"></div>
            <div class="marg05"></div>
            <div class="col-12">
                <block-info id="solution2" title="Аутсорсинг систем" icon="/svg/chip_icon.svg">
                    <span v-html="text" class="about-coub-content-res box-shadow-blue"></span>
                </block-info>

            </div>
            <div class="marg3"></div>
            <div class="marg05"></div>
            <div class="col-12">
                <block-info id="solution3" title="Заправка картриджей" icon="/svg/cloud_icon.svg">
                    <span v-html="text" class="about-coub-content-res box-shadow-blue"></span>
                </block-info>

            </div>
            <div class="marg3"></div>
            <div class="marg05"></div>
            <div class="col-12">
                <block-info id="solution4" title="Построение ИТ-инфраструктуры" icon="/svg/communication_icon.svg">
                    <span v-html="text" class="about-coub-content-res box-shadow-blue"></span>
                </block-info>

            </div>

            <div class="marg3"></div>
        </mq-layout>
    </no-ssr>
    <transition>
        <gallery :items="items" @close="galleryShow = false" v-if="galleryShow"></gallery>
    </transition>

</div>
</template>

<script>
import coube from "~/components/solutions/coube.vue";
import gallery from "~/components/solutions/gallery.vue";
import blockInfo from "~/components/solutions/block-info";
export default {
    auth: false,
    head() {
        return {
            title: this.$GD('solutions_head.title')
        }
    },
    mounted() {
        var str = this.$route.fullPath;
        var pos = str.search(/#/i);
        var self = this;
        if (pos) {
            var selector = str.substr(pos + 1);

            var el = this.$refs[selector];
            setTimeout(function () {
                var el = self.$refs[selector];
                if (el) {
                    console.log(selector);
                    var top = (el.offsetTop - 100); //Getting Y of target element
                    window.scrollTo(0, top);
                }
            }, 300);
        }
    },
    data() {
        return {
            items: [],
            activeVideo: 0,
            galleryShow: false,
            text: "Комплекс работ по созданию ИТ-инфраструктуры представляет собой: <br>" +
                "- Консалтинговые услуги для конкретного решения ваших бизнес-задач. <br>" +
                "- Установку программного обеспечения, необходимого оборудования и его запуск (вы получаете оборудование «под ключ» — уже настроенное и готовое к эксплуатации). <br>" +
                "- Внедрение программно-аппаратной платформы (при необходимости для удобства клиентов можем совмещать наше программное обеспечение предприятия с другими, например, 1С, CRM). <br>" +
                "- Сервисное обслуживание всего пакета услуг."
        };
    },
    components: {
        coube: coube,
        "block-info": blockInfo,
        gallery: gallery
    },
    methods: {
        getGallery(name) {
            var items = [];
            var group = $GDG(name);
            if (Array.isArray(group))
                forEach(function (item, i, arr) {
                    alert(i + ": " + item + " (массив:" + arr + ")");
                });

        }
    }
};
</script>
