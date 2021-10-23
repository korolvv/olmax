<template>
    <div class="news media-bg-black08 box-shadow-blue">
        <div class="news-title text-title-middle text-thin box-shadow-title text-spacing1">{{post.title}}</div>
        <div class="news-content" v-html="post.desc"></div>
        <div class="d-flex justify-content-end">
            <nuxt-link :to="'/news/'+post.slug"   class="news-btn">{{$GD('news_head.btn_more')}}</nuxt-link>
        </div>
         
    </div>
    
</template>

<script>
export default {
    props: ['post']
}
</script>

