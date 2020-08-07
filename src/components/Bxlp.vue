<template>
    <div class="Bxlp">
    <div class="id">
        <router-link to="/Xinczs">
        <img src="../../src/assets/tubiao1.png" class="tubiao1">
        </router-link>
        <span class="span1">保险理赔</span>
        <span class="jiahao">分享</span>
    </div>
    <img src="/image/bxlp1.png" alt="" class="bxlp1">
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
.Bxlp{
    position: fixed;
    height: 100%;
    width: 100%;
    bottom: 0;
    z-index: 99;
    background: #f6f5f6;
}
.span1{
    font-size: 1.2rem;
    color: #fff;
    margin-left: 7rem;
    position: relative;
    /* top:rem; */
}
.tubiao1{

    width: 2.5rem;
        position: relative;
           top:0.7rem;
}
.jiahao{
    margin-top: 19px;
    margin-right: 10px;
    float: right;
    width: 35px;
    color: #fff;
    font-size: 17px;
}
.bxlp1{
    width: 100%;
}
</style>