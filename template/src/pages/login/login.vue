<template>
    <div class="main">
        <div class="container">
            <div class="login-block">
                <header>
                    <img src="@images/logo.png"  class="logo" alt="logo">
                </header>
                <div class="normal-login">
                    <form class="login-form">
                        <div  class="login-form-item">
                            <input type="text" placeholder="账号" v-model.trim="loginForm.username">
                        </div>
                        <div  class="login-form-item">
                            <input type="password" placeholder="密码" v-model="loginForm.password">
                        </div>
                        <div class="m-b-md" text-right>
                            <div><a class="gray">忘记密码？</a></div>
                        </div>
                        <button class="button button-primary button-full" @click="login">登录</button>
                    </form>
                </div>
            </div>
        </div>
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
                    username: "admin",
                    password: "111111"
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
                    }).catch((error) => {
                        console.error("登录失败: " + error)
                    })
            }
        }
    }
</script>

<style lang="scss" type="text/scss" scoped>

    .container {
        background-color: $bg-base;
    }

    .login-block {
        @include center;
        width: 480px;
        height: 470px;
        background-color: $white;

        header {
            width: 100%;
            height: 110px;
            padding: 20px 0;
            background-color: $bg-gray;
        }

        .logo {
            width: 70px;
            height: 70px;
            display: block;
            margin: 0 auto;
        }

        .normal-login {
            width: 100%;
            height: 350px;
            padding: 40px;

            .login-form .login-form-item {
                width: 100%;
                margin-bottom: 20px;

                input {
                    width: 100%;
                    height: 50px;
                    padding: 0 20px;
                    line-height: 50px;
                    border: $border-base;
                    border-radius: 2px;

                    &:hover,
                    &:focus {
                        border-color: $primary;
                    }
                }
            }

            .button {
                margin-top: 45px;

                &.button-primary {
                    color: $white;
                    background-color: $primary;
                    border-color: $primary;
                }

                &.button-full {
                    width: 100%;
                    height: 50px;
                }
            }

        }
    }
</style>
