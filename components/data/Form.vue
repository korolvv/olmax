<template>
<div class="form-data-wrap">
    <div class="form-data" ref="form-data">
        <div class="form-data-inner">
             
            <!-- ------ -->

            <div class="data-form-container">
                <div class="data-form-title">
                    <div class="inner">{{title}}</div>
                </div>
                <div class="data-form-inner">
                    <table class="data-table">
                        <tbody>
                            <tr class="">
                                <th class="  " v-for="(field, index_fields) in newGroup" :key="index_fields">
                                    <div class="form-gorup text-center">
                                        <label class="data-label">{{field.label}}</label>                                
                                    </div>
                                </th>
                                <th class=" text-center">
                                    <label class="data-label">Действия</label>
                                </th>
                            </tr>
                            <tr class="">
                                <th class="  " v-for="(field, index_fields) in newGroup" :key="index_fields">
                                    <div class="form-gorup text-center">
                                       
                                        <data-input @textEdit="openEditor(field)" v-model="field.value" :fileUrl="field.fileUrl" :type="field.typeField" :name="field.inputName" :ref="field.inputName" :options="newGroup[index_fields].select">
                                        </data-input>

                                    </div>
                                </th>
                                <th class=" text-center">
                                    <svg-sprite @click.native="create" name="add"></svg-sprite>
                                </th>
                            </tr>
                        </tbody>

                        <draggable @end="updateSort" element="tbody" v-model="fields" :options="{animation:200}">

                            <tr class="effect" v-for="(group, index) in fields" :key="index">
                                <td class="" v-for="(field, index_fields) in group.vals" :key="index_fields">
                                    <div class="form-gorup text-center">

                                        <data-input :fileUrl="field.fileUrl" :thumb="field.images.thumb" @change="updateVal(field)" @textEdit="openEditor(field)" v-model="field.value" :type="field.typeField" :name="field.inputName" :ref="field.inputName" :options="newGroup[index_fields].select">
                                        </data-input>

                                    </div>
                                </td>
                                <td class="text-center">
                                    <a href="#" @click.prevent="deleteItem(group.id)" class="text-center"><svg-sprite name="delete"></svg-sprite></a>
                                </td>

                            </tr>

                        </draggable>
                    </table>
                </div>

                <div class="data-form-select">
                    <ul class="data-form-language">
                        <li 
                        @click="setLang(item)"
                        :class="lang_code === item? 'active': ''"
                        v-for="(item, index ) in languages" :key="index" :value="item">{{item}}</li>
                    </ul>
                </div>
            </div>
            <data-loadbar :image="indicatorImage" v-if="loadIndicator"></data-loadbar>
            <!-- -------- -->

            <data-modal-editor @close="updateVal(editModel()); closeEditor();" v-if="editModel()" :type="editModel().typeField" v-model="editModel().value"></data-modal-editor>

        </div>
    </div>
 <!--   <notyx ref="notyx"></notyx> -->
</div>
</template>

