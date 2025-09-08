<template xmlns="">
  <div class="view-stock">
    <!-- 上方：標題 & 自選按鈕 -->
    <div class="title">
      <img src="/titlebar.svg" alt="block" class="tit">
      <div class="row heading flow-circular-regular text-black">
        <h2 class="name"><strong>{{ symbol }} {{ name }}</strong></h2>
        <div class="price text-black">
          目前價格：<strong>{{ price }}</strong>
          <span class="change flow-circular-regular" :class="{ up: changePct > 0, down: changePct < 0 }">
            {{ change > 0 ? '+' : '' }}{{ change }} ({{ changePct }}%)
          </span>
        </div>
        <button class="fav flow-circular-regular text-black font-extrabold"><strong>＋ 自選</strong></button>
      </div>
    </div>

    <div class="grid">
      <!-- 主圖表 -->
      <section class="main">
        <StockChartPlaceholder />
      </section>

      <!-- 右側資訊欄 -->
      <aside class="right">
        <StatCard class="prob-container">
          <div><strong class="prob text-black">隔日上漲機率</strong></div>
          <div class="circle-row">
            <div class="empty-space"></div>
            <div class="circle-wrapper">
              <img src="/circle.svg" alt="circle" class="circle-bg" />
              <div class="value"><strong>75%</strong></div>
            </div>
          </div>
        </StatCard>

        <StatCard class="info-card">
          <strong>回測依據</strong>
          <div class="data-row">
            <strong>看機器學習跑出啥</strong>
          </div>
        </StatCard>

        <div class="tags-grid">
          <StatCard class="tag text-black" variant="positive">
            <strong>技術<br/>偏多</strong>
          </StatCard>
          <StatCard class="tag text-black" variant="positive">
            <strong>籌碼<br/>偏多</strong>
          </StatCard>
          <StatCard class="tag text-black" variant="negative">
            <strong>消息<br/>偏空</strong>
          </StatCard>
          <StatCard class="tag text-black" variant="positive">
            <strong>基本<br/>偏多</strong>
          </StatCard>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
import StatCard from '../components/StatCard.vue'

const symbol = '2330'
const name = '台積電'
const price = 949
const change = 31
const changePct = 3.38
</script>

<style scoped>
.view-stock {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.title{
  position: relative;
  display: inline-block;
}
.tit{
  display: block;
  width: 97%;
  height: auto;
}
.row{
  position: absolute;
  top: 20px;           /* 距離上方 20px */
  left: 30px;          /* 距離左邊 20px */
}
.heading {
  display: flex;
  align-items: center;
  gap: 12px;
}
.name{
  font-size: 1.5em;
}
.price {
  position: relative;
  left: 450px;
  display: inline-block;
  margin-left: 12px;
}
.change.up { color: #ef4444; }
.change.down { color: #22c55e; }
.fav {
  position: relative;
  top: 0px;
  left: 1000px;
  height: 3em;
  border-radius: 16px;
  border: 1px solid #cbd5e1;
  padding: 0 12px;
  background: #fff;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 16px;
}
.main {
  background: white;
  border-radius: 8px;
  padding: 16px;
  width: 94%;
}
.right {
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-left: -50px;
}

.prob-container {
  position: relative;
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
}
.prob {
  font-size: 1.8em;
  margin-bottom: 8px;
}

.circle-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: auto;
}

.empty-space {
  width: 20%;
}

.circle-wrapper {
  position: relative;
  width: 12em;
  height: 12em;
  margin-right: 1em;
  margin-bottom: 0.25em;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: -12px; /* 向左移 12px，可根據需求調整數值 */
  z-index: 1;
}

.value {
  position: relative;
  z-index: 2;
  font-size: 1.5em;
  font-weight: bold;
  right: 12px;
}

.info-card {
  padding: 16px;
  width: 100%;
}

.data-row {
  margin-top: 8px;
  color: #666;
}

.tags-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
}

.tag {
  text-align: center;
  padding: 12px;
  font-size: 0.9em;
  line-height: 1.4;
}

.variant-positive {
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  color: #28a745;
}

.variant-negative {
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  color: #dc3545;
}

</style>
