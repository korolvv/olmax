<template>
    <div class="data-popup-wrapp">
         <div @click="$emit('close')" class="data-popup-close"></div>
         
        <div class="data-popup">
            <data-form @responseSucc="responseSucc" @responseError="responseError" :groupName="group" v-for="(group, index) in groups" :key="index" ></data-form>       
        </div>
        <notyx ref="notyx"></notyx>
    </div>
</template>
<script>
import DataForm from './Form'
import notyx from '~/devortix/notyx'

export default {
    components: {
        'data-form' : DataForm,
        'notyx' : notyx,
         
    },
    props: {
        groups: Array
    },
    methods: {
        responseSucc(response){
            if (response.data.status) {
                 
                if (response.data.status === 'success'){
                    this.$refs.notyx.show('success', 'Saved!');
                    }
                if (response.data.status === 'error') {
                    this.$refs.notyx.show('warning', response.data.message || 'WARNING!!', 5000);
                }
            }
        },
        responseError(error){
            
            this.$refs.notyx.show('error', error.response.status + ' ' + error.response.data.message, 5000);
        }
    }
    
}
</script>

<style lang="scss">
.data-popup-wrapp{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
}

.data-popup{
    width: 1100px;
    max-width: calc(100% - 60px);
    min-height: 200px;
    max-height: 90vh;
    overflow-y: auto;

}

.data-popup-head{
    
}

.data-popup-content{
    
}

.data-popup-close{
    
    position: absolute;
    width: 30px;
    height: 30px;
    top: 30px;
    right: 30px;
    cursor: pointer;

    &:before,
    &:after {
        content: ' ';
        height: 4px;
        width: 100%;
        background: #fff;
        transform: rotate(45deg);
        position: absolute;
        top: 50%;
        margin-top: -2px;
        left: 0;
        display: block;
    }

    &:after {
        transform: rotate(-45deg);
    }
 
}
</style>


