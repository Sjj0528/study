<template>
  <div class="login">
    <h1>{{ msg1 }}</h1>
<!-- msg1是引用副组件传来的字符串，用双花括号表示 -->
    <label for="usename">账号</label>
    <!-- <label> 标签为 input 元素定义标注，当用户选择该标签时，浏览器就会自动将焦点转到和标签相关的表单控件上。 -->
    <input id="usename" type="text">
    <br />
    <label for="password">输入密码</label>
    <input id="password" type="password" v-model="valPass1"  v-on:input ="inputFunc">
    <br />
    <label for="repassword">请再次输入密码</label>
    <input id="repassword" type="password" v-model="valPass2"  v-on:input ="inputFunc">
    <br />
    <button @click="submit">submit</button>
  </div>
</template>
<script>
export default {
  name: 'Login',
  props: {
    msg1: String
  },
  data(){
    return {
      msg2:"HEIHEI",
      valPass1:'',
      valPass2:''
    }
  },
methods:{
  inputFunc(){
     if(this.valPass1 === this.valPass2){
      console.log("相等的")
     }
  },
  submit() {
  }
}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
