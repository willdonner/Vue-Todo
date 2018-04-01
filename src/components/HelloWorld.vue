<template>
  <div id="app-2">
  <span v-bind:title="message">
    鼠标悬停此处几秒，
    可以看到此处动态绑定的 title！
  </span>
  
</div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      message: '页面加载于 ' + new Date().toLocaleString(),
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
