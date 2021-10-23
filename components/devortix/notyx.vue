<script>
export default {
    render: function (createElement) {
        if(this.status)
        return createElement(
            'div',  
            {
                class: {
                  notyx: true,
                  'notyx-show': this.notyxShow,
                },
                style: {
                    backgroundColor: (this.types[this.type] || 'rgba(19, 58, 173, 0.9)')
                },
                attrs: {

                }
            },
            this.content,
        )
    },
    
    methods: {
      show($type, $msg, $duration){
        this.type = $type;
        this.content = $msg;
        if($duration)
        this.duration = $duration;
        if(this.closing)
        clearTimeout(this.closing);
        var self = this;
        this.status = false
        this.notyxShow = false;  
         setTimeout(function(){self.status = true;}, 10)
        setTimeout(function(){self.notyxShow = true;}, 100)
        this.closing = setTimeout(function(){ self.notyxShow = false; }, this.duration + 110);
      }
    },
    data() {
        return {
            types: {
                'success': 'rgba(72, 221, 0, .8)',
                'warning': 'rgba(237, 109, 0, .8)',
                'error': 'rgba(237, 42, 16, .8)',
            },
            duration: 600,
            status: true,
            notyxShow: false,
            closing: null,
             type: 'success',
            content: 'Saved !',
        }
    },
     
}
</script>

<style lang="scss">
.notyx {
    width: 100vw;
    padding: 10px 15px;
    min-height: 30px;
    //    background-color: rgba(19, 58, 173, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 30;
    letter-spacing: 0.09em;
    font-weight: 400;
    font-family: sans-serif;
    text-align: center;
    transform: translateY(-100%);
    transition: transform .3s;
}
.notyx-show{
  transform: translateY(0);
}
</style>
