<template>
    <button v-on:click="count++">
        You click me {{count}} times
    </button>
</template>

<script>
export default {
    name:'Button',
    data(){
        return{
            count:0
        }
    }
}
</script>