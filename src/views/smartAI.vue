<template>
  <div class="smart-ai-chat">
    <aside class="chat-list">
      <h3>今天</h3>
      <ul>
        <li class="active">近期股票趨勢</li>
        <li>台積電近期股價分析</li>
      </ul>
    </aside>
    <section class="chat-window">
      <header class="chat-header">
        <img src="/AIbutton.svg" alt="AI" class="avatar" />
        <h2>AI 智聊機器人</h2>
      </header>
      <div class="messages">
        <!-- 這裡顯示問答對話 -->
        <div v-for="(msg, idx) in messages" :key="idx" :class="['message', msg.from === 'ai' ? 'from-ai' : 'from-user']">
          <p>{{ msg.text }}</p>
        </div>
      </div>
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
const messages = ref<{ from: 'user' | 'ai'; text: string }[]>([
  { from: 'ai', text: '我是您的「AI 智聊機器人」！請問有什麼需要幫忙的嗎？' },
])

function sendMessage() {
  if (!inputText.value.trim()) return
  messages.value.push({ from: 'user', text: inputText.value })
  // TODO: 呼叫 AI API 並取得回覆
  messages.value.push({ from: 'ai', text: '這是回覆示例。' })
  inputText.value = ''
}
</script>

<style scoped>
.smart-ai-chat {
  display: grid;
  grid-template-columns: 200px 1fr;
  height: 100%;
  gap: 16px;
}
.chat-list {
  background: #f1f5f9;
  padding: 16px;
}
.chat-list ul {
  list-style: none;
  padding: 0;
}
.chat-list li {
  padding: 8px;
  cursor: pointer;
}
.chat-list li.active {
  background: #e0e7ff;
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
}
.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 8px;
}
.messages {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
}
.message {
  margin-bottom: 12px;
  max-width: 60%;
}
.from-ai {
  align-self: flex-start;
  background: #e0ffe0;
  padding: 8px 12px;
  border-radius: 12px;
}
.from-user {
  align-self: flex-end;
  background: #d1d5db;
  padding: 8px 12px;
  border-radius: 12px;
}
.chat-input {
  display: flex;
  padding: 12px;
  border-top: 1px solid #e5e7eb;
}
.chat-input input {
  flex: 1;
  height: 40px;
  padding: 0 12px;
  border: 1px solid #cbd5e1;
  border-radius: 20px;
  outline: none;
}
.chat-input button {
  margin-left: 8px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
</style>