<template>
    <div class="login">
        <h2>登录</h2>
        <p>
            <label for="">用户名</label>
            <input type="text" placeholder="请输入用户名" v-model="data.username" >
        </p>
        <p>
            <label for="">密码</label>
            <input type="text" placeholder="请输入密码" v-model="data.password" >
        </p>
        <button @click="submitData">登录</button>
    </div>
    </template>
    <script>
    export default {
        data() {
            return {
                data: {},
            }
        },
        methods: {
            submitData() {
                // 发送请求，判断用户名和密码是否正确
                this.$http.post('/login', this.data)
                    .then(
                        ({data}) => {
                            if (data.errno === 0) {
                                // 对token进行存储
                                this.$store.commit('changeToken', data.token)
                                // 替换当前页面
                                // this.$router.replace('/home')
                                // 2秒后进入一个新页面
                                setTimeout(() => {
                                    this.$router.push('/home')
                                }, 2000)
                            } else {
                            // 打印提示
                                console.log(444,data)
                            }
                        },
                        // 发送请求失败
                        () => console.log('err')
                    )
            }
        }
    }
    </script>
    