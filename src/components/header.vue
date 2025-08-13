<template>
  <header class="header">
    <div @click="goHome" class="Logo flex justify-center">
      <img src="/Logo.svg" alt="Logo" class=" transform transition hover:scale-110 rounded-md" />
    </div>

    <div class="search text-black">
      <input
          v-model="keyword"
          type="text"
          placeholder="輸入股票代碼..."
          @keyup.enter="onSearch"
      />
      <button @click="onSearch" class="sbutton hover:scale-110 rounded-md"><img src="/searchButton.svg" alt="search"></button>
    </div>

    <div class="actions">
      <div @click="goAI" class="ai hover:scale-110"><img src="/AIbutton.svg" alt="AI"></div>
      <div class="avatar hover:scale-110 rounded-md"><img src="/avatar.svg" alt="bafeiyo"></div>
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
  padding: 0 1.5em;
  background: #d9ecf4;
}
.Logo {
  width: 6.3em;
}
.search {
  display: flex;
  gap: 4px;
  flex: 1;
  max-width: 520px;
  margin: 0 24px;
}
.sbutton{
  background: #d9ecf4;
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
  width: 6em;
  border: 0;
}
.avatar {
  width: 3.3em;
  height: 36px;
  border-radius: 50%;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
