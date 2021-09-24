<template>
    <input 
    :value="value"
    @input="$emit('input',$event.target.value)"/>
</template>