<template>
   <div class="Yhtj">
        <!-- <div v-for="(item ,index) in list" :key="index">
            <div>{{item.date}}</div>
            <div>{{item.title}}</div>
        </div> -->
        <div class="id">   
            <router-link to="Xinczs">  
         <img src="../../src/assets/tubiao1.png" class="tubiao1">
         </router-link>  
       <span class="biaoti">油耗记录</span>
        </div>
        <div class="xinz">
        <van-button type="info" class="but">新增加油记录</van-button>
        </div>
        <div class="zhongbu">
                    <van-button type="info" class="but">最近</van-button>
                    <van-button type="info" class="but">6个月</van-button>
                    <van-button type="info" class="but">一年</van-button>
                    <a href="#" class="A1">历史记录></a>
        </div>
        <div class="dibu">
            <div class="xiaodibu">
                <ul>
                    <li>当前里程<br>
                        <span class="yans">公里</span>
                    </li>
                    <li>累计加油量<br>
                        <span  class="yans">升</span>
                    </li>
                    <li>累计加油金额<br>
                        <span  class="yans">元</span>
                    </li>
                    <li>最近油耗<br>
                    <span  class="yans">0L/100KM</span>
                    </li>
                    <li>平均油耗<br>
                        <span  class="yans">0L/100KM</span>
                    </li>
                    <li>平均油耗价<br>
                        
                        <span  class="yans">元</span>
                    </li>
                </ul>
            </div>
        </div>
       
   </div>
</template>
<script>
export default {
    data() {
        return {
            list:''
        }
    },
    created() {
        this.$axios({
      url: "https://www.fastmock.site/mock/cf3b3c56719ce4e244320dfd5c59bc86/api/home",
      method: "get",
      params: {}
    }).then(res => {
        this.list = res.data
      console.log(this.list)
    })
    },
}
</script>
<style scoped>
html{
    font-size: 10px;
}
.tubiao1{
    float: left;
    width: 2.5rem;
        position: relative;
           top:0.7rem;
}
.Yhtj{
    position: fixed;
    height: 100%;
    width: 100%;
    bottom: 0;
    z-index: 99;
    background: #fff;
}
.yans{
    font-weight: 600;
    color: #508bdc;
}
.dibu{
        width: 100%;
        height: 12.5rem;
        /* border: 1px solid red; */
    }
.id{
    width: 100%;
    height: 3.9rem;
    background:#508bdc;
}
.xiaodibu ul li{
    width: 32.5%;
    border: 1px solid #e0e0e0;
}
.xiaodibu ul{
        line-height: 40px;

    text-align: center;
    display: flex;
    flex-wrap: wrap;
    margin-left: 1.2rem;
    width: 90%;
    margin-top: 1.3rem;
    height: 10rem;
    /* border: 1px solid #e0e0e0; */
    /* background: red; */
}
.biaoti{
        margin-left: 6.5rem;
    position: relative;
    top: 1rem;
    color: #fff;
    font-size: 1.2rem;
}
.xinz{
    width: 100%;
    height: 5rem;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
}
.but{
    margin-top: 1rem;
    margin-left:1rem;
}
.zhongbu{
    height: 20rem;
    border-bottom: 1px solid #e0e0e0;
}
.A1{
    color: #a7c5ed;
    margin-left: 4rem;
}
</style>