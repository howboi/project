<template>
  <div class="view-stock">
    <!-- 上方：標題 & 自選按鈕 -->
    <div class="row heading">
      <h2>{{ symbol }} {{ name }}</h2>
      <div class="price text-black">
        目前價格：<strong>{{ price }}</strong>
        <span class="change" :class="{ up: changePct > 0, down: changePct < 0 }">
          {{ change > 0 ? '+' : '' }}{{ change }} ({{ changePct }}%)
        </span>
      </div>
      <button class="fav text-black font-extrabold">＋ 自選</button>
    </div>

    <div class="grid">
      <!-- 主圖表 -->
      <section class="main">
        <StockChartPlaceholder />
      </section>

      <!-- 右側資訊欄 -->
      <aside class="right">
        <StatCard class="prob">
          <div class="prob-circle">
            <div class="value">75%</div>
            <div class="label text-black">隔日上漲機率</div>
          </div>
        </StatCard>

        <StatCard>
          <h4 class="text-black">回測依據</h4>
          <p class="text-black">看機器學習跑出啥（Placeholder）</p>
        </StatCard>

        <div class="tags">
          <StatCard class="tag text-black" variant="positive"><div>技術<br/>偏多</div></StatCard>
          <StatCard class="tag text-black" variant="positive"><div>籌碼<br/>偏多</div></StatCard>
          <StatCard class="tag text-black" variant="negative"><div>消息<br/>偏空</div></StatCard>
          <StatCard class="tag text-black" variant="positive"><div>基本<br/>偏多</div></StatCard>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup lang="js">

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
.heading {
  display: flex;
  align-items: center;
  gap: 12px;
}
.price {
  margin-left: 12px;
}
.change.up { color: #ef4444; }
.change.down { color: #22c55e; }
.fav {
  margin-left: auto;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #cbd5e1;
  padding: 0 12px;
  background: #fff;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 16px;
}
.main {
  background: transparent;
}
.right {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.prob {
  display: flex;
  justify-content: center;
  align-items: center;
}
.prob-circle {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: #ffdcdc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.prob-circle .value {
  font-size: 40px;
  font-weight: 700;
}
.tags {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
}
.tag { text-align: center; }
</style>
