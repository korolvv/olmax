<template>
    <div>
        <div class="marg15"></div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <breadcrumbs group="service_head"> </breadcrumbs>
                </div>
            </div>
        </div>
        <div class="marg15"></div>
        <data-btn :groups="['service_popup']">
        <div class="row no-gutters justify-content-between d-none d-sm-flex">
    
            <div class="col-4 d-flex">
                <div class="title-box-wrapp box-contacts">
                    <div class="row no-gutters w-100">
                        <div class="col-3 d-flex">
                            <div class="title-tringle--left-long"></div>
                        </div>
                        <div class="col-9 d-flex">
                            <a href="#" @click.prevent class="title-box small d-flex flex-center">
                                  
                            </a>
                            <div class="title-tringle--right-r"></div>
                        </div>
                    </div>
                </div>
    
            </div>
    
            <div class="col-3 d-flex mx-auto">
                <div class="title-box-wrapp box-contacts--top">
                    <div class="title-tringle--left small"></div>
                    <div class="title-box small d-flex flex-center">
                        <div class="btn-callback">
                            {{$GD('service_popup.call')}}
                            <ul class="dropdown">
                                <li @click="$store.state.popupService = true; popupTitle = $GD('service_popup.sub1')">
                                    <a @click.prevent href="#">{{$GD('service_popup.sub1')}}</a>
                                    </li>
                                <li @click="$store.state.popupService = true; popupTitle = $GD('service_popup.sub2')">
                                    <a @click.prevent href="#">{{$GD('service_popup.sub2')}}</a>
                                    </li>
                            </ul>
                        </div>
    
                    </div>
                    <div class="title-tringle--right"></div>
                </div>
            </div>
    
            <div class="col-4 d-flex">
                <div class="title-box-wrapp box-contacts--right">
                    <div class="row no-gutters w-100">
    
                        <div class="col-9 d-flex">
                            <div class="title-tringle--left-r"></div>
    
                            <a href="#" @click.prevent class="title-box small d-flex flex-center">
                                 
                            </a>
    
    
                        </div>
                        <div class="col-3 d-flex">
                            <div class="title-tringle--right-long"></div>
                        </div>
                    </div>
                </div>
    
            </div>
    
        </div>
        </data-btn>
        <div class="marg15"></div>
        <data-btn :groups="['service_items']">
            <div class="row no-gutters">
                <div class="marg15 d-none d-sm-block"></div>
                <div v-for="(item, index) in items" :key="index" class="col-12">
                    <item-title :item="item" :index="index"></item-title>
                    <item-content :item="item" :index="index"></item-content>
                    <div class="marg3"></div>
                </div>
            </div>
        </data-btn>
        <transition name="page">
          <collback-service :title="popupTitle" @close="$store.state.popupService = false" v-if="$store.state.popupService"></collback-service>
      </transition>
        
    </div>
</template>

<script>
import itemTitle from '~/components/service/itemTitle'
import itemContent from '~/components/service/itemContent'

import popupService from '~/components/layouts/collback-service'
export default {
    components: { itemTitle, itemContent,  'collback-service' : popupService },
    auth: false,
    created() {
        var service_items = this.$GDG('service_items');
        var items = [];

        service_items.forEach((element, index) => {
            var el = {
                title: this.$GD('title', element),
                desc: this.$GD('desc', element),
                svg: this.$GDFILE('svg', element),
                pos: index % 2 !== 0 ? 'right' : 'left'
            }
            items.push(el);
        });
        this.items = items;
    },
    head() {
        return {
            title: this.$GD('service_head.title')
        }
    },
    data() {
        return {
            items: [],
            popupTitle: '',
        }
    }
}
</script>
