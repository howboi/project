<template>
  <aside class="sidebar">
    <nav>
      <ul>
        <li :class="{ active: active === 'view-stock' }" @click="goToViewStock">
          <button class="flex-col justify-center items-center text-black hover:scale-110 rounded-md shadow-lg">
            <img src="/viewstock-1.svg" alt="Trend">股票速覽</button>
        </li>
        <li :class="{ active: active === 'stock-analysis' }" @click="goAnalysis">
          <button class="flex-col justify-center items-center text-black hover:scale-110 rounded-md shadow-lg">
            <img src="/analysis-1.svg" alt="Analysis">分析儀表</button>
        </li>
        <li :class="{ active: active === '/stock-link' }" @click="goLink">
          <button class="flex-col justify-center items-center text-black hover:scale-110 rounded-md shadow-lg">
            <img src="/linkstock-1.svg" alt="News">連動個股</button>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const active = ref(route.name?.toString() ?? 'home')

const goToViewStock = () => {
  router.push('/view-stock')
}

const goAnalysis = () => {
  router.push('/stock-analysis')
}

const goLink = () => {
  router.push('/stock-link')
}

function go(name: string) {
  active.value = name
  router.push({ name })
}

function set(name: string) {
  active.value = name
  // 你也可以放 modal 打開或非 router 的跳轉
}
</script>

<style scoped>
.sidebar {
  width: 180px;
  background: #d9ecf4;
  height: 0.5em;
}
button{
  background: #d9ecf4;
}
ul {
  list-style: none;
  padding: 12px 0;
}
li {
  background: #d9ecf4;
  padding: 12px 16px;
  cursor: pointer;
  border-left: 4px solid transparent;
}
li.active {
  color: #2563eb;
  background: #eff6ff;
  border-left-color: #2563eb;
  font-weight: 600;
}
</style>
