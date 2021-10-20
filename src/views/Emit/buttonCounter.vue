<template lang="">
    <div>
        <button @click="incrementCounter">{{counter}}</button>
        <input type="number">
    </div>
</template>
<script>
export default {
    name:'buttonCounter',
    data(){
        return{
            counter:1
        }
    },
    methods:{
        incrementCounter(){
            this.$emit('increment')
        }
    }
}
</script>
<style lang="">
    
</style>