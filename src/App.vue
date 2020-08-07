<template>
  <div id="app">
     <router-view/>
    <div id="nav">
      <dibu></dibu>
    </div>
  </div>
</template>
<script>
import dibu from '@/components/dibu.vue'
export default {
  components:{
    dibu
  }
}
</script>
<style  scoped>
*{
      margin: 0;
    padding: 0;
}
</style>