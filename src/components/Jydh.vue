<template>
<div class="Jydh">
    <div class="id">
        <router-link to="/Xinczs">
        <img src="../../src/assets/tubiao1.png" class="tubiao1">
        </router-link>
        <span class="span1">救援电话</span>
        <img src="/image/jiahao.png" class="jiahao">
    </div>
    <div class="zhongbu">
        <ul>
            <li>
                <span class="span2" style="font-weight: 600;">事故报警</span><br>
                <span class="span2">122</span>
                <img src="/image/dianhua.png" class="dianhua">
            </li>
            <li>
                 <span class="span2" style="font-weight: 600;">安联全国救援</span><br>
                <span class="span2">010-85355588</span>
                <img src="/image/dianhua.png" class="dianhua">
            </li>
            <li>
                 <span class="span2" style="font-weight: 600;">路华道路救援</span><br>
                <span class="span2">021-61961987</span>
                <img src="/image/dianhua.png" class="dianhua">
            </li>
            <li>
                 <span class="span2" style="font-weight: 600;">大陆汽车俱乐部救援中心</span><br>
                <span class="span2">4008181010</span>
                <img src="/image/dianhua.png" class="dianhua">
            </li>
            <li>
                 <span class="span2" style="font-weight: 600;">中国人保</span><br>
                <span class="span2">95518</span>
                <img src="/image/dianhua.png" class="dianhua">
            </li>
            <li>
                 <span class="span2" style="font-weight: 600;">平安保险</span><br>
                <span class="span2">95511</span>
                <img src="/image/dianhua.png" class="dianhua">
            </li>
            <li>
                 <span class="span2" style="font-weight: 600;">太平洋保险</span><br>
                <span class="span2">95500</span>
                <img src="/image/dianhua.png" class="dianhua">
            </li>

        </ul>
    </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style  scoped>
.id{
     width:100%;
    height:3.9rem;
    background: #398DE3;
    /* float: left; */
}
.dianhua{
    float: right;
    margin-right: 10px;
    width: 40px;
    position: relative;
    top: -13px;
}
.Jydh{
    position: fixed;
    height: 100%;
    width: 100%;
    bottom: 0;
    z-index: 99;
    background: #f6f5f6;
}
.tubiao1{

    width: 2.5rem;
        position: relative;
           top:0.5rem;
}
.span2{
    display: inline-block;
    margin-top: 10px;
    margin-left: 10px;
}
.zhongbu ul li{
   width: 100%;
   height: 4.5rem;
   border-bottom: 1px solid #c5c5c5;
   background: #ffffff;

}
.zhongbu ul{
    display: flex;
flex-wrap: wrap;
}
.span1{
    font-size: 1.2rem;
    color: #fff;
    margin-left: 7rem;
    position: relative;
    /* top:rem; */
}
.jiahao{
    margin-top: 12px;
    margin-right: 10px;
    float: right;
    width: 35px;
}
</style>