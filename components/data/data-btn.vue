<template>
<div :style="getStyle" ref="wrapp">
    <slot>

    </slot>

    <div class="data-btn-info" v-if="edit_()">
        <div class="data-btn-info-inner"></div>
        <div @click="$setDataGroups(groups)" class="data-btn">Edit</div>
    </div>
</div>
</template>

<script>
export default {
    props: ['groups'],
    data() {
        return {
            isMounted: false,
        }
    },
    computed: {
        getStyle(){
            var style = '';
            if (this.edit_() && this.isMounted) {
                var nowStyle = window.getComputedStyle(this.$refs.wrapp);
                 
                if (nowStyle.position === 'static' ) {
                    style+= ' position: relative; ';
                } 
                if (parseInt(nowStyle.minHeight, 10) < 40) {
                    style+= ' min-height: 40px !important;';
                }
            }
            return style;
        }
    },
    mounted() {
         this.isMounted = true;
    }
}
</script>

<style lang="scss">
.data-btn-wrapper {
    min-height: 100px !important;
}

.data-btn {
    position: relative;
    top: 0;
    right: 0;
    z-index: 2;
    background-color: #24323d;
    padding: 10px;
    cursor: pointer;
    z-index: 11;
    &:hover {
        background-color: lighten(#24323d, 10%);
    }

}

.data-btn-info,
.data-btn-info-inner {
    transition: 0.2s;
    z-index: 10;
    position: absolute;
    top: 0;
    left: 10px;
    width: calc(100% - 20px);
    height: calc(100% );
    background-color: rgba(255, 255, 255, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px dashed darkslategrey;

    &:hover {
        background-color: rgba(255, 255, 255, 0.5);
    }
}

.data-btn-info-inner {
     top: 15px;
    left: 15px;
    width: calc(100% - 30px);
    height: calc(100% - 30px);
    background-color: transparent !important;
}
</style>
