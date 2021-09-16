<template>
  <div id="app">
    <link href='https://fonts.googleapis.com/css?family=Philosopher' rel='stylesheet'>
    <link href='https://fonts.googleapis.com/css?family=Jua' rel='stylesheet'>
    <link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet'>
    <link href='https://fonts.googleapis.com/css?family=Coming Soon' rel='stylesheet'>
    <link href='https://fonts.googleapis.com/css?family=Hammersmith One' rel='stylesheet'>
    <link href='https://fonts.googleapis.com/css?family=Kalam' rel='stylesheet'>
    <link href='https://fonts.googleapis.com/css?family=Caveat' rel='stylesheet'>


    <app-header />
    <transition name="fade" appear>
    <router-view />
    </transition>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from "@/components/global/AppHeader.vue";
import AppFooter from "@/components/global/AppFooter.vue";

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,

  }
}
</script>

<style lang="scss">
#app {
  //font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: 'Coming Soon';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-weight: bold;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity .6s ease-out;
  }

</style>
