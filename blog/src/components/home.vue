<template>
 <div>
     <h1>{{title}}</h1>
     <ABC v-on:change_function="my_function2($event)" :user="users"/>
     <!--$event is the keyword... 
     in javascript all the page components gets binds to the property declared .. 
     as soon as the component is hit control firers the respective js components ----> 
      <h1> hello my first vue js page</h1>
      <h2>{{message}}</h2>
      <button v-on:mouseover="my_function(message)">button</button>
      <table>
          <tr>
              <td>id</td>
              <td>name</td>
              <td>pet</td>
          </tr>
          <tr v-for="i in users" :key="i.id">
              <td>{{i.id}}</td>
              <td>{{i.name}}</td>
              <td>{{i.pet}}</td>
          </tr>
      </table>
      <div>home page</div>
  </div>
</template>
<script>
import ABC from './abc.vue'
export default {
    name:'HOME',
    components:{
       ABC
        },
    props:[
        'message'
    ],
    methods:{
        my_function(message){
            alert(message);
        },
        my_function2(eve){
        this.title=eve
        }
    },
    
         data(){
            return {
                title:"asian paints",
                users:[
                    {id:1, name:"ambapika", pet:"mjjawmaa"},
                    {id:2, name:"mawmaa", pet:"hhhh"}
                ]

             }
         }
    
}
</script>
