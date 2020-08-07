<template>
<div id="app">
    <div class="id">
       <span class="biaoti">个人中心</span>
    </div>
    <router-link to="/denglu">
    <div class="muli" v-show="gt">
        <img src="/image/qichetubiao.png" class="qichetubiao">
        <img src="/image/jianto.png" class="jianto">
    </div>
    </router-link>
    <div class="muli" v-show="!gt">
    <img src="/image/zsj.png" class="qichetubiao">
        <img src="/image/jianto.png" class="jianto">

    </div>
    <div class="zhongbu">
        <div class="no1">
            <img src="/image/wdsc.png" alt="" class="img01">
            <img src="/image/jianto.png" alt="" class="jianto1">
        </div>
        <div class="no2">
            <img src="/image/wdxx.png" alt="" class="img01">
            <img src="/image/jianto.png" alt="" class="jianto1">
        </div>
    </div>
    <div class="no3">
            <img src="/image/sz1.png" alt="" class="img2">
            <img src="/image/jianto.png" alt="" class="jianto1">
        </div>
        <div class="zhongbu">
        <div class="no1">
            <img src="/image/yjyfk.png" alt="" class="img01">
            <img src="/image/jianto.png" alt="" class="jianto1">
        </div>
        
        <div class="no2">
            <img src="/image/gywm.png" alt="" class="img01">
            <img src="/image/jianto.png" alt="" class="jianto1">
        </div>
        
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
           gt:true 
        }
    },
    created() {
        if(window.document.cookie=="username=John Doe"){
            this.gt=false
        }
    },
}
</script>
<style  scoped>
html{
    font-size: 10px;
}
#app{
    background: #f7f7f7;
}
.id{
    width: 100%;
    height: 3.9rem;
    background:#508bdc;
} 
.biaoti{
    margin-left: 9rem;
    position: relative;
    top: 1rem;
    color: #fff;
    font-size: 1.2rem;
}
.muli{
    border: 1px solid #ebebeb;
    border-right: none;
    border-left: none;
    margin-top: 1.2rem;
    width: 100%;
    height: 6rem;
    background:#fefefe;
}
.qichetubiao{
    margin-top: 0.7rem;
    margin-left: 0.5rem;
    width: 10rem;
}
.jianto{
    float: right;
    margin-top: 2rem;
    width: 30px;
}
.jianto1{
    float: right;
    margin-top: 1rem;
    width: 30px;
}
.zhongbu{
    margin-top: 1.2rem;
    width: 100%;
    height: 7rem;
        background:#fefefe;

    /* border: 1px solid #999; */
}
.no1{
    width: 100%;
    height: 3.5rem;
    
    border-bottom: 1px solid #ebebeb;
    border-top: 1px solid #ebebeb;
}
.no2{
    width: 100%;
    height: 3.5rem;
    border-bottom: 1px solid #ebebeb;
    /* border-top: 1px solid #999; */
}
.img01{
    width: 120px;
    margin-top: 8px;
    margin-left: 0.5rem;
}
.no3{
       margin-top: 1.2rem;
         background:#fefefe;
        border-top: 1px solid #ebebeb;
        border-bottom: 1px solid #ebebeb;
}
.img2{
    width: 100px;
    /* height: 39.38px; */
    margin-top: 6px;
    margin-left: 0.5rem;
}
</style>