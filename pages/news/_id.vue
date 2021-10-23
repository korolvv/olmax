<template>
    <div>
        <div class="marg2"></div>
        <div class="container">
            <div class="row">
                <div class="col">
    
                    <div class="d-flex flex-column w-100 align-items-center">
                        <h3 class="breadcrumbs-title text-ceter text-title-large">{{post.title}}</h3>
                    </div>
    
                </div>
            </div>
            <div class="marg2"></div>
    
            <div class="news media-bg-black08 box-shadow-blue">
                <div class="news-content">{{post.content}}</div>
                <div class="d-flex justify-content-end">
                    <nuxt-link :to="'/news'" class="news-btn">{{$GD('news_head.btn_back')}}</nuxt-link>
                </div>
    
            </div>
        </div>
        <div class="marg"></div>
    </div>
</template>

<script>
export default {
 
    asyncData({ params, env, error, app}) {
        //var posts = app.getPosts().posts;
       
        return {
            slug: params.id,
            title: '',
            content: '',
            post: {},
        }
    },
    created(){
        var posts = this.getPosts.posts;
        console.log(posts);
        if(!posts[this.slug])
        return this.$nuxt.error({ message: 'Post not found', statusCode: 404 });
        this.post = posts[this.slug];
    },
    auth: false,
    head() {
        return {
            title: 'Заголовок поста'
        }
    },
}
</script>
