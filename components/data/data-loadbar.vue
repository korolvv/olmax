<template>
    <div ref="indicator" class="data-indicator-wrapp">
        <img :src="image" alt="">
    </div>
</template>
<script>
export default {
    props: ['image'],
    mounted(){
        var self = this;
        this.indicatorWarning = setTimeout(function(){
               var el = document.createElement('div');
               el.className = "data-indicator-warning";
               el.innerText = 'Во вряме запроса возникла ошибка, пожалуйста обновите страницу';
               self.$refs.indicator.appendChild(el);
            }, 6000)
    },
    beforeDestroy(){
        clearTimeout(this.indicatorWarning)
    },
    methods: {
        
    }
}
</script>
<style lang="scss">

.data-indicator-wrapp {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.5);
    width: 100%;
    height: 100%;
}

.data-indicator-warning {
    position: absolute;
    width: 100%;
    top: 10%;
    left: 10%;
    letter-spacing: normal;
    color: red;
    width: 80%;
    text-align: center;
    font-size: 18px;
}
</style>

