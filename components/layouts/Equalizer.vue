<template>
<div class="eq-wrapper d-none d-sm-flex flex-center">

    <div class="eq-controll-wrapper" v-on:dblclick="clear" v-on:click="playStop">
        <icon-play  class="eq-icon-controll" id="eq-play"></icon-play>
        <icon-pause  class="eq-icon-controll eq-hide" id="eq-pause"></icon-pause>
    </div>
    <canvas height='35' width='90'  id='example'>Обновите браузер</canvas>
</div>

</template>

<style lang="scss">
.eq-controll-wrapper{
    width: 2.4rem;
    height: 2.4rem;;
    border: 1px solid white;
    border-radius: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -1.2rem;
    margin-top: -1.2rem;
}
.eq-wrapper{
    position: relative;
    
}

.eq-icon-controll{
    max-width: 1.6rem;
    max-height: 1.6rem;
    fill: white;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -0.8rem;
    margin-top: -0.8rem;
    width: 100%;
    height: 100%;
    transition: opacity .5s;
    opacity: 1;
    cursor: pointer;
}

#eq-play{
    margin-left: -0.7rem;
}


.eq-hide{
  opacity: 0;  
}
</style>


<script>
import IconPlay from './icons/icon-play.vue'
import IconPause from './icons/icon-pause.vue'
export default {
    name: 'Equalizer',
    data () {
        return {
        status: null,
        timer: null,
        example: null,
        ctx: null,
        lineCount: 15,
        lines: [],
  
        line(height, score, positionX){
                return {
                    height: height,
                    positionX: positionX,
                    positionY: 33,
                    score: score
                }
            }
        }
    },
    mounted: function () {
        this.example = document.getElementById("example");
        this.ctx     = example.getContext('2d');

        var gradient = this.ctx.createLinearGradient(80, 0, 80, 40);
        gradient.addColorStop(0, "#074bba");
        gradient.addColorStop(1, "#FFF");
        this.ctx.fillStyle = gradient;
        this.createLines();

        /*if(this.audio.hasAttribute("autoplay"))
            this.play();*/
    },
    
    methods: {
        clear(){
            this.ctx.clearRect(0, 0, this.example.width, this.example.height);
        },
        playStop(){
            if(this.status == null){
                this.play();
            } else {
                this.stop();
                this.clear();
            }
            
        },
        play(){  
            this.$emit('play');
            document.getElementById("eq-play").classList.add('eq-hide');
            document.getElementById("eq-pause").classList.remove('eq-hide');
            this.status = "play";           
            var self = this;
            this.timer = setInterval(function() {
                self.ctx.clearRect(0, 0, this.example.width, this.example.height);
                self.lines.forEach(function(item, i, arr) {
                    
                    self.drowELine(i);
                    
                });
                self.clearGorisontal();
            }, 50) 
        },
        stop(){
            this.$emit('pause');
            document.getElementById("eq-pause").classList.add('eq-hide');
            document.getElementById("eq-play").classList.remove('eq-hide');
            
            this.status = null; 
            clearInterval(this.timer);
            
        },
        getRandomInt() {
            return Math.floor(Math.random() * (this.example.height - 0)) + 0;
        },
        getRandomScore() {
            return Math.floor(Math.random() * (4 - 1)) + 1;
        },
        drowELine(i){
            
            var pos = this.getPos(this.lines[i].positionX);
            var heightY = this.example.height - this.lines[i].positionY;
            this.ctx.fillRect(pos, heightY / 2, 4, this.lines[i].positionY);
            this.lines[i].positionY += this.lines[i].score;
            if(this.lines[i].positionY >= this.example.height && this.lines[i].score > 0)
            this.lines[i].score = this.lines[i].score * -1;
            if(this.lines[i].positionY <= 0 && this.lines[i].score < 0)
            this.lines[i].score = this.lines[i].score * -1;
            
        },
        getPos(pos){
            return this.example.width / this.lineCount  * (pos-1);
        },
        createLines(){
            var i = 0;
            var el = null;
            for (i = 1; i <= this.lineCount; i += 1) {
                el = this.line(33,2,i);
                el.positionY = this.getRandomInt();
                el.score = this.getRandomScore();
                this.lines.push(el);
            }
        },
        clearGorisontal(){
            var i = 0;
            var step = this.example.height / 5;
            for (i = step; i < this.example.height; i += step){
                this.ctx.clearRect(0, i, this.example.width, 1);
            }
        }
    },
    components: {
        'icon-play': IconPlay,
        'icon-pause': IconPause
    }
}
</script>
