<template>
    <div class="Wanerche">
        <div class="tobu">
        <van-tabs v-model="active">
            <van-tab title="头条">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item><img class="img01" src="/image/lunbo3.png"></van-swipe-item>
            <van-swipe-item><img class="img01" src="/image/lunbo3.png"></van-swipe-item>
            <van-swipe-item><img class="img01" src="/image/lunbo3.png"></van-swipe-item>
            <van-swipe-item><img class="img01" src="/image/lunbo3.png"></van-swipe-item>
            </van-swipe>
            <div class="no1div"  v-for="(lis,index) in wan" :key="index">
                <img src="/image/qiche123.png" class="qiche123" alt="">
                    <div class="wenzi">{{lis.title}}</div>
                    <div class="riqi">{{lis.date}}</div>
            </div>
            
            
        </van-tab>
    <van-tab title="新车">
<div class="no1div"  v-for="(lis,index) in wan" :key="index">
                <img :src="lis.img" class="qiche123" alt="">
              
                    <div class="wenzi">{{lis.title}}</div>
                    <div class="riqi">{{lis.date}}</div>
            </div>
        
    </van-tab>
    <van-tab title="试驾导航">
        <div class="no1div"  v-for="(lis,index) in wan" :key="index">
                <img src="/image/falali.jpg" class="qiche123" alt="">
              
                    <div class="wenzi">{{lis.title}}</div>
                    <div class="riqi">{{lis.date}}</div>
            </div>
    </van-tab>
    <van-tab title="用车技巧">
<div class="no1div"  v-for="(lis,index) in wan" :key="index">
                <img :src="lis.img" class="qiche123" alt="">
              
                    <div class="wenzi">{{lis.title}}</div>
                    <div class="riqi">{{lis.date}}</div>
            </div>

    </van-tab>
    </van-tabs>

        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            wan:""
            ,
            active: 2,
        }
    },
    created() {
        let than =this
        this.$axios({
      url: "https://www.fastmock.site/mock/cf3b3c56719ce4e244320dfd5c59bc86/api/home",
      method: "get",
      params: {}
    }).then(res => {
        than.wan=res.data
        console.log(res.date)
      console.log(than.wan)
    })
    },
}
</script>
<style  scoped>
.riqi{
    float: right;
    font-size: 12px;
        margin-top: -27px;

    /* width: 225px; */
    margin-right: 23px;
}

.tobu{
     width: 100%;
    height: 3.9rem;
    /* background:#508bdc; */
}
.qiche123{
    margin-top: 7px;
    margin-left: 10px;
    width: 120px;
    height: 85px;
}
.no1div{
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #c7c7cb;
}
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    /* background-color: #39a9ed; */
  }
  .img01{
      width: 100%;
  }
  .wenzi{
         float: right;
    margin-top: 8px;
    width: 225px;
    margin-right: 10px;
    font-size: 12px;
      
  }
/* .Wanerche{
    position: fixed;
    height: 100%;
    width: 100%;
    bottom: 0;
    z-index: 99;
    background: #fff;
} */
.ul1 li{
    float: left;
}
</style>