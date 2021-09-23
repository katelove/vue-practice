<template>
  <div>
    <h3>事件處理(Event Handing)</h3>
    <button type="button" @click="prompt">按我取得訊息</button>
    <p>{{ msg }}</p>

    <h3>事件修飾符(Event Modifiers)</h3>
    <h5>
      .stop防止事件冒泡==> stopPropagation就是阻止目标元素的事件冒泡到父级元素。
    </h5>
    <div @click="outer">
      <div @click="middle">
        <button @click.stop="inner">按我!</button>
      </div>
    </div>
    <h5>
      .prevent防止執行預設的行為。==>使用a
      href="#"當成點擊的按鈕時，通常會使用event.preventDefault()，防止瀏覽器的網址列出現#
    </h5>
    <div>
        <a href="#" type="button" @click.prevent="prompt">按我取得訊息</a>
        <p>{{msg}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "沒發生任何事",
    };
  },
  methods: {
    prompt() {
      this.msg = "按鈕被按了！監聽到 click 事件。";
    },
    inner() {
      alert("這是inner button");
    },
    middle() {
      alert("這是middle button");
    },
    outer() {
      alert("這是outer button");
    },
  },
};
</script>
