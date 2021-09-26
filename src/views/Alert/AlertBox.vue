<template>
    <div class="demo-alert-box">
        <strong>Error!</strong>
        <slot></slot>
    </div>
</template>

<style scoped>
.demo-alert-box{
    background: rgb(240, 111, 111);
    color: white;
}
</style>