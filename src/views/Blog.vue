<template>
  <div class="Blogpost">
      
    
    <div class="container">
      <div class="row">
          <!-- Posts section component --> 
        <div class="col-md-8">
            <h2>Posts</h2>
          <div class="posts" v-for="side in total" :key="side.id">
        <router-link
          :to="{
            name: 'posts',
            params: { id: side.id }
          }"
          class="btn"
        >
        <div class="container">
          <h2>{{ side.title }}</h2> <br>
          <p>{{side.content}}</p> <p>Continue reading...</p>
          <span> {{side.date}} </span>
          </div>
        </router-link>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import posts from "@/components/Blog/posts.vue";
import JsonPosts from "../json/jsonposts.json";
export default {
  data: function () {
    return {
      pagename: "This is Blog",
      pagedesc: "blog posts will appear here",
      //posts: JsonPosts,
      //sidebar: JsonPosts,
      total: JsonPosts.total,
    };
  },
  name: "blog",
  components: {
    posts,
    //sidebar,
  },
};
</script>
<style scoped>
.Blogpost{
    padding: 60px;
    background-color: rgb(156, 146, 150);
}
.posts {
    background-color: antiquewhite;
    padding: 20px;
    border-radius: 30px;
    background-color: rgb(97, 97, 97);
    text-align: left;
    margin-bottom: 20px;
}
.posts:hover{
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
}
.btn {
    color: white;
    flex-direction: row;
  display: flex;
  text-align: left;
}
.container p {
    width: 75%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
