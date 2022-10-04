<template>
    <div>
        <form @submit.prevent="createPost">
            <div>
                <label for="userId">用户名：</label>
                <input type="text" id="username" v-model="formData.username" />
            </div>
            <div>
                <label for="title">密码：</label>
                <input type="text" id="password" v-model="formData.password" />
            </div>
            <button @click="state = true">Login</button>
            <button @click="state = false">Register</button>
        </form>
        <h3 v-if="loginFailed">登录失败，请检查用户名或密码。</h3>
        <h3 v-if="loginSuccess">登录成功</h3>
        <h3 v-if="registerFailed">用户已存在</h3>
        <h3 v-if="registerSuccess">注册成功</h3>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name: 'CreatePost',
        data() {
            return {
                formData: {
                    username: '',
                    password: ''
                },
                state: true,
                loginFailed: false,
                loginSuccess: false,
                registerFailed: false,
                registerSuccess: false
            }
        },
        methods: {
          loginResponseHandler(response_data) {
            if(response_data.code==-1){
              this.loginFailed = true
            }
            else if(response_data.code==0){
              this.loginSuccess = true
            }
          },
          registerResponseHandler(response_data) {
            if(response_data.code==-1){
              this.registerFailed = true
            }
            else if(response_data.code==0){
              this.registerSuccess = true
            }
          },
            createPost() {
              if(this.state){
                axios.post('https://mock.apifox.cn/m1/1695746-0-default/login', this.formData)
                .then((response) => this.loginResponseHandler(response.data))
                .catch((error) => console.log(error))
              }
              else{
                axios.post('https://mock.apifox.cn/m1/1695746-0-default/register', this.formData)
                .then((response) => this.registerResponseHandler(response.data))
                .catch((error) => console.log(error))
              }
                axios.post('https://jsonplaceholder.typicode.com/posts', this.formData)
                .then((response) => console.log(response))
                .catch((error) => console.log(error))
            }
        }
    }
</script>

<style scoped>

</style>
