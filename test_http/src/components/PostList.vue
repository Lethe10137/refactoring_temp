<template>
    <div>
        <button @click="getPosts">Post Lists</button>
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
            }
        },
        //methods is an objects
        //getPosts() is a function from axios to fetch data using GET
        methods: {
            getPosts() {
                axios.get('https://jsonplaceholder.typicode.com/posts')
                .then((response) => {
                    console.log(response.data)
                    this.posts = response.data
                })
                .catch((error) => {
                    console.log(error)
                })
            }
        },
    }
</script>

<style scoped>

</style>