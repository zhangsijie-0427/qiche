<template>
    <div class="id">
        <div class="input1">
        <img src="../../src/assets/log.png" class="log">
      <van-search v-model="value" placeholder="请输入你要查询的内容" class="input" />
      </div>
        <div class="lunbo">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item><img src="/image/lunbo2.png"></van-swipe-item>
        <van-swipe-item><img src="/image/lunbo2.png">2</van-swipe-item>
         <van-swipe-item><img src="/image/lunbo2.png">3</van-swipe-item>
          <van-swipe-item><img src="/image/lunbo2.png">4</van-swipe-item>
     </van-swipe>
</div>
        <div class="tubiao">
            <ul>
                <li>
                    <img src="/image/tubiao1.png"><br>
                    <span>常用功能</span>
                </li>
                <li>
                    <img src="/image/tubiao2.png"><br>
                    <span>用车养车</span>
                    </li>
                 <li>
                    <img src="/image/tubiao3.png"><br>
                    <span>隐藏亮点</span>
                    </li>
                     <li>
                    <img src="/image/tubiao4.png"><br>
                    <span>应急指南</span>
                    </li>
                     <li>
                    <img src="/image/tubiao5.png"><br>
                    <span>官方手册</span>
                    </li>
            </ul>

        </div>
        <div class="zhongbu">
            <div class="no1zhongbu">
                <!-- <van-uploader v-model="fileList" multiple  id="zzzz"/> -->
                <img src="/image/xiehuan.png" class="xiehuan">
                <img src="/image/tianjia.png" class="tianjia"> 

            </div>
            <div class="no2zhongbu">
                <span class="sp">常见问题</span><br>
                <img src="/image/no1.png" class="xiaotubiao">
            </div>
            <div class="no3zhongbu">
                <span class="sp">事故记录</span><br>
                <img src="/image/no2.png" class="xiaotubiao">


            </div>
            <div class="no4zhongbu">
                <span class="sp">保养手册</span><br>
                <img src="/image/no3.png" class="xiaotubiao">

            </div>
        </div>


    </div>
</template>
<script>

export default {
    data() {
        return {
             active: 0,
             value:'',
             mo:'p'
        }
    },
    // activated() {
    //     this.mo= window.document.cookie;
    //     console.log(1)
    //     alert(this.mo)
    // }
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
}
.xiehuan{
    float: right;
    width: 60px;
}
.tianjia{
    margin-left: 85px;
    margin-top: 70px;
    width: 80px;
}
#zzzz{
    position: absolute;
    top: 300px;
    left: 100px;
}
.sp{
        margin-left: 5px;
}
html{
    font-size: 10px;
}
.xiaotubiao{
    width: 50px;
    margin-left: 40px;
    margin-top: 10px;
}
.zhongbu{
    /* display: flex; */

    width: 100%;
    /* border: 1px solid red; */
    height: 16rem;
}
.id{
    width: 100%;
    height: 5rem;
    background:#508bdc;
}
.no1zhongbu{

    float: left;
    width: 65%;
    height: 258px;
    border-bottom: 1px solid #999;
    border-right: 1px solid #999;
}
.no2zhongbu{
    float: right;
    width: 34%;
    height: 85px;
   border-bottom: 1px solid #999;
}
.no3zhongbu{
        float: right;
    width: 34%;
    height: 85px;
   border-bottom: 1px solid #999;
   } 
 .no4zhongbu{
         float: right;
    width: 34%;
    height: 85px;
   border-bottom: 1px solid #999;
   }
.input{
    border-radius: 5px;
    position: relative;
    top: 0.8rem;
    left: 0.7rem;
    margin-bottom: 0.8rem;
    width: 82%;
    height: 2.1rem;
}
.log{
    width: 40px;
    float: right;
    margin-right: 5px;
    margin-top: 11px;
}
  .my-swipe .van-swipe-item {
    position: relative;
    top: 1rem;
    color: #fff;
    font-size: 20px;
    line-height:10px;
    text-align: center;
    /* background-color: #39a9ed; */
  }
  .van-swipe__indicators{
      position: relative;
      top: -5px;
  }
  .lunbo img{
      width: 100%;
  }
  .tubiao{
    width: 100%;
    height: 5.5rem;
    border-bottom: 1px solid #999;
    background: #fff;
  }
    .tubiao ul li{
        position: relative;
        top: 0.5rem;
        flex: 1;
        text-align: center;
    }
  .tubiao ul li img{
      width: 50px;
  }
  .tubiao ul{
      display: flex;
  }
</style>