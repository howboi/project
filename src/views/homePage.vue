<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const searchQuery = ref('')

const goToViewStock = () => {
  router.push('/view-stock')
}

const goAnalysis = () => {
  router.push('/stock-analysis')
}

const goLink = () => {
  router.push('/stock-link')
}

const goHome = () => {
  router.push('/')
}

const goAI = () => {
  router.push('/smart-ai')
}

const search = () => {
  // Add search functionality here
  console.log('Searching for:', searchQuery.value);
}
</script>

<template>
  <div class="homepage">
    <div class="flex header mr-5 gap-5">
      <span class="register huninn-regular ring text-black">註冊</span>
      <span class="login huninn-regular text-black">登入</span>
    </div>
    <div class="main-content mt-20">
      <div @click="goHome" class="flex justify-center">
        <img src="/Logo.svg" alt="AI Logo" class="Logo transform transition duration-300 hover:scale-110 rounded-md shadow-lg" />
      </div>
      <div class="content">
        <h1 class="huninn-regular mb-10">個股全面向健檢，快速搜出好股！</h1>
      </div>
      <div class="search-bar mb-100">
        <input
            v-model="searchQuery"
            class="ring-2 ring-black w-100 huninn-regular text-black"
            type="text"
            placeholder="輸入股票代碼..."
        />
        <button @click="search" class="ring-2 ring-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </button>
      </div>
      <div class="options flex justify-center margin-bottom-10">
        <button @click="goToViewStock" class="flex-col justify-center items-center text-black">
          <img src="/viewstock-1.svg" alt="Trend">股票速覽
        </button>
        <button @click="goAnalysis" class="flex-col justify-center items-center text-black">
          <img src="/analysis-1.svg" alt="Analysis">分析儀表
        </button>
        <button @click="goLink" class="flex-col justify-center items-center text-black text gap-2">
          <img src="/linkstock-1.svg" alt="News">連動個股
        </button>
      </div>
      <button @click="goAI" class="AI-button mb-20 transform transition-transform duration-300 hover:scale-110">
        <img src="/AIbutton.svg" alt="AI">
      </button>
    </div>
  </div>
</template>

<style scoped>
.homepage {
  background: #b0e0e6;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  /* 從 public 資料夾引用圖片 */
  background-image: url('/kbar.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
.header {
  position: absolute;
  top: 10px;
  right: 10px;
}
.register {
  margin-top: 10px;
  padding: 10px;
  border-radius: 0.5em;
  background: #a1cbd3;
  cursor: pointer;
}
.register:hover{
  color: #5E342C;
  background: white;
}
.login {
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  background: white;
  cursor: pointer;
}
.login:hover {
  color: #a1cbd3;
  background: #5E342C;
}
.Logo {
  width: 150px;
  margin-bottom: 50px;
}
.content{
  color: #333;
  font-size: 15px;
  text-align: center;
  font-weight: bold;
}
.search-bar {
  display: flex;
  justify-content: center;
  margin: 2.85em;
}
.search-bar input {
  font-weight: bold;
  padding: 10px;
  border: none;
  border-radius: 5px 0 0 5px;
  outline: none;
}
.search-bar button {
  padding: 10px;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}
.search-bar button:hover {
  color: black;
  background: #5E342C;
}
.options button{
  display: flex;
  justify-content: center;
  font-weight: 800;
  font-size: 20px;
  margin-left: 3.5em;
  margin-right: 3.5em;
  margin-bottom: 2em;
  width: 7em;
  padding: 10px;
  background: #a1cbd3;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.options button img {
  width: 4em;
  height: 4em;
}
.options button:hover {
  color: black;
  background: white;
}
.AI-button {
  width: 10em;
  padding: 0;
  border: 0;
  background: #a1cbd3;
  color: white;
  font-size: 16px;
  cursor: pointer;
}
</style>