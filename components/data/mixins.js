import axios from 'axios';
export default {
    data(){
        return {
            loadIndicator: false,
        }
    },
    methods: {
        getFormData(models, attr) {
            var form = new FormData();

            for (var i = 0; i < Object.keys(models).length; i++) {
                var key = models[i][attr];
                console.log(this.$refs[key][0].owner());
                var el = this.$refs[key][0].owner();

                if (!el.files) {

                    form.append(key, el.value);
                } else {

                    form.append(key, el.files[0]);
                }
            }
            return form;
        },

        sendRequest(type, url, data ,isMultipart, succCallback){
            var headers = {};
            var self = this;
            this.loadIndicator = true;
            var token = this.$auth.user?this.$auth.user.token:'-';
            self.$emit('responseBefore');
            if(isMultipart){ headers['Content-Type']  = 'multipart/form-data'; }
            
            headers['Authorization'] = "Bearer " + token;

            const instance = axios.create({
                //baseURL: 'https://some-domain.com/api/',
                //timeout: 1000,
                headers: headers
              });

              instance[type](url, data).then(
                (response) => {
                     
                    if(succCallback)
                    succCallback(response)
                    self.$emit('responseSucc', response)
                    self.loadIndicator = false;
                },
                (error) => {
                    console.log(error.response );
                    self.$emit('responseError', error)
                } 
            );
            /*axios[type](url, data, {headers: headers}).then(
                (response) => {
                    if(succCallback)
                    succCallback(response)
                    self.$emit('responseSucc', response)
                    self.loadIndicator = false;
                },
                (error) => {
                    self.$emit('responseError', error)
                } 
            );*/
        }
         
    },
}