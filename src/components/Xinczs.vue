<template>
    <div id="app">
    <div class="id">
       <span class="biaoti">行车助手</span>
    </div>
    <div class="no2">
        
            <img src="/image/sgjl.png" alt="" class="img01">
            <img src="/image/jianto.png" alt="" class="jianto1">
        </div>
        <router-link to="/Yhtj"> <div class="no2" >
       
            <img src="/image/yhtj.png" alt="" class="img01">
            <img src="/image/jianto.png" alt="" class="jianto1">
        </div>
        </router-link>
        <div class="no2">
            <img src="/image/clsymyd.png" alt="" class="img02">
            <img src="/image/jianto.png" alt="" class="jianto1">
        </div>
        <div class="no2">
            <img src="/image/wzbl.png" alt="" class="img01">
            <img src="/image/jianto.png" alt="" class="jianto1">
        </div>
        <div class="no2">
            <img src="/image/sgpz.png" alt="" class="img01">
            <img src="/image/jianto.png" alt="" class="jianto1">
        </div>
        <div class="no2">
            <img src="/image/sgcllc.png" alt="" class="img02">
            <img src="/image/jianto.png" alt="" class="jianto1">
        </div>
        <router-link to="/Bxlp">
        <div class="no2">
            <img src="/image/bxlp.png" alt="" class="img01">
            <img src="/image/jianto.png" alt="" class="jianto1">
        </div>
        </router-link>
        <router-link to="/Jydh">
        <div class="no2">
            <img src="/image/jydh.png" alt="" class="img01">
            <img src="/image/jianto.png" alt="" class="jianto1">
        </div>
        </router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
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
.img02{
      position: relative;
    top: -3px;
    width: 165px;
    margin-top: 8px;
    margin-left: 0.5rem;
}
.jianto1{
    float: right;
    margin-top: 1rem;
    width: 30px;
}
</style>