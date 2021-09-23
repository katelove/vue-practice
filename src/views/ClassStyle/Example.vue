<template>
    <div><a href="#" :title="hint" :data="hint">{{text}}</a></div>
</template>

<script>
export default {
    data(){
        return{
            text:'把滑鼠移過來看看!',
            hint:'我是標題!'
        }
    }
}
</script>