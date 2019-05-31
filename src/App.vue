<template>
  <div id="app">
    <div class="container">
      <site-header/>
      <main id="main" class="main">
        <!--<listing></listing>-->
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script>

import SiteHeader from './components/layout/Header'

import listing from './components/pages/Listing'
import addUser from './components/pages/AddUser'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
    components: {
        SiteHeader,
        listing,
        addUser
    }
}
</script>

