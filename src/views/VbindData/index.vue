<template>
    <div>
        <h1>{{title}}</h1>
        <img :src="src" >
        <div :class="[ac,color]">today is good day</div>
    </div>
</template>

<script>
export default {
    name:'VindData',
    data(){
        return{
           src:require('@/assets/icon/logo.png'),
           title:'比較jquery和 vue 綁定資料那些不同',
           data:'',
           ac:'active',
           color:'red'

        }
    }
}
</script>