<template>
  <div class="profile-menu" v-if="visible" @click.outside="close">
    <div class="header">
      <img :src="avatarUrl" alt="avatar" class="avatar" />
      <div>
        <h4>{{ userName }}</h4>
        <small>{{ userRole }}</small>
      </div>
    </div>
    <ul class="options">
      <li @click="go('favorites')">自選清單</li>
      <li @click="go('settings')">個人設定</li>
      <li @click="go('invite')">推薦朋友</li>
      <li @click="logout">登出</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

// 點擊頭像時由父元件控制顯示
const props = defineProps<{ visible: boolean; onClose: () => void }>
const emit = defineEmits<['update:visible']>()

const router = useRouter()
const userName = '巴菲佑'
const userRole = 'VIP 用戶'
const avatarUrl = '/path/to/avatar.jpg'

// 點外面就關閉 (可用 v-click-outside 指令或自訂)
function close() {
  emit('update:visible', false)
}

// 導航
function go(routeName: string) {
  emit('update:visible', false)
  router.push({ name: routeName })
}

function logout() {
  // 清 token、登出邏輯…
  emit('update:visible', false)
  router.push({ name: 'home' })
}
</script>

<style scoped>
.profile-menu {
  position: absolute;
  top: 64px;          /* 根據 Header 高度微調 */
  right: 16px;
  width: 200px;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  z-index: 1000;
}
.header {
  display: flex;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid #e5e7eb;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 8px;
}
.options {
  list-style: none;
  margin: 0;
  padding: 8px 0;
}
.options li {
  padding: 8px 12px;
  cursor: pointer;
}
.options li:hover {
  background: #f5f5f5;
}
</style>
