<template>
    <div class="login-f-container">
    
        <form @keydown.enter="login" class="login-f-wrapper">
            <h2 class="text-center">Login</h2>
    
            <div class="login-f-gorup">
                <label for="">Username</label>
                <input name="username" type="text" v-model="username" placeholder="username" ref="username" />
            </div>
    
            <div class="login-f-gorup--last">
                <label for="">Password</label>
                <input name="password" type="password" v-model="password" placeholder="password" />
            </div>
    
            <div v-if="error" class="login-f-error">{{ error + '' }}</div>
            <div show v-if="$auth.$state.redirect">
                You have to login before accessing to <strong>{{ $auth.$state.redirect }}</strong>
            </div>
    
            <div class="text-center">
                <a class="login-f-btn" @click.prevent="login" block>Login</a>
            </div>
        </form>
    
    </div>
</template>

<script>
import qs from 'qs'
export default {
    middleware: ['auth'],
    mounted() {

    },
    data() {
        return {
            username: '',
            password: '',
            error: null
        }
    },

    computed: {

        redirect() {
            return (
                this.$route.query.redirect &&
                decodeURIComponent(this.$route.query.redirect)
            )
        },
        isCallback() {
            return Boolean(this.$route.query.callback)
        }
    },
    methods: {
        async login() {
            this.error = null
            const self = this;
            return this.$auth
                .loginWith('local', {

                    data: qs.stringify({
                        username: self.username,
                        password: self.password
                    })
                })
                .catch(e => {
                    this.error = e.message + ''
                })
        }
    }
}
</script>

<style lang="scss">
.login-f-wrapper {
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    max-width: 400px;
    margin: 50px auto;
}

.login-f-gorup {
    margin-bottom: 10px;
    &--last {
        @extend .login-f-gorup;
        margin-bottom: 20px;
    }
    label {
        display: block;
        margin-bottom: 5px;
    }
    input {
        display: block;
        width: 100%;
        border-radius: 0;
        background-color: rgba(255, 255, 255, 0.4);
        border: 0;
        height: 40px;
        padding: 0 10px;
    }
}

.login-f-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.login-f-btn {
    cursor: pointer;
    height: 40px;
    width: 100%;
    text-align: center;
    line-height: 40px;
    background-color: #18304e;
    display: block;
    margin-top: 10px;
}

.login-f-error {
    color: red;
}
</style>
