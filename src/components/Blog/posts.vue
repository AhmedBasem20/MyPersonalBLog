<template>
    <div class="row">
            
   <div class="col-md-8">
       <img
          :src="require(`@/assets/${side.image}`)"
          :alt="side.title"
        />
            <div class="pox">
                <h3> {{side.title}}</h3>
                <span class="date">{{side.date}}</span>
            <p class="content" v-html="side.content"> {{side.content}}</p>
            </div>
            
    </div>
    <div class="col-md-4">
        <router-link to="/blog">
        <button class="btn">Back >></button>
        </router-link>
    </div>
   </div>
</template>


<script>
import JsonPosts from "@/json/jsonposts.json";
export default {
    name: "posts",
    data () {
        return {
            sideid: this.$route.params.id
        }
    },
    computed: {
    side() {
      return JsonPosts.total.find(
        side => side.id === this.sideid
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.col-md-4, .col-md-8{
    background-color: rgb(156, 146, 150);
}
.pox {
    background-color: rgb(197, 187, 173);
    padding: 20px;
    border-radius: 30px;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
    text-align: left;
    margin-bottom: 20px;
  

}
  .title {
        
    background-position: center;
    }
    img{
  max-width: 100%;
  height: auto;
  border-radius: 20px;
    margin-left: 0;
    }

.btn {
  background-color: #215322;
  position: fixed;
  bottom: 20px;
  right: 20px;
  border-color: black;
  border-radius: 5px;
  color: white;
  font-size: 14px;
  transition: .4s;
}
.btn:hover {
  background-color: rgb(156, 146, 150);
  color: black;
  opacity: 1;
  padding: 12px 24px;
  font-size: 18px;
}
</style>