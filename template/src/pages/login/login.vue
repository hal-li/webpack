<template>
    <div>
        <button @click="login">登录</button>
    </div>
</template>

<script>
    export default {
        name: 'Login',

        // 组件定义，data必须声明为返回一个初始数据对象的函数，
        // 如果是一个纯粹的对象，使用该组件创建的实例将共享引用同一个对象
        data() {
            return {
                loginForm: {
                    username: "",
                    password: ""
                }
            }
        },

        created: function () { },

        methods: {
            login() {
                // 通过dispatch方法来调用actions中的login方法
                this.$store.dispatch('login', this.loginForm)
                    .then(() => {
                        console.log("登录成功")
                    }).catch(() => {
                        console.error("登录失败")
                    })
            }
        }
    }
</script>

<style>

</style>
