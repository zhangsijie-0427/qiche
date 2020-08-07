<template>
    <div class="dibu">
              <van-tabbar v-model="active">
  <van-tabbar-item icon="home-o"><router-link to="/">用车</router-link></van-tabbar-item>
  <van-tabbar-item icon="search"><router-link to="/Wanerche">玩儿车</router-link></van-tabbar-item>
  <van-tabbar-item icon="friends-o"><router-link to="/Xinczs">行车助手</router-link></van-tabbar-item>
  <van-tabbar-item icon="setting-o"><router-link to="/Grenzx">个人中心</router-link></van-tabbar-item>
  
</van-tabbar>
    </div>
</template>
<script>
export default {
    data() {
        return {
            active:0
        }
    },
}
</script>
<style scoped>


</style>