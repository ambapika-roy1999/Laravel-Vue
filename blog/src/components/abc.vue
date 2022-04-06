<template>
    <div> 
        {{user}}
      <FORM_SUBMISSION @child-data="childData"/>
        <span>{{name}}</span>
        <button v-on:click="my_function1" > user page button</button>
        <button v-bind:disabled="btnstatus" >button</button>
        <button v-on:click="alert_function(alert_stat)" >my</button>
        <input type="text" v-model="name"/>
        <button v-on:click="my_function2">my_function2</button>
    </div>
</template>
<script>
import FORM_SUBMISSION from './form_submission.vue' 
export default    
{
name:'ABC',
components:{FORM_SUBMISSION},
data(){
return{
    name:"ambapika",
    btnstatus:false,
    alert_stat:true
}
},
props:[
  'user'
],
  methods:{
    my_function1(){
        alert('user button');
     this.name = "mawmaaa"
    },
    alert_function(alert_stat){
        alert(alert_stat);
    } ,
    my_function2(){
      this.$emit('change_function',"gghghgh");
    },
    childData(data){
      console.log(data);
    }
}
}
</script>
<style scoped>
h1 {
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
