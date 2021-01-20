<template>
  <div id="app">
    <div>{{ count }},{{ double }}</div>
    <button @click="add">点击</button>
  </div>
</template>

<script>
import { computed, ref } from '@vue/composition-api'

export default {
  name: 'App',
  setup(){
      const count = ref(1)
      const double = computed(()=>{
        return count.value*2
      })
     
      const add = ()=>{
        count.value++
      }
      return {count,double,add}
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
