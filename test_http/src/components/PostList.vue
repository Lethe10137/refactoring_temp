<template>
    <div>
        <button @click="getPosts">Post Lists</button>
        <h3 v-if="errorMsg">{{ errorMsg }}</h3>
        <div v-for="post in posts" :key="post.id">
            <h3>{{ post.id }}. {{ post.title }}</h3>
            <p>{{ post.body }}</p>
            <hr /> 
        </div>
    </div>
</template>

<script>
//<hr />: seperate line
import axios from 'axios'
    export default {
        name: "PostList",
        //data is a function, return a list
        data() {
            return {
                posts: [],
                errorMsg: ''
            }
        },
        //methods is an objects
        //getPosts() is a function from axios to fetch data using GET
        methods: {
            getPosts() {
                //test http failed by changing the url following
                axios.get('https://jsonplaceholder.typicode.com/posts')
                .then((response) => {
                    console.log(response.data)
                    this.posts = response.data
                })
                .catch((error) => {
                    console.log(error),
                    this.errorMsg = 'Error retrieving data'
                })
            }
        },
    }
</script>

<style scoped>

</style>