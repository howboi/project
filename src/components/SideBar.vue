<template>
  <aside class="sidebar">
    <nav>
      <ul>
        <li :class="{ active: active === 'view-stock' }" @click="goToViewStock">
          <button class="flex-col justify-center items-center text-black hover:scale-110 rounded-md shadow-lg huninn-regular">
            <img src="/viewstock-1.svg" alt="Trend">股票速覽</button>
        </li>
        <li :class="{ active: active === 'stock-analysis' }" @click="goAnalysis">
          <button class="flex-col justify-center items-center text-black hover:scale-110 rounded-md shadow-lg huninn-regular">
            <img src="/analysis-1.svg" alt="Analysis">分析儀表</button>
        </li>
        <li :class="{ active: active === '/stock-link' }" @click="goLink">
          <button class="flex-col justify-center items-center text-black hover:scale-110 rounded-md shadow-lg huninn-regular">
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

</script>

<style scoped>
.sidebar {
  width: 180px;
  background: #d9ecf4;
  height: 0.5em;
}
button{
  background: #d9ecf4;
  border: #1a1a1a solid 1px;
}
ul {
  list-style: none;
  padding: 1em 5px;
}
li {
  background: #d9ecf4;
  padding: 0.5em 0.5em;
  cursor: pointer;
}
li.active {
  color: #2563eb;
  background: #d9ecf4;
  font-weight: 600;
}
</style>
