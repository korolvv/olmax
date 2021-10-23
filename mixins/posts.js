import slugify from 'slugify';
export default {
    computed: {
        getPosts(){
            if(this.$store.state.posts)
            return {
                postsArr: this.$store.state.postsArr,
                posts: this.$store.state.posts
            }

            var data = this.$GDG('news');
            var items = {};
            var itemsArr = [];
            data.forEach((element, index) => {
                 var slug = slugify(this.$GD('slug', element));
                 if(items[slug]){
                     slug = this.hashCode(toString(index) );
                 }
                 items[slug] = {
                    title: this.$GD('title', element),
                    desc: this.$GD('desc', element),
                    content: this.$GD('content', element)
                 }
                 itemsArr[index] = {
                    title: this.$GD('title', element),
                    desc: this.$GD('desc', element),
                    content: this.$GD('content', element),
                    slug:  slug
                 };
                  
            });
            return {
                postsArr: (this.$store.state.postsArr = itemsArr),
                posts: (this.$store.state.posts = items)
            }
           
         },
    },
    methods: {
         
         hashCode(s){
             return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
         }
    }
}