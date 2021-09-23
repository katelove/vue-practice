<template lang="">
    <input
        :type="type"
        class="border-black	border rounded"
        @input="$emit('input', $event.target.value)"
        v-bind="$attrs"
    />
</template>
<script>
export default {
    props: {
        type: {
            default: "text"
        }
    }    
}
</script>
