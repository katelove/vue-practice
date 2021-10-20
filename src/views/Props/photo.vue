<template lang="">
    <div>
        <h2>風景照</h2>
        <img :src="imgUrl">
    </div>
</template>
<script>
export default {
    name:'Photo',
    props: ["imgUrl"],
    
}
</script>
<style lang="">
    
</style>