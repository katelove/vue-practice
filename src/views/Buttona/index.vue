<template lang="">
    <div>
        <Button @click="pass">alert按我</Button>
        <Button @click="passA">console.log 按我</Button>
        <Button @click="passB">confirm 按我</Button>
    </div>
</template>
<script>
import Button from "@/views/Buttona/Button.vue";
export default {
    components:{
        Button
    },
    methods:{
        pass(){
            alert('!')
        },
        passA(){
            console.log('@@@')
        },
        passB(){
            confirm('******')
        }
    }

}
</script>
<style lang="">
    
</style>