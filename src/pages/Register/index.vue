<template>
    <div class="register">
        <h3>注册新用户
            <span class="go">我有账号，去 <a href="login.html" target="_blank">登陆</a>
            </span>
        </h3>
        <div class="content">
            <label>手机号:</label>
            <input type="text" placeholder="请输入你的手机号">
            <span class="error-msg">错误提示信息</span>
        </div>
        <div class="content">
            <label>验证码:</label>
            <input type="text" placeholder="请输入验证码">
            <img ref="code" src="http://182.92.128.115/api/user/passport/code" alt="code">
            <span class="error-msg">错误提示信息</span>
        </div>
        <div class="content">
            <label>登录密码:</label>
            <input type="text" placeholder="请输入你的登录密码">
            <span class="error-msg">错误提示信息</span>
        </div>
        <div class="content">
            <label>确认密码:</label>
            <input type="text" placeholder="请输入确认密码">
            <span class="error-msg">错误提示信息</span>
        </div>
        <div class="controls">
            <input name="m1" type="checkbox">
            <span>同意协议并注册《尚品汇用户协议》</span>
            <span class="error-msg">错误提示信息</span>
        </div>
        <div class="btn">
            <button>完成注册</button>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Register'
    }
</script>
<style lang="css">
    .register {
        width: 1200px;
        height: 445px;
        border: 1px solid #dfdfdf;
        margin: 0 auto;
    }

    .register h3 {
        background: #ececec;
        margin: 0;
        padding: 6px 15px;
        color: #333;
        border-bottom: 1px solid #dfdfdf;
        font-size: 20.04px;
        line-height: 30.06px;
    }

    .register h3 span {
        font-size: 14px;
        float: right;
    }

    .register h3 span a {
        color: #e1251b;
    }

    .register div:nth-of-type(1) {
        margin-top: 40px;
    }

    .register .content {
        padding-left: 390px;
        margin-bottom: 18px;
        position: relative;
    }

    .register .content label {
        font-size: 14px;
        width: 96px;
        text-align: right;
        display: inline-block;
    }

    .register .content input {
        width: 270px;
        height: 38px;
        padding-left: 8px;
        box-sizing: border-box;
        margin-left: 5px;
        outline: none;
        border: 1px solid #999;
    }

    .register .content img {
        vertical-align: sub;
    }

    .register .content .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
    }

    .register .controls {
        text-align: center;
        position: relative;
    }

    .register .controls input {
        vertical-align: middle;
    }

    .register .controls .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
    }

    .register .btn {
        text-align: center;
        line-height: 36px;
        margin: 17px 0 0 55px;
    }

    .register .btn button {
        outline: none;
        width: 270px;
        height: 36px;
        background: #e1251b;
        color: #fff !important;
        display: inline-block;
        font-size: 16px;
    }

    .copyright {
        width: 1200px;
        margin: 0 auto;
        text-align: center;
        line-height: 24px;
    }

    .copyright ul li {
        display: inline-block;
        border-right: 1px solid #e4e4e4;
        padding: 0 20px;
        margin: 15px 0;
    }
</style>