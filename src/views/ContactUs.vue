<template>
    <div class="contact">
      <transition name="fade" appear>
      <h1>sdajdkd</h1>
      </transition>
        <ul> {{pagename}} </ul>
        <li v-for="site in pagedesc" :key="site"> {{site}} </li>
    </div>
</template>

<script>
export default {
    data: function () {
    return {
      pagename: "Contact Me on Social Media:",
      pagedesc: [
          'Facebook',
          'Twitter',
          'Github',
      ]
    };
  },
};
</script>
<style scoped>
.fade-enter{
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 5s ease-out;
}
</style>