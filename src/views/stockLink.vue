<template>
  <div class="stock-link">
    <h2>連動個股 (快速捷徑)</h2>
    <ul class="saved-list">
      <li v-for="stock in savedStocks" :key="stock">
        <button @click="goToAnalysis(stock)">{{ stock }}</button>
      </li>
    </ul>
    <div class="add-stock">
      <input v-model="newSymbol" placeholder="輸入股票代碼" />
      <button @click="saveSymbol">儲存</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

const router = useRouter()
const newSymbol = ref('')
// 可以接 Pinia 或 localStorage 持久化，這裡用 localStorage 範例
const savedStocks = ref<string[]>(JSON.parse(localStorage.getItem('savedStocks') || '[]'))



// 每次進入頁面時提示未登入
onMounted(() => {
  Swal.fire({
    title: '尚未登入!',
    icon: 'warning',
    confirmButtonText: 'OK',
  })
})

function saveSymbol() {
  if (newSymbol.value && !savedStocks.value.includes(newSymbol.value)) {
    savedStocks.value.push(newSymbol.value)
    localStorage.setItem('savedStocks', JSON.stringify(savedStocks.value))
    newSymbol.value = ''
  }
}

function goToAnalysis(symbol: string) {
  // 帶參數到分析儀表頁，可用 query 或 path parameter
  router.push({ name: 'stock-analysis', query: { symbol } })
}
</script>

<style scoped>
.stock-link { padding: 16px; background: #d9ecf4; }
.saved-list { display: flex; flex-wrap: wrap; gap: 8px; list-style: none; padding: 0; }
.saved-list button { padding: 8px 12px; background: #fff; border: 1px solid #ccc; border-radius: 4px; }
.add-stock { margin-top: 16px; display: flex; gap: 8px; }
.add-stock input { flex: 1; padding: 8px; border: 1px solid #ccc; border-radius: 4px; }
.add-stock button { padding: 8px 16px; }
</style>