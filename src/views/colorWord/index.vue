<template lang="">
  <div>
    <ul>
      <li
        v-for="(item, index) in titileName"
        :key="index"
        class="item"
        :class="{ active: index === activeIndex }"
        @click="activeIndex = index"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "colorWord",
  data() {
    return {
      titileName: ["新聞", "股市", "拍賣", "購物中心"],
      activeIndex: 0,
      isActive: false
    };
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.item {
  background: brown;
  color: white;
  border-radius: 5px;
  padding: 3px;
  cursor: pointer;
}
.active {
  background-color: #fa8;
  color: #fff;
}
</style>
