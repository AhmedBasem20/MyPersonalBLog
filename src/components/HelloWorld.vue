<template>
  <div class="hello">
      <transition name="fade" appear>
      <h1>{{ msg }}</h1>    
      </transition>
     <router-link to="/blog">
        <button class="btn">How I Got Started With Vue IN 7 Days</button>
     </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  padding: 30px;
padding-bottom: 100px;
font-family: Coming Soon;
}
h1{
  padding: 50px;
  color: white;
  font-size: 70px;
  font-weight: bolder;

  }
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 5s ease-out;
  }
  a{
    text-decoration: none;
    color: white;
  }
  h2:hover {
  font-size: 50px;
}
.btn {
  background-color: #ddd;
  border: none;
  color: black;
  padding: 16px 32px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  transition: .4s;
  background-color: rgba(255, 255, 255, 0.3);
  margin-bottom: 200px;
  font-weight: bold;
}
.btn:hover {
  background-color: #3e8e41;
  color: white;
  opacity: 1;
  padding: 18px 36px;
  font-size: 18px;
  margin: 5px 2.5px;
  margin-bottom: 200px;

}
@media screen and (max-width: 520px) {
  h1{
    font-size: 40px;
    margin-top: -80px;
  }
  
}
</style>