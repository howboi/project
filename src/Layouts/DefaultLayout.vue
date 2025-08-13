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
:root {
  --nav-size: 72px; /* Sidebar 寬度 & Header 高度 一致 */
}
.layout {
  background: #d9ecf4;
  height: 100vh;
  display: grid;
  grid-template-columns: var(--nav-size) 1fr;
  grid-template-rows: var(--nav-size) 1fr;
  grid-template-areas:
    "header header"
    "sidebar content";
}
.header {
  grid-area: header;
  width: var(--nav-size);
}
.sidebar {
  grid-area: sidebar;
  width: var(--nav-size);
}
.layout {
  display: grid;
  grid-template-rows: 100px 1fr;
  /* 電腦版：200px 側欄 + 主體 */
  grid-template-columns: 150px 1fr;
}

@media (max-width: 768px) {
  .layout {
    /* 手機版：把側欄隱藏，變成漢堡選單，主體撐滿 */
    grid-template-columns: 0 1fr;
  }
}
</style>