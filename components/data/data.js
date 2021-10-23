import dataBtn from './data-btn.vue';
import userPanel from '~/components/data/user-panel.vue';

export default {
    _gd(name, model, app, attr) {
        if (!attr) {
            attr = 'val'
        }
        try {
            if (model && model['dataVals'][name][attr]) {
                return model['dataVals'][name][attr];
            }
            var arr = name.split('.');
            if (arr.length === 2
                && !model
                && (model = app.$store.getters.getData
                [arr[0]]
                ['dataGroupInsts'][0]
                ['dataVals']
                [arr[1]]
                [attr]
                )
            ) {

                return model;
            }
            return 'NOT SET'
        } catch (e) {
            console.log('Error ' + e.name + ":" + e.message);
            return 'NOT SET'
        }
    },
    install(Vue, options) {
        var self = this;
        Vue.component('data-btn', dataBtn);
        Vue.component('user-panel', userPanel);

        Vue.mixin({
            methods: {
                env_() {
                    return process.env.NODE_ENV;
                },

                edit_() {

                    return (this.$auth.$state.loggedIn && this.$store.state.dataBtnShow);
                }
            }
        })

        Vue.prototype.$getDataGroups = function () {
            return this.$store.state.dataGroupsActive;
        };

        Vue.prototype.$setDataGroups = function (groups) {
            this.$store.state.dataGroupsActive = groups;

        };

        Vue.prototype.$isDataGroups = function () {
            return this.$store.state.dataGroupsActive.length > 0
        };

        Vue.prototype.$GDG = function (name) {
            try {
                return this.$store.getters[options.data][name]['dataGroupInsts']
            } catch (err) {
                return []
            }
        }

        Vue.prototype.$GDIMG = function (name, model, size) {
            var img = self._gd(name, model, this, 'images');
            if (img[size])
                return img[size];
            else {
                return 'NOT SET';
            }
        }

        Vue.prototype.$GDFILE = function (name, model) {
            return self._gd(name, model, this, 'fileUrl');
        }

        Vue.prototype.$IFGD = function (name, model) {
            return self._gd(name, model, this) !== 'NOT SET';
        }

        Vue.prototype.$GD = function (name, model) {
            return self._gd(name, model, this);
        }
    }
}