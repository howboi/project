<template>
  <div class="stock-analysis">
    <!-- 概覽分析卡片 -->
    <section class="overview-grid section">
      <StatCard variant="negative">
        <h3>技術面分析</h3>
        <p>偏空</p>
        <p class="desc">近期 MACD 下降，KD 死亡交叉，價格持續跌破 60MA。</p>
      </StatCard>
      <StatCard variant="positive">
        <h3>籌碼面分析</h3>
        <p>偏多</p>
        <p class="desc">三大法人持續買超，融資維持低檔。</p>
      </StatCard>
      <StatCard variant="negative">
        <h3>消息面分析</h3>
        <p>偏空</p>
        <p class="desc">近期新聞多以半導體需求下降為主。</p>
      </StatCard>
      <StatCard variant="positive">
        <h3>基本面分析</h3>
        <p>偏多</p>
        <p class="desc">EPS 穩定成長，ROE 超過 10%。</p>
      </StatCard>
    </section>

    <!-- 詳細分析：以 Tab 切換各面向，可再接 Tab 元件 -->
    <section class="section detail">
      <h3>基本面指標</h3>
      <div class="metrics">
        <StatCard variant="positive">EPS: 13.95</StatCard>
        <StatCard variant="positive">營收 YoY: +100%</StatCard>
        <StatCard variant="negative">ROA: 0.56%</StatCard>
        <StatCard variant="negative">ROE: 3.14%</StatCard>
        <StatCard variant="neutral">P/E: 20 倍</StatCard>
        <StatCard variant="neutral">股利: 無發放</StatCard>
      </div>
      <div class="chart">📈（歷年同月股價線圖）</div>
    </section>

    <!-- 消息面新聞列表 -->
    <section class="section news">
      <h3>個股新聞</h3>
      <ul>
        <li v-for="item in news" :key="item.id">
          <span class="time">🕒 {{ item.time }}</span>
          {{ item.title }}
        </li>
      </ul>
    </section>

    <!-- 籌碼面：直條圖 -->
    <section class="section chart-bar">
      <h3>籌碼面分布</h3>
      <div class="chart">📊（三大法人買賣超 Bar Chart）</div>
    </section>

    <!-- 技術指標細項 -->
    <section class="section tech-detail">
      <h3>技術指標細節</h3>
      <div class="indicators">
        <StatCard variant="neutral">MACD: 11.72</StatCard>
        <StatCard variant="negative">KD: 高檔鈍化</StatCard>
        <StatCard variant="negative">RSI: 死亡交叉</StatCard>
        <StatCard variant="neutral">5MA: 接近股價</StatCard>
        <StatCard variant="positive">10MA: 高於股價</StatCard>
        <StatCard variant="negative">60MA: 低於股價</StatCard>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">

// 範例新聞資料
const news = [
  { id: 1, time: '2025/5/19 10:50', title: 'COMPUTEX：輝達攜手鴻海、台積電打造 NVIDIA Blackwell' },
  { id: 2, time: '2025/5/16 18:30', title: '台積電：本公司受邀參加機構投資人說明會' },
  { id: 3, time: '2025/5/15 15:19', title: '國安基金護盤何時退？財長：台股不確定因素仍多' },
]
</script>

<style scoped>
.section { background: #fff; padding: 16px; border-radius: 8px; margin-bottom: 24px; }
.overview-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 12px; }
.metrics, .indicators { display: grid; grid-template-columns: repeat(auto-fit,minmax(140px,1fr)); gap: 12px; }
.chart, .chart-bar { height: 240px; background: #f1f5f9; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #64748b; }
.news ul { list-style: none; padding: 0; }
.news li { padding: 8px 0; border-bottom: 1px solid #e2e8f0; }
.tech-detail { display: flex; flex-direction: column; gap: 12px; }
</style>

