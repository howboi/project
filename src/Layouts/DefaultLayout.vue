<template>
  <div class="layout">
    <Header class="header" />
    <SideBar class="sidebar" />
    <main class="content">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from '../components/header.vue'
import SideBar from '../components/SideBar.vue'
</script>

<style scoped>
.layout {
  background: #d9ecf4;
  height: 100vh;
  display: grid;
  grid-template-rows: 64px 1fr;            /* header + 主體 */
  grid-template-columns: 200px 1fr;         /* sidebar + 內容 */
  grid-template-areas:
    "header header"
    "sidebar content";
}
.header {
  grid-area: header;
}
.sidebar {
  grid-area: sidebar;
  border-right: 1px solid #e5e7eb;
}
.layout {
  display: grid;
  grid-template-rows: 64px 1fr;
  /* 電腦版：200px 側欄 + 主體 */
  grid-template-columns: 200px 1fr;
}

@media (max-width: 768px) {
  .layout {
    /* 手機版：把側欄隱藏，變成漢堡選單，主體撐滿 */
    grid-template-columns: 0 1fr;
  }
}
</style>