<template>
<div class="gallery-popup-wrapp">
    <div  class="popup-close" @click="$emit('close')"></div>
<div  ref="prev" @click="prevSlide('gallery')" class='gallery-prev'></div>
    <no-ssr>

        <carousel ref="gallery" class="gallery-popup-carousel pagination-custom" :scrollPerPage="true" :perPageCustom="[[320, 1]]" paginationActiveColor="#2769ac" :paginationSize="15" :paginationPadding="10">

            <slide class=" gallery-popup" v-for="(item, i) in items" :key="i">
                <div class="gallery-popup-image">
                    <div class="media-bg">
                        <img :src="$GDIMG('image', item, 'original')" alt="" class="media-bg-cover" />
                    </div>
                    </div>
                    <div class="gallery-popup-title"> 
                        <span class="text-middle text-white text-shadow-blue text-title-small text-upper text-center text-spacing2 text-thin">{{$GD('title', item)}}</span>

                    </div>

            </slide>
        </carousel>
    
    </no-ssr>
<div  ref="next" @click="nextSlide('gallery')" class='gallery-next'></div>
</div>
</template>

<script>
export default {
    props: ['items'],
    data() {
        return {
            images: [
                '/solutions/1.jpg',
                '/solutions/2.jpg',
                '/solutions/3.jpg'
            ]
        }
    },
    methods: {
        nextSlide(carousel) {
        this.$refs[carousel].goToPage(this.$refs[carousel].getNextPage());
        },
        prevSlide(carousel) {
        this.$refs[carousel].goToPage(this.$refs[carousel].getPreviousPage());
        },
    }
}
</script>
