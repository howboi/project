<template>
  <div class="smart-ai-chat">
    <!-- 左側選單 -->
    <aside class="chat-list">
      <h3>今天</h3>
      <ul>
        <li :class="{ active: active === 'trend' }" @click="setActive('trend')">近期股票趨勢</li>
        <li :class="{ active: active === 'tsmc' }" @click="setActive('tsmc')">台積電近期股價分析</li>
      </ul>
    </aside>

    <!-- 聊天區域 -->
    <section class="chat-window">
      <header class="chat-header">
        <img src="/AIbutton.svg" alt="AI" class="avatar" />
        <span class="title">AI 智聊機器人</span>
      </header>

      <!-- 對話訊息 -->
      <div class="messages">
        <div
          v-for="(msg, idx) in messages"
          :key="idx"
          :class="['message', msg.from === 'ai' ? 'from-ai' : 'from-user']"
        >
          <img v-if="msg.from === 'ai'" src="/AIbutton.svg" class="avatar-sm" />
          <p>{{ msg.text }}</p>
        </div>
      </div>

      <!-- 快速選單 -->
      <div class="quick-menu">
        <button v-for="(btn, index) in quickBtns" :key="index" @click="sendQuick(btn)">
          {{ btn }}
        </button>
      </div>

      <!-- 輸入框 -->
      <footer class="chat-input">
        <input v-model="inputText" placeholder="請輸入文字..." @keyup.enter="sendMessage" />
        <button @click="sendMessage">➤</button>
      </footer>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const inputText = ref('')
const active = ref('trend')
const messages = ref<{ from: 'user' | 'ai'; text: string }[]>([
  { from: 'ai', text: '我是您的「AI 智聊機器人」！請問有什麼需要幫忙的嗎？' },
])

const quickBtns = ['近期選股推薦', '大盤近況速覽', '族群趨勢速查', '各式指標教學']

function setActive(tab: string) {
  active.value = tab
}

function sendMessage() {
  if (!inputText.value.trim()) return
  messages.value.push({ from: 'user', text: inputText.value })
  // TODO: 接 AI API 回覆
  messages.value.push({ from: 'ai', text: '這是回覆示例。' })
  inputText.value = ''
}

function sendQuick(text: string) {
  messages.value.push({ from: 'user', text })
  // TODO: 接 AI API 回覆
  messages.value.push({ from: 'ai', text: `這是「${text}」的示例回覆。` })
}
</script>

<style scoped>
.smart-ai-chat {
  display: grid;
  grid-template-columns: 200px 1fr;
  height: 100vh;
  background: linear-gradient(135deg, #e0f2fe 0%, #f3e5f5 100%);
  gap: 16px;
  padding: 16px;
}
.chat-list {
  background: #f1f5f9;
  padding: 16px;
  border-radius: 8px;
}
.chat-list h3 {
  margin-bottom: 12px;
}
.chat-list ul {
  list-style: none;
  padding: 0;
}
.chat-list li {
  padding: 8px;
  cursor: pointer;
  border-radius: 6px;
  transition: background 0.2s;
}
.chat-list li.active {
  background: #e0e7ff;
  font-weight: bold;
}
.chat-list li:hover {
  background: #e5e7eb;
}
.chat-window {
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
}
.chat-header {
  display: flex;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid #e5e7eb;
  font-weight: bold;
}
.chat-header .avatar {
  width: 72px;
  height: 72px;
  margin-right: 8px;
}
.messages {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.message {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  max-width: 70%;
}
.from-ai {
  align-self: flex-start;
}
.from-ai p {
  background: #d1fae5;
}
.from-user {
  align-self: flex-end;
  flex-direction: row-reverse;
}
.from-user p {
  background: #e5e7eb;
}
.message p {
  padding: 8px 12px;
  border-radius: 12px;
}
.avatar-sm {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}
.quick-menu {
  display: flex;
  gap: 10px;
  padding: 10px;
  background: #f9fafb;
  border-top: 1px solid #e5e7eb;
}
.quick-menu button {
  padding: 6px 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s;
}
.quick-menu button:hover {
  background: #f3f4f6;
}
.chat-input {
  display: flex;
  align-items: center; /* 讓箭頭垂直置中 */
  padding: 12px;
  border-top: 1px solid #e5e7eb;
  gap: 8px; /* input 和 button 間隔 */
}

.chat-input input {
  flex: 1;
  height: 40px;
  padding: 0 12px;
  border: 1px solid #cbd5e1;
  border-radius: 20px;
  outline: none;
  font-size: 14px;
}

.chat-input button {
  display: flex;               
  align-items: center;
  justify-content: center;
  width: 40px;                 
  height: 40px;
  background: #2563eb;         
  color: white;                
  border: none;
  border-radius: 50%;          
  font-size: 18px;
  cursor: pointer;
  flex-shrink: 0;              
}

.chat-input button {
  margin-left: 8px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 18px;
  cursor: pointer;
}
</style>
