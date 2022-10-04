<template>
  <div>
    <button @click="getPosts">Post Lists</button>
    <h3 v-if="errorMsg">{{ errorMsg }}</h3>
    <div v-for="(news, index) in newsList" :key="index">
      <a href="https://baidu.com">
        <h3>{{ news.title }}</h3>
      <p>{{ news.content }}</p>
      </a>
      <hr />
    </div>
  </div>
</template>

<script>
//<hr />: seperate line
import axios from "axios";
export default {
  name: "PostList",
  //data is a function, return a list
  data() {
    return {
      newsList: [],
      errorMsg: "",
    };
  },
  //methods is an objects
  //getPosts() is a function from axios to fetch data using GET
  methods: {
    getPosts() {
      //test http failed by changing the url following
      axios
        .get("https://mock.apifox.cn/m1/1695746-0-default/search")
        .then((response) => {
          console.log(response.data);
          this.newsList = response.data.data;
        })
        .catch((error) => {
          console.log(error), (this.errorMsg = "Error retrieving data");
        });
    },
  },
};
</script>

<style scoped>
</style>
