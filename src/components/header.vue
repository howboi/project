<template>
  <header class="header">
    <div @click="goHome" class="Logo flex justify-center">
      <img src="/Logo.svg" alt="Logo" class=" transform transition hover:scale-110 rounded-md" />
    </div>

    <div class="search text-black">
      <div class="search-container">
        <input
            v-model="keyword"
            type="text"
            placeholder="輸入股票代碼..."
            @keyup.enter="onSearch"
            class="search-input"
        />
        <button @click="onSearch" class="search-button">
          🔍
        </button>
      </div>
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
  background: linear-gradient(135deg, #e0f2fe 0%, #f3e5f5 100%);
}
.Logo {
  width: 5em;
  margin-left: 1em;
}
.search {
  display: flex;
  justify-content: center;
  flex: 1;
  max-width: 500px;
  margin: 0 24px;
}

.search-container {
  display: flex;
  align-items: center;
  background: white;
  border-radius: 25px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  overflow: hidden;
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  padding: 12px 20px;
  font-size: 16px;
  background: transparent;
  color: #374151;
}

.search-input::placeholder {
  color: #9ca3af;
}

.search-button {
  background: #f3f4f6;
  border: none;
  padding: 12px 16px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  margin: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
}

.search-button:hover {
  background: #e5e7eb;
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
