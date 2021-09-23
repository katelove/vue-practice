<template lang="">
    <button
        :class="[bg, rounded, textColor]"
        v-bind="$attrs"
        @click="$emit('click')"
    >
        <slot></slot>
    </button>
</template>
<script>
export default {
    props: {
        bg: {
            default: "bg-melancholyBlue"
        },
        rounded: {
            defauly: "rounded-2px"
        },
        textColor: {
            default: "text-white"
        }
    },
}
</script>
