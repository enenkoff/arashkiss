<template>
  <div id="app">
    <div class="container">
      <site-header/>
      <main id="main" class="main">
        <listing></listing>
      </main>
    </div>
  </div>
</template>

<script>

  import SiteHeader from './components/layout/Header'
  import Listing from './components/pages/Listing'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
    components: {
        SiteHeader,
        Listing,
    }
}
</script>

