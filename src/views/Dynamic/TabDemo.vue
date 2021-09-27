<template>
  <div>
    <button
      v-for="tab in tabs"
      :key="tab"
      :class="['tab-button', { active: currentTab === tab }]"
      @click="currentTab = tab"
    >
      {{ tab }}
    </button>

    <keep-alive>
        <component :is="currentTabComponent" class="tab"></component>
    </keep-alive>
  </div>
</template>

<script>
import tabposts from "@/views/Dynamic/tab-posts.vue";
import tabarchive from "@/views/Dynamic/tab-archive.vue";
export default {
  name: "TabDemo",
  data() {
    return {
      currentTab: "Posts",
      tabs: ["Posts", "Archive"],
    };
  },
  components: {
    tabposts,
    tabarchive
  },
computed:{
    currentTabComponent:function(){
        return "tab"+this.currentTab.toLowerCase()
    }
}
};
</script>

<style scoped src="@/style/dynamic.css">
</style>