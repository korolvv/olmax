<template>
    <data-btn :groups="[groupItem, groupInfo]">
        <div v-for="(item, index) in items" :key="index" class="form-group form-group-ol">
            <input v-model="values[index].value" :name="$GD('name', item)" ref="field" v-if="$GD('type', item) === 'text' || $GD('type', item) === 'email'" :placeholder="$GD('label', item)" :type="$GD('type', item)" :class="inputClass" />
            <textarea v-model="values[index].value" :name="$GD('name', item)" ref="field" v-if="$GD('type', item) === 'textarea'" :placeholder="$GD('label', item)" :class="inputClass"></textarea>
            <a @click.prevent="submitForm" href="#" v-if="$GD('type', item) === 'btn'" class="btn-default "><span class=" ">{{$GD('label', item)}}</span></a>
            <label v-if="$GD('type', item) === 'file'" class="btn-default "><span class=" ">{{$GD('label', item)}}</span><input ref="field" name="file"  type="file" class="d-none"  /></label>
            <span v-if="errors[index]" class="form-group-error">
                                {{errors[index]}}
                            </span>
        </div>
    
    </data-btn>
</template>

<script>
import axios from 'axios'
export default {
    props: ['groupItem', 'groupInfo', 'hiddenFields', 'url'],
    methods: {
        toast({ title, message, type, timeout, cb }) {
            return miniToastr[type](message, title, timeout, cb)
        },
        submitForm() {
            var self = this;
            if (this.validate()) {
                var form = new FormData();
                this.$refs['field'].forEach(el => {
                    if (!el.files) {
                        form.append(el.name, el.value);
                    } else {
                        form.append(el.name, el.files[0]);
                    }
                    form.append('name', this.name);

                });
                var url = process.env.apiUrl + this.url;
                var options = {
                    type: 'error',
                    theme: "toasted-primary",
                    duration: 2500,
                    position: 'top-center'
                }
                axios.post(url, form, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Accept': 'application/json'
                    },
                }).then(function(response) {
                    var msg = 'Send';
                    if (response.data.status === 'success') {
                        msg = self.sucessMessage;
                        options.type = 'success';
                        options.className = 'media-bg-blue-dark--i';
                        self.formReset();
                    }
                    if (response.data.status === 'error' && response.data.message) {
                        for (var first in response.data.message) break;
                        msg = response.data.message[first];
                        options.type = 'error';
                        options.className = '';
                    }
                    self.$toasted.show(msg, options)
                }).catch(function(error) {
                    options.type = 'error';
                    options.className = '';
                    self.$toasted.show(error.message, options)
                });
            }
        },
        validate() {
            var errors = [];
            this.values.forEach((el, index) => {
                if (el.required === 'yes' && el.value.length <= 0) {
                    errors[index] = el.error;
                }
                if (el.type === 'email' && !this.validEmail(el.value))
                    errors[index] = el.error;
            });
            this.errors = errors;
            if (errors.length > 0)
                return false;
            return true;
        },
        validEmail: function(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
        formReset(){
            var values = [];
            this.values.forEach((element, index) => {
                values[index] = element;
                values[index].value = '';
            });
            this.values = values;
        }
    },
    data() {
        return {
            values: [],
            sucessMessage: 'Send success',
            errors: [],
            items: [],
            inputClass: 'form-control form-control-ol',
            name: 'Форма обратной связи'
        }
    },
    created() {
        this.$GDG(this.groupItem).forEach((element, index) => {
            this.items.push(element);
            if (this.$GD('type', element) !== 'btn', this.$GD('type', element) !== 'file')
                this.values[index] = {
                    value: '',
                    type: this.$GD('type', element),
                    error: this.$GD('error', element),
                    required: this.$GD('required', element),
                }
        });
    },
    mounted() {
        
        if (this.$IFGD(this.groupInfo + '.success_msg'))
            this.sucessMessage = this.$GD(this.groupInfo + '.success_msg');

        if (this.$IFGD(this.groupInfo + '.name'))
            this.name = this.$GD(this.groupInfo + '.name');
 

    }
}
</script>
