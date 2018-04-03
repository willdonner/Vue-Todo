<template>
  <section class="real_app">
      <input type="text" class="add_input" autofocus="autofocus" 
      placeholder="do someting..." @keyup.enter="add_todo">
      <Item :todo="todo"></Item>
  </section>
</template>
<script>
import Item from './item.vue'
export default {
    data(){
        return{
            todo:{
                id:0,
                content:"willdonner",
                completed:false 
            }
        }
    },
    components:{
        Item
    },
  methods:{
      add_todo(){

      }
  }
}
</script>

<style>
.real_app {
        width:600px;
        margin:0 auto;
        box-shadow:0 0 5px #666;
    }
    .add_input {
        position: relative;
        margin: 0;
        width: 100%;
        font-size: 24px;
        font-family: inherit;
        font-weight: inherit;
        line-height: 1.4em;
        border: 0;
        outline: none;
        color: inherit;
        box-sizing: border-box;
        font-smoothing: antialiased;
        padding: 16px 16px 16px 36px;
        border: none;
        box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
    }
</style>

