<template>
<div class="denglu1">
    <div class="denglu">
        <router-link to="/Grenzx">
        <img src="../../src/assets/tubiao1.png" class="tubiao1">
        </router-link>
        <span class="span1">登录</span>
        <span class="span2">注册</span>
        <div class="fx">
        <div><input type="text" class="login_text" placeholder="账号/手机号/邮箱" name="id" v-model="login_text"></div>
        <div  class="login_body"><input text="password" class="login_text" placeholder="请输入您的密码" name="pass" v-model="pwd"></div>
        <div class="login_bth">
            <input type="submit" value="登录" @click="dengluxians">
        </div>
        <div class="login_link">    
            <a href="#">找回密码</a>
        </div>
    </div>
    </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            login_text:'',
            pwd:'',
        }
    },
    methods: {
        dengluxians(){
            if("admin" == this.login_text && "123456" == this.pwd){
                this.$router.push({path:'/'});
               document.cookie="username=John Doe";
               console.log(document.cookie)
         }else{
             alert("登录失败")
         }
        }
    },
    
}
</script>
<style  scoped>
.denglu{
     width:100%;
    height:3.9rem;
    background: #398DE3;
    /* float: left; */
}
.fx{
    position: relative;
    top: 1.8rem;
}
.denglu1{
    position: fixed;
    height: 100%;
    width: 100%;
    bottom: 0;
    z-index: 99;
    background: #fff;
}
.tubiao1{
    width: 2.5rem;
        position: relative;
           top:0.5rem;
}
.span1{
    font-size: 1.2rem;
    color: #fff;
    margin-left: 7.5rem;
    position: relative;
    /* top:rem; */
}
.span2{
    font-size: 1rem;
    color: #fff;
    margin-left: 8rem;
    position: relative;
    /* top:-0.5rem; */
}
.login_body{
    width: 100%;
}
.login_text{

    width: 95%;
    height: 40px;
    border: none;
    border-bottom: 1px  #ccc solid;
    margin: 0 5px;
    outline: none;
}
.login_bth{
    height: 50px;
    margin: 10px;
}
.login_bth input{
    display: block;
    width: 100%;
    height: 100%;
    background: #508bdc;
    border-radius: 3px;
    border: none;
    color: white;
}
 .login_link{
    display: flex;
    justify-content: space-between;
}
 .login_link a{
    text-decoration: none;
    margin: 0 5px;
    font-size: 12px;
    color:#508bdc;
}
</style>