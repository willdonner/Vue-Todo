<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <Footer></Footer>
    <img src="./assets/logo.png">
    <router-view/>
    <!-- <div>
      <span v-if="seen">sss</span>
    </div>
    
     <div id="app-4">
  
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      
    </li>
  
</div>
<div>
  <p>{{showmsg}}</p>
  <button @click="btn_showmsg">翻转1</button>
</div>

<div>
  <p>{{bindmsg}}</p>
  <input v-model="bindmsg">
</div>
<div>
  <input type="text" v-model="newItem" v-on:keyup.enter="addNew">
  <ul>
    <li v-for="item in items" v-bind:class="{finished:item.isFinished}" :key="item.id" 
    v-on:click="toggleFinsh(item)">
{{item.label}}
    </li>
  </ul>
 <component-a msgg="willdonnereee"></component-a>
</div> -->
  </div>
  
  
</template>

<script>
import Stroe from './stroe'
import componentA from './components/component.vue'


import Header from './todo/header.vue'
import Footer from './todo/foot.vue'
console.log(Stroe)
export default {
  
  name: 'App' ,
  data(){
    
    return{
    //   seen: true,
    //   todos: [
    //     {text: 'vue'},
    //     {text: 'willdonner'},
    //     {text: 'willdonner'},
    //     {text: 'willdonner'},
    //   ],
    //   showmsg: "hello vue",
    //   bindmsg: "this is vue",
    //   groceryList: [
    //   { id: 0, text: '蔬菜' },
    //   { id: 1, text: '奶酪' },
    //   { id: 2, text: '其他人类食物' }
    // ],
    // items: Stroe.fetch(),
    // newItem: '',
    }
  
    
  },
  //  components: { componentA },
  components:{
    Header,Footer
  },
  watch:{
    // items:{
    //   handler:function(items){
    //     Stroe.save(items)
    //   },
    //   deep:true
    // }
  },
  methods:{
      // btn_showmsg:function(){
      //   this.showmsg = this.showmsg.split(' ').reverse().join(' ')
      //         },
      // toggleFinsh(item){
      //   item.isFinished = !item.isFinished
      // },
      // addNew(){
      //   this.items.push({
      //     label: this.newItem,
      //     isFinished: false
      //   })
      //   this.newItem=''
      // }
    }
    
}


</script>

<style scoped>
.finished{
  text-decoration: underline
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  list-style: none;
  color: #2c3e50;
  margin-top: 60px;
}
#cover{
  position: absolute;
  left: 0;
  top:0;
  right: 0;
  bottom: 0;
}
</style>
