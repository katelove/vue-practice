<template lang="">
  <div>
      <ul>
          <li v-for="item in symbolObject"
          :key="item.name"
          >
            name: {{item.name}} tricker:{{item.tricker}}
          </li>
      </ul>
  </div>
</template>
<script>
export default {
  name: "jsIndex",
  data() {
    return {
      symbolObject: {
        'BTCUSDT': {
          ticker: {
          },
          name: "ATC/USDT",
          symbol: "BTCUSDT",
        //   icon: require("@/assets/crypto/btc.png"),
        },
        'BNBUSDT': {
          ticker: {},
          name: "BNB/USDT",
          symbol: "BNBUSDT",
        //   icon: require("@/assets/crypto/bnb.png"),
        },
        'ETHUSDT': {
          ticker: {},
          name: "ETH/USDT",
          symbol: "ETHUSDT",
        //   icon: require("@/assets/crypto/eth.png"),
        },
      },
    };
  },
};
</script>
<style lang=""></style>
