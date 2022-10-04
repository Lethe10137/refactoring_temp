<template>
  <div id="app">
    <CreatePostVue/>
    <PostListVue/>
  </div>
</template>

<script>
import PostListVue from './components/PostList.vue';
import CreatePostVue from './components/CreatePost.vue';
export default {
    name: "App",
    components: {
      PostListVue,
      CreatePostVue 
      }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
