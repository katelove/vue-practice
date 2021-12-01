<template lang="">
  <div>
    <button>
        <Icon></Icon>
      <slot>{{text}}</slot>
    </button>
  </div>
</template>
<script>

export default {
  name: "BaseBtn",
  props: {
    text: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "full",
    },
    icon:{
         type: String,
    },
    iconPosition:{
        type:String,
    },
    charLength:{
        type:Number
    },
    throttle:{
        type:Boolean
    },
    //是否啟用
    throttleTime:{
         type:Number
    },
    disabled :{
        type:Boolean
    }
  },
  data(){
      return{
         
      }
  },

};
</script>
<style lang=""></style>
