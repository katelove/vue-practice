<template lang="">
    <div>
        <h2>透過emit向外傳遞 {{cash}}</h2>
        <button v-on:click="incrementTotal">按我</button>
        <buttonCounter :increment="incrementTotal"></buttonCounter>
        <hr>
         <buttonCounter></buttonCounter>
    </div>
</template>
<script>
import buttonCounter from "@/views/Emit/buttonCounter.vue"

export default {
    name:'emitIndex',
    data(){
        return{
            cash:300
        }
    },
    components:{
        buttonCounter
    },
    methods:{
        incrementTotal(){
            this.cash ++;
        }
    }
    
}
</script>
