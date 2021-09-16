<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
<style scoped>
.home {
  background-image: url("https://img.wallpapersafari.com/desktop/1920/1080/9/48/rFe3Dn.png");
  background-size: cover;
  background-position: bottom;
}
img{
  height: 150px;
    }
</style>