<template>
  <header class="header">
    <div @click="goHome" class="Logo flex justify-center">
      <img src="/Logo.png" alt="AI Logo" class="Logo transform transition duration-300 hover:scale-110 rounded-md" />
    </div>

    <div class="search">
      <input
          v-model="keyword"
          type="text"
          placeholder="輸入股票代碼..."
          @keyup.enter="onSearch"
      />
      <button @click="onSearch">🔍</button>
    </div>

    <div class="actions">
      <button @click="goAI" class="ai"><img src="/AIbutton.svg" alt="AI"></button>
      <div class="avatar">🙂</div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push('/')
}

const goAI = () => {
  router.push('/smart-ai')
}

const keyword = ref('')
const onSearch = () => {
  console.log('search:', keyword.value)
  // 你可以在這裡觸發 API 或 router push
}
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  background: #eaf2f7;
  height: 64px;
  border-bottom: 1px solid #e5e7eb;
}
.Logo {
  width: 4em;
}
.search {
  display: flex;
  gap: 4px;
  flex: 1;
  max-width: 520px;
  margin: 0 24px;
}
.search input {
  flex: 1;
  height: 36px;
  padding: 0 12px;
  border: 1px solid #cbd5e1;
  border-radius: 18px;
  outline: none;
}
.actions {
  display: flex;
  align-items: center;
  gap: 12px;
}
.ai {
  width: 5em;
  border: none;
  background: #ece0ff;
  padding: 6px 12px;
  border-radius: 1px;
}
.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
