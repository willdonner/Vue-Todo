<template>
  <div id="app-2">
  <h1>{{msg}}</h1>
  <h2>{{msgg}}</h2>
  <button v-on:click="onClick">Click!</button>
</div>

</template>

<script>
export default {
  data () {
    return {
      msg: 'this is a component a!'
    }
  },
  props:['msgg'],
  methods:{
        onClick:function(){
          console.log(this.msg)
        }
  } 
}
// var app2 = new Vue({
//   el: '#app-2',
//   data: {
//     message: '页面加载于 ' + new Date().toLocaleString()
//   }
// })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
