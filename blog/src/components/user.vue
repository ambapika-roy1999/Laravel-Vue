<template>
    <div><button v-on:click="my_function()"> user page button</button></div>
</template>
<script>
export default    
{
name:'USER',
methods:{
    my_function(){
        alert('user button');

}
}
}
</script>
