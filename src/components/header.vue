<template>
  <header class="header">
    <!-- 左邊 Logo -->
    <div @click="goHome" class="Logo flex justify-center">
      <img src="/Logo.svg" alt="Logo" class="logo-img" />
    </div>

    <!-- 中間 搜尋框 -->
    <div class="search text-black">
      <div class="search-container">
        <input
          v-model="keyword"
          type="text"
          placeholder="輸入股票代碼..."
          @keyup.enter="onSearch"
          class="search-input"
        />
        <button @click="onSearch" class="search-button">🔍</button>
      </div>
    </div>

    <!-- 右邊功能 -->
    <div class="actions">
      <!-- AI 智聊按鈕 -->
      <div @click="goAI" class="ai hover:scale-110">
        <img src="/AIbutton.svg" alt="AI" />
      </div>

      <!-- 社群 icon -->
      <div class="social-icons">
        <img :src="facebook" alt="Facebook" class="social-icon" />
        <img :src="instagram" alt="Instagram" class="social-icon" />
      </div>

      <!-- 使用者頭像 -->
      <div class="avatar hover:scale-110 rounded-md">
        <img src="/avatar.svg" alt="avatar" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// 用相對路徑匯入 SVG 模組
const facebook = '/src/assets/facebook-svgrepo-com.svg'
const instagram = '/src/assets/instagram-svgrepo-com.svg'

const router = useRouter()

const goHome = () => router.push('/')
const goAI = () => router.push('/smart-ai')

const keyword = ref('')
const onSearch = () => {
  if (keyword.value === '2330') router.push('/view-stock')
}
</script>

<style scoped>
/* Header 背景 */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5em;
  background: linear-gradient(135deg, #e0f2fe 0%, #f3e5f5 100%);
  min-height: 72px;
}

/* Logo */
.Logo {
  margin-left: 1em;
}
.logo-img {
  width: 60px; /* 跟 Figma 一樣大 */
  height: auto;
}

/* 搜尋框 */
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

/* 右邊區塊 */
.actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

/* AI 按鈕 */
.ai {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
}
.ai img {
  height: 44px;
  width: auto;
}

/* 社群 icon */
.social-icons {
  display: flex;
  align-items: center;
  gap: 16px;
}
.social-icon {
  width: 40px;
  height: 40px;
  padding: 8px;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  transition: transform 0.2s ease;
}
.social-icon:hover {
  transform: scale(1.1);
}

/* 頭像 */
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>