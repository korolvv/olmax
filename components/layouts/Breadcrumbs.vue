<template>
<data-btn  :groups="[group]" class="d-flex flex-column w-100 align-items-center"  >

  <h2  class="breadcrumbs-title text-ceter ">
       {{$GD(group+'.h')}}
  </h2>
 
</data-btn>

</template>

<script>
  const breadcrumbs = {
    // You should use / + name for the root route
    '/profile': 'Profile',
    '/clients': 'Клиенты',
    '/': 'Главная',
    // And just name of the page for child routes
   'profile-account': 'Account' 
  }

  export default {
    props: ['items', 'title', 'img',  'group'],
    computed: {
      path(){
        return this.$route.matched[0].path
      },
      crumbs () {
        let crumbs = []
        this.$route.matched.forEach((item) => {
            console.log(item)
          if (breadcrumbs[item.name] || breadcrumbs[item.path]) {
            item.breadcrumb = breadcrumbs[item.name] || breadcrumbs[item.path]
            crumbs.push(item)
          }
        })

        return crumbs
      }
    }
  }
</script>