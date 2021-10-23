<template>
    <div :class="item.pos == 'left'?'title-about-rive':'title-about-rive-invert d-flex justify-content-end'">
        <div :class="(item.pos == 'right'?'d-block d-sm-none title-about-rive-long--invert':'title-about-rive-long')+transp()" class="title-about-rive-left"></div>
        <div :class="(item.pos == 'right'?'title-about-rive-p-right':'title-about-rive-p-left')+transp(true)" class="title-about-rive-content    d-flex flex-center  ">
    
            <span class="text-title-middle text-thin box-shadow-title text-spacing1 text-upper ">
                        {{item.title}}
                    </span>
    
        </div>
        <div :class="(item.pos == 'left'?'d-block d-sm-none title-about-rive-long--invert':'title-about-rive-long')+transp()" class="title-about-rive-right "></div>
    </div>
</template>

<script>
export default {
    props: ['item', 'index'],
    methods: {
        transp(border) {
            //return '';
            border = border ? ' media-bg-transparent-border ' : '';
            return this.index === 0 ? ' media-bg-transparent ' + border : '';
        }
    }
}
</script>
