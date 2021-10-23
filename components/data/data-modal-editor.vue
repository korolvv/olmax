<template>
<div class="data-editor-wrapper">
    <div @click="close()" class="data-editor-close"></div>

    <vue-editor :editorOptions="editorSettings" v-if="type === 'html' || type === 'news'" ref="editor" v-model="innerValue" class="data-editor"></vue-editor>
    <textarea v-else v-model="innerValue"  class="data-editor" cols="30" rows="10"></textarea>
</div>
</template>

<script>
import Vue from 'vue';
//Vue.component('vue-editor', () => import('vue2-editor').then(c => c.VueEditor));

import {
    VueEditor,
    Quill
} from 'vue2-editor';


        var Delta = Quill.import('delta');
        let Break = Quill.import('blots/break');
        let Embed = Quill.import('blots/embed');
        

export default {
    mounted() {
        this.innerValue = this.value;
        if(this.type === 'html' || this.type === 'news'){
            var quill = this.$refs['editor'].quill;
            var length = quill.getLength()
            var text = quill.getText(length - 2, 2)
            console.log(this.editorSettings)
            // Remove extraneous new lines
            if (text === '\n\n') {
                quill.deleteText(quill.getLength() - 2, 2)
            }
        }
    },
    beforeCreate() {
        if(this.$options.propsData.type === 'html' || this.$options.propsData.type === 'news'){

            console.log('isHTML');
        var Size = Quill.import('attributors/style/size');
        Size.whitelist = ['', '12px', '14px', '16px', '18px'];
        Quill.register(Size, true);
           

        //-------- Перенос строки
         

         

        class SmartBreak extends Break {
            length() {
                return 1
            }
            value() {
                return '\n'
            }

            insertInto(parent, ref) {
                Embed.prototype.insertInto.call(this, parent, ref)
            }
        }

        SmartBreak.blotName = 'break';
        SmartBreak.tagName = 'BR'

        Quill.register(SmartBreak)
        }
          
    },
    components: {
        'vue-editor': VueEditor
    },
    data() {
        var self = this;
        var editorSettings = {};
        if(this.type === 'html' || this.type === 'news'){
        editorSettings =  {
                modules: {
                  
                    toolbar: {
                        container: [
                            [{
                                'size': ['', '12px', '14px', '16px', '18px']
                            }],
                            ['bold', 'italic', 'underline', 'strike'],
                            ['blockquote', 'code-block'],
                            [{
                                'color': []
                            }, {
                                'background': []
                            }], // dropdown with defaults from theme
                              
                            [{
                                align: ''
                            }, {
                                align: 'center'
                            }, {
                                align: 'right'
                            }, {
                                align: 'justify'
                            }],
                            [{
                                list: "ordered"
                            }, {
                                list: "bullet"
                            }],
                            ['clean', 'customBtn'],

                        ],
                        handlers: {
                            customBtn: () => {
                                var value = prompt('Enter Hex/RGB/RGBA');
                                this.$refs['editor'].quill.format('color', value);

                            },
                            fontSizeBtn: () => {
                                var value = prompt('Enter font size (15px)');
                                this.$refs['editor'].quill.format('size', value);

                            }
                        }
                    },
                    clipboard: {
                        matchers: [
                            ['BR', self.lineBreakMatcher]
                        ]
                    },
                    keyboard: {
                        bindings: {
                            linebreak: {
                                key: 13,
                                shiftKey: true,
                                handler: function (range) {
                                    var quill = self.$refs['editor'].quill;
                                    let currentLeaf = quill.getLeaf(range.index)[0]
                                    let nextLeaf = quill.getLeaf(range.index + 1)[0]

                                    quill.insertEmbed(range.index, 'break', true, 'user');

                                    // Insert a second break if:
                                    // At the end of the editor, OR next leaf has a different parent (<p>)
                                    if (nextLeaf === null || (currentLeaf.parent !== nextLeaf.parent)) {
                                        quill.insertEmbed(range.index, 'break', true, 'user');
                                    }

                                    // Now that we've inserted a line break, move the cursor forward
                                    this.quill.setSelection(range.index + 1, Quill.sources.SILENT);
                                }
                            }
                        }
                    }
                },

            };
            if( this.type === 'news')
            editorSettings.modules.toolbar.container.push([ 'link', 'image' ])
            }
            console.log('editorSettings###')
            console.log(this.type)
        return {
            innerValue: '',
            editorSettings: editorSettings
        }
    },
    methods: {
        close() {
            var self = this;
            this.$emit('input', this.innerValue);
            setTimeout(function () {
                self.$emit('close')
            }, 50);
        },
        lineBreakMatcher() {
            var newDelta = new Delta();
            newDelta.insert({
                'break': ''
            });
            return newDelta;
        }
    },
    props: ['type', 'value']
}
</script>

<style lang="scss">
.data-editor-wrapper {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    top: 0;
    height: 100%;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;

}

.data-editor {
    background-color: #fff;
    color: black;
    width: 100%;
    max-width: 700px;
    transition: all .2s;
    max-height: 80vh;
    overflow-y: auto;
}

.data-editor-close {
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

.ql-customBtn:before {
    content: '#A';
    color: red;
    font-weight: bold;
}

.ql-fontSizeBtn:before {
    content: 'Size';
    color: green;
}

.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=""]::before {
    content: 'Normal';
    font-size: 12px !important;
}

.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="12px"]::before {
    content: '12px';
    font-size: 12px !important;
}

.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="14px"]::before {
    content: '14px';
    font-size: 14px !important;
}

.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="16px"]::before {
    content: '16px';
    font-size: 16px !important;
}

.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="18px"]::before {
    content: '18px';
    font-size: 18px !important;
}
</style>
