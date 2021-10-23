<template>
<div>
     <div class="marg15"></div>
    <div class="container">
        <div class="row">
            <div class="col">
                <breadcrumbs group="partners_head"> </breadcrumbs>
            </div>
        </div>
    </div>
    <div class="marg15"></div>
    <div class="row no-gutters justify-content-between d-none d-sm-flex">

        <div class="col-5 d-flex">
            <div class="title-box-wrapp box-contacts">
                <div class="row no-gutters w-100">
                    <div class="col-3 d-flex">
                        <div class="title-tringle--left-long"></div>
                    </div>
                    <div class="col-9 d-flex">
                        <div @click.prevent class="title-box small d-flex flex-center">
                              
                        </div>
                        <div class="title-tringle--right-r"></div>
                    </div>
                </div>
            </div>

        </div>
 
        <div class="col-5 d-flex">
            <div class="title-box-wrapp box-contacts--right">
                <div class="row no-gutters w-100">

                    <div class="col-9 d-flex">
                        <div class="title-tringle--left-r"></div>
                         
                            <div href="#" @click.prevent class="title-box small d-flex flex-center">
                             
                        </div>
                       

                    </div>
                    <div class="col-3 d-flex">
                        <div class="title-tringle--right-long"></div>
                    </div>
                </div>
            </div>

        </div>

    </div>
 
<div class="marg"></div>
    <data-btn :groups="['partner_item']" class="container">
        <div class="row">
            <div class="col">

                <div class="row">
                    <div class="col-3 flex-center d-flex flex-column" v-for="(item, index) in $GDG('partner_item')" :key="index">
                        <a href="#" class="d-block box-clients  box-hide-container box-contacts--top">
                            <div class="media-bg flex-center d-flex box-contacts-inner">
                                <div class="icon-wrapper-partners">
                                    <simple-svg v-if="$GDFILE('svg', item)"  :filepath="$GDFILE('svg', item)" class="icon icon-blue">
                                    </simple-svg>
                                </div>
                            </div>
                             <div class="media-bg flex-center d-flex box-contacts-inner">
                                <span class="text-middle text-blue-light text-shadow-blue text-title-small text-upper text-center text-spacing1 text-thin">{{$GD('title', item)}}</span>
                            </div>
                        </a>
                         
                    </div>
                    
                </div>
               
            </div>
        </div>
    </data-btn>
    <div class="marg"></div>
</div>
</template>

<script>
import VideoMainCarousel from "~/components/index/VideoMainCarousel";
export default {
    auth: false,
    head () {
        return {
        title: this.$GD('partners_head.title')
        }
    },
    created(){
        //this.title = this.$GD('partners_head.title');
    },
    components: {},
    data() {
        return {
            images: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
            titles: ['Eset', 'Huawei', 'Microsoft', 'Legrand', 'APC', 'IBM'
            , 'Oracle', 'Hewlett Packard Enterprise', 'Cisco', 'Xerox', 'Epson'],
            
        };
    }
};
</script>
