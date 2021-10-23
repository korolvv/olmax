<template>
  <div id="app" class="main-wrapper">

    
    
    <no-ssr><video-bg-container  ></video-bg-container> </no-ssr>
    <div class="media-bg" id="shadow-main"></div>
    <div class="main-head">
      <navbar></navbar>
    </div>

      <div class="main-content ">
       
        <nuxt/>
        <!-- <simple-svg ref="navigation" :filepath="'/svg/side-navigation.svg'" class="side-navigation-container d-none d-lg-block" /> -->
        <side-navigation></side-navigation>
      </div>
      <layout-footer></layout-footer>
       

       
      <no-ssr><user-panel v-if="$auth.$state.loggedIn"></user-panel></no-ssr>
      <data-popup @close="$setDataGroups([])" v-if="$isDataGroups()" :groups="$getDataGroups()"></data-popup>
  </div>
  
</template>

<script>
import SideNavigation from '~/components/layouts/SideNavigation' 
import VideoBgContainer from '~/components/layouts/VideoBgContainer'
export default {
  
  name: 'app',
  components: {
    'side-navigation': SideNavigation,
    'video-bg-container': VideoBgContainer,
  },
  methods: {
    
  },
  mounted(){
    
    $('body').on( 'mouseenter', '.side-navigation-link', function(){
       var id = $(this).attr('data-id')
       $(id).addClass('active');
       
     
    });
    $('body').on( 'mouseleave', '.side-navigation-link', function(){
       var id = $(this).attr('data-id')
       $(id).removeClass('active');
     
    });

    window.onscroll = function() {
      var scrolled = window.pageYOffset || document.documentElement.scrollTop;
      if(scrolled > 100){
        document.getElementById('shadow-main').classList.add("media-bg-black05");
      } else {
        document.getElementById('shadow-main').classList.remove("media-bg-black05");
      }
    }
  },
}
</script>

 