<script>
import input from './input.vue';
import Vue from 'vue';
import draggable from 'vuedraggable';
import dataLoadbar from './data-loadbar'
import mixins from './mixins';
import modalEditor from './data-modal-editor'
import svgSprite from './svg-sprite'
export default {
    mixins: [mixins],
    props: ['language', 'groupName'],
    data() {
        return {
            lang_code: 'ru',
            languages: [],
            indicatorImage: '/indicator.gif',
            newGroup: {},
            fields: [],
            image: '',
            edGroup: false,
            edIndex: false,
            editModelVar: false,
            title: ''
        }
    },
    mounted() {

        if (this.language)
            this.lang_code = this.language;
        this.updateItems();

    },
    methods: {
        editModel() {
            return this.editModelVar;
        },
        openEditor(model) {
            this.editModelVar = model;
        },
        closeEditor() {
            this.editModelVar = false;
        },
        setLang(item){
            this.lang_code = item;
            this.updateItems();
        },
        updateItems() {
            var self = this;
            var url = process.env.apiUrl+'/data/api/form?category='+this.groupName+'&language=' + this.lang_code;
            this.sendRequest('get', url, {} ,false, function (response) {
                    self.newGroup = response.data.newField;
                    self.fields = response.data.fields;
                    self.languages = response.data.languages;
                    self.title = response.data.title;
                })
        },

        create() {
            var url = process.env.apiUrl+'/data/api/create-field?category='+this.groupName+'&language=' + this.lang_code;
            var form = this.getFormData(this.newGroup, 'inputName')
            this.sendRequest('post', url, form ,true, () => this.updateItems());
        },
        deleteItem(id) {
            var url = process.env.apiUrl+'/data/api/' + id;
            this.sendRequest('delete', url, {} ,false, () => this.updateItems());
             
        },
        updateSort() {
            var data = {
                values: []
            };
            for (var i = 0; i < this.fields.length; i++) {
                data.values.push(this.fields[i].id)
            }

            var url = process.env.apiUrl+'/data/api/sort?category='+this.groupName;
            this.sendRequest('post', url, data );

        },
        updateVal(val) {
            if (!val.isNew) {
                var form = new FormData();
                var el = this.$refs[val.inputName][0].owner();
                if (!el.files) {
                    form.append('value', el.value);
                } else {
                    form.append('value', el.files[0]);
                }
                var url = process.env.apiUrl+'/data/api/update-val?id=' + val.id;
                this.sendRequest('post', url, form ,true, () => this.updateItems());
            }
        },

    },
    components: {
        'data-input': input,
        draggable,
        'data-modal-editor': modalEditor,
        'svg-sprite': svgSprite,
        'data-loadbar': dataLoadbar
    }
}
</script>

<style lang="scss">
$data-control-color: transparent;
$data-control-text-color: white;
$data-form-bg: #24323d;
$data-control-border: #73818a;
$data-control-border-width: 1px;
$data-border-container-color: #1ab188;
$data-border-container-width: 1px;

.data-form-container {
    border-width:  $data-border-container-width;
    border-top-width: 0;
    border-color: $data-border-container-color;
    border-style: solid;
    &:before,
    &:after{
        content: ' ';
        width: 100%;
        display: table;
    }
}

.data-form-inner {
    padding: 50px;
}
.data-form-language{
    color: $data-control-border;
    text-transform: uppercase;
    margin: 0;
    margin-bottom: 5px;
    padding: 0;
    list-style: none;
    display: inline-block;
    li{
        padding: 5px;
        display: inline-block;
        &.active{
             
            color: $data-border-container-color;
        }
        cursor: pointer;
    }
}
.data-form-select{
   text-align: center;
}
.data-form-title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
        margin-top: -25px;
    white-space: nowrap;
    &:before,
    &:after {
        display: block;
        width: 100%;
        height: $data-border-container-width;
        background-color: $data-border-container-color;
        
        content: ' ';
    }

    .inner {
        padding: 0 50px;
    }
}

.form-data-wrap {
    width: 100%;
    height: auto;
    position: relative;
    letter-spacing: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
     
}

.form-data {
    position: relative;
    width: 100%;
    background-color: $data-form-bg;
    padding: 30px;
}

.flip-list-move {
    transition: transform 1s;
}

.effect {
    transition: all 0.2s;
}

.data-image {
    height: 30px;
    transition: transform 0.2s;
    cursor: pointer;

    &:hover {
        transform: scale(3);
        z-index: 2;
    }
}
 

.data-label {
    display: block;
    color: $data-control-text-color;
    padding-bottom: 5px;
    margin: 0 5px 10px 5px;
    color: white;
     border-bottom: 1px solid $data-border-container-color;
}

.data-controll {
    width: 100%;
    height: 35px;
    border-radius: 0;
    color: $data-control-text-color;
    background-color: $data-control-color;
    border: $data-control-border-width solid $data-control-border;
    padding: 0 5px;

}

.data-table {
    letter-spacing: normal;
    width: 100%;
    border-collapse: collapse;
    td, th{
        padding: 5px;
        
    }
    tr:first-child td{
        padding-top: 15px;
    }
    th{
        padding-bottom: 15px;
        font-weight: normal;
         
         
    }
}
</style>
