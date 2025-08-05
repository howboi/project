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
</style>