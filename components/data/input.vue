<template>
    <input @click="$emit('textEdit')" @change="$emit('change')"  readonly="readonly "   v-if="type === 'html' || type ===  'text' || type ===  'news' " class="data-controll"  :type="type" :name="name" ref="owner" v-bind:value="value" v-on:input="$emit('input', $event.target.value)"/>

    <select @change="$emit('change')"  :name="name" ref="owner" v-else-if="type === 'select'" v-bind:value="value" v-on:input="$emit('input', $event.target.value)" class="data-controll">

                <option v-for="(option, index) in options" :key="index" v-bind:value="option.key">{{option.val}}</option>
            </select>
    <label v-else  >
        <input @change="$emit('change')"   style="display: none"  type="file" :name="name" ref="owner"   v-on:input="$emit('input', $event.target.value)" />
    <span> 
       
            <img v-if="thumb" class="data-image move" :src="thumb" alt=""> 
            <span v-else class="data-file-wrapper" >
                   

                <svg-sprite  :disable="!(fileUrl && fileUrl.length > 0)"   :name="type"></svg-sprite>
                <a v-if="fileUrl && fileUrl.length > 0" class="data-file-href" target="_blank" :href="fileUrl">
                    Ссылка на файл    
                </a> 
            </span>
            
    </span>
    </label>
</template>

<script>
import svgSprite from './svg-sprite'
export default {
    props: ['value', 'type', 'name', 'options', 'thumb', 'fileUrl'],
    components: {
        'svg-sprite': svgSprite

    },
    
    methods: {
        owner(){
            return this.$refs['owner']
        }
    }
}
</script>

<style lang="scss">
.data-file-wrapper{
    position: relative;
     .data-file-href{
        display: block;
        position: absolute;
        bottom: 0;
        transform: translateY(100%);
        left: 0;
        background-color: rgba(255,255,255, 0.6);
        color: darkolivegreen;
        display: none;
        padding: 8px;
        font-size: 10px;
    }
    &:hover .data-file-href{
        display: block;
        z-index: 2
    }
}
</style>


