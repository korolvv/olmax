<template>
<div>
    <div class="marg2"></div>
    <div class="container">
        <div class="row">
            <div class="col">
                <breadcrumbs group="news_head"> </breadcrumbs>
            </div>
        </div>
        <div class="marg2"></div>

    </div>
    <data-btn :groups="['news']" class="news-container">

        <div v-for="(post, slug) in getPosts.postsArr" :key="slug">
            <post :post="post"></post>
            <div class="marg"></div>
        </div>

    </data-btn>
</div>
</template>

<script>
import Post from "~/components/news/post.vue";
export default {
    components: {
        Post
    },
    auth: false,
    head() {
        return {
            title: this.$GD('news_head.title')
        }
    },
}
</script>
