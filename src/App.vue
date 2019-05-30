<template>
  <div id="app">
    <div class="container">
      <site-header/>
      <main id="main" class="main">
        <img src="https://picsum.photos/id/237/200/300" alt="">
      </main>
    </div>
  </div>
</template>

<script>

  import SiteHeader from './components/layout/Header'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
    components: {
        SiteHeader
    }
}
</script>

