<template>
    <div class="user-panel">
    
        <span class="user-panel-info">
                <b>Hello:&nbsp;</b> 
            <span class="user-panel-login">{{$auth.$state.user.username}}</span>
    
        <label class="checkbox user-panel-editor">
                <input v-model="$store.state.dataBtnShow"  type="checkbox" />
             <div class="checkbox__text" >редактор</div>
            </label>
    
        </span>
        <a href="#" class="user-panel-logout" @click.prevent="$auth.logout()">Выход</a>
    
    </div>
</template>

<script>
export default {


    mounted: function() {
        var self = this;

        /*document.body.onkeyup=function(event){
            event=event||window.event;
             //alert(event.keyCode);
            if(event.keyCode == 76)
                self.$router.push('/login');
            }
        */
    },
}
</script>

<style lang="scss">
.user-panel {
    letter-spacing: normal;
    width: 450px;
    height: 40px;
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 10px;
    border-radius: 5px 5px 0 0;
    background-color: transparentize( #123456, 0.3);
    color: white;
    padding: 0 20px;
    justify-content: space-around;
    z-index: 100000;
}

.user-panel-editor {
    margin-left: 40px;
}

.user-panel-login {
    color: lime;
    font-weight: 400;
}

.user-panel-logout {
    color: red;
    font-weight: 400;
}

.checkbox {
    margin-bottom: 0;
}

.checkbox input {
    position: absolute;
    z-index: -1;
    opacity: 0;
    margin: 10px 0 0 20px;
}

.checkbox__text {
    position: relative;
    padding: 0 0 0 60px;
    cursor: pointer;
    line-height: 26px;
}

.checkbox__text:before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0;
    width: 50px;
    height: 26px;
    border-radius: 13px;
    background: #CDD1DA;
    box-shadow: inset 0 2px 3px rgba(0, 0, 0, .2);
    transition: .2s;
}

.checkbox__text:after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 22px;
    height: 22px;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0 2px 5px rgba(0, 0, 0, .3);
    transition: .2s;
}

.checkbox input:checked+.checkbox__text:before {
    background: #9FD468;
}

.checkbox input:checked+.checkbox__text:after {
    left: 26px;
}

.user-panel-info {
    display: flex;
    align-items: center;
}
</style>

