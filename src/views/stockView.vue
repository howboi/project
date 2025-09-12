<template>
  <div class="stock-view-container">
    <!-- Main content -->
    <div class="main-content">
      <!-- Stock info section -->
      <div class="stock-info-header">
        <div class="stock-title">
          <h1 class="stock-name">{{ symbol }} {{ name }}</h1>
          <div class="stock-price">
            <span class="current-price">目前價格：{{ price }}</span>
            <span class="price-change" :class="{ positive: change > 0, negative: change < 0 }">
              {{ change > 0 ? '+' : '' }}{{ change }} (🔺{{ changePct }}%)
            </span>
          </div>
        </div>
        <button class="watchlist-btn">⊕ 自選</button>
      </div>

      <!-- Chart and analysis section -->
      <div class="content-grid">
        <!-- Chart area -->
        <div class="chart-section">
          <div class="chart-container">
            <div class="chart-legend">
              <span class="legend-item ma5">● MA5</span>
              <span class="legend-item ma10">● MA10</span>
              <span class="legend-item ma20">● MA20</span>
              <span class="legend-item ma30">● MA30</span>
            </div>
            <div class="chart-placeholder">
              <!-- This would be the actual chart component -->
              <svg class="mock-chart" viewBox="0 0 800 400">
                <defs>
                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#1e3a8a;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#1e1b4b;stop-opacity:1" />
                  </linearGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#chartGradient)"/>
                <!-- Mock candlestick chart -->
                <path d="M50,300 Q200,200 350,250 T650,280" stroke="#3b82f6" stroke-width="2" fill="none"/>
                <path d="M50,310 Q200,210 350,260 T650,290" stroke="#10b981" stroke-width="2" fill="none"/>
                <path d="M50,320 Q200,220 350,270 T650,300" stroke="#f59e0b" stroke-width="2" fill="none"/>
                <path d="M50,330 Q200,230 350,280 T650,310" stroke="#ef4444" stroke-width="2" fill="none"/>
                
                <!-- Y-axis labels -->
                <text x="20" y="80" fill="#9ca3af" font-size="12">6,000</text>
                <text x="20" y="140" fill="#9ca3af" font-size="12">5,000</text>
                <text x="20" y="200" fill="#9ca3af" font-size="12">4,000</text>
                <text x="20" y="260" fill="#9ca3af" font-size="12">3,000</text>
                <text x="20" y="320" fill="#9ca3af" font-size="12">2,000</text>
                <text x="20" y="380" fill="#9ca3af" font-size="12">1,000</text>
                <text x="30" y="400" fill="#9ca3af" font-size="12">0</text>
                
                <!-- X-axis labels -->
                <text x="100" y="395" fill="#9ca3af" font-size="10">2023/3/9</text>
                <text x="250" y="395" fill="#9ca3af" font-size="10">2023/5/8</text>
                <text x="400" y="395" fill="#9ca3af" font-size="10">2023/7/8</text>
                <text x="550" y="395" fill="#9ca3af" font-size="10">2023/9/8</text>
                <text x="700" y="395" fill="#9ca3af" font-size="10">2023/11/12</text>
              </svg>
            </div>
            <div class="chart-controls">
              <button class="chart-control-btn">📊</button>
              <div class="volume-bar"></div>
              <button class="chart-control-btn">📊</button>
            </div>
          </div>
        </div>

        <!-- Right panel with analysis -->
        <div class="analysis-panel">
          <!-- Probability card -->
          <div class="probability-card">
            <h3 class="card-title">隔日上漲機率</h3>
            <div class="probability-circle">
              <div class="circle-progress">
                <span class="percentage">75%</span>
              </div>
            </div>
          </div>

          <!-- Analysis basis -->
          <div class="analysis-basis">
            <h4 class="basis-title">回測依據</h4>
            <p class="basis-content">看機器學習跑出啥</p>
          </div>

          <!-- Analysis tags -->
          <div class="analysis-tags">
            <div class="tag bullish">
              <div class="tag-label"><strong>技術</strong></div>
              <div class="tag-value">偏多</div>
            </div>
            <div class="tag bullish">
              <div class="tag-label"><strong>籌碼</strong></div>
              <div class="tag-value">偏多</div>
            </div>
            <div class="tag bearish">
              <div class="tag-label"><strong>消息</strong></div>
              <div class="tag-value">偏空</div>
            </div>
            <div class="tag bullish">
              <div class="tag-label"><strong>基本</strong></div>
              <div class="tag-value">偏多</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const symbol = '2330'
const name = '台積電'
const price = 949
const change = 31
const changePct = 3.38
</script>

<style scoped>
.stock-view-container {
  min-height: 0;
  background: linear-gradient(135deg, #e0f2fe 0%, #f3e5f5 100%);
  padding: 0;
  margin: 0;
}

/* Main Content */
.main-content {
  background: linear-gradient(135deg, #e0f2fe 0%, #f3e5f5 100%);
  padding: 0;
  max-width: 1600px;
  margin: 0;
  border-right: 1em solid #f3e5f5;
}

.stock-info-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 26px;
  background: white;
  padding: 26px 30px;
  border-radius: 17px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.stock-title {
  display: flex;
  align-items: center;
  gap: 24px;
}

.stock-name {
  font-size: 24px;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
}

.stock-price {
  display: flex;
  align-items: center;
  gap: 12px;
}

.current-price {
  font-size: 18px;
  color: #374151;
  font-weight: 600;
}

.price-change {
  font-size: 16px;
  font-weight: 600;
}

.price-change.positive {
  color: #ef4444;
}

.price-change.negative {
  color: #22c55e;
}

.watchlist-btn {
  background: #fff7ed;
  border: 2px solid #fed7aa;
  color: #ea580c;
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.watchlist-btn:hover {
  background: #ffedd5;
  border-color: #fb923c;
}

/* Content Grid */
.content-grid {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 26px;
  align-items: start;
}

/* Chart Section */
.chart-section {
  background: white;
  border-radius: 17px;
  padding: 26px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.chart-legend {
  display: flex;
  gap: 26px;
  margin-bottom: 18px;
}

.legend-item {
  font-size: 14px;
  font-weight: 500;
}

.legend-item.ma5 { color: #3b82f6; }
.legend-item.ma10 { color: #10b981; }
.legend-item.ma20 { color: #f59e0b; }
.legend-item.ma30 { color: #ef4444; }

.chart-container {
  position: relative;
}

.mock-chart {
  width: 100%;
  height: 440px;
  border-radius: 9px;
  margin-bottom: 18px;
}

.chart-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  padding: 17px;
  background: #374151;
  border-radius: 9px;
}

.chart-control-btn {
  background: #4b5563;
  border: none;
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
}

.volume-bar {
  flex: 1;
  height: 4px;
  background: #6b7280;
  border-radius: 2px;
  margin: 0 16px;
}

/* Analysis Panel */
.analysis-panel {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.probability-card {
  background: white;
  border-radius: 17px;
  padding: 26px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  text-align: center;
}

.card-title {
  font-size: 20px;
  font-weight: 600;
  color: #374151;
  margin: 0 0 20px 0;
}

.probability-circle {
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle-progress {
  width: 130px;
  height: 130px;
  background: conic-gradient(from 0deg, #ef4444 0deg, #ef4444 270deg, #e5e7eb 270deg, #e5e7eb 360deg);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.circle-progress::before {
  content: '';
  position: absolute;
  width: 85px;
  height: 85px;
  background: white;
  border-radius: 50%;
}

.percentage {
  font-size: 26px;
  font-weight: 700;
  color: #1f2937;
  position: relative;
  z-index: 1;
}

.analysis-basis {
  background: white;
  border-radius: 17px;
  padding: 22px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.basis-title {
  font-size: 18px;
  font-weight: 600;
  color: #374151;
  margin: 0 0 12px 0;
}

.basis-content {
  color: #6b7280;
  margin: 0;
  line-height: 1.5;
}

.analysis-tags {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}

.tag {
  background: white;
  border-radius: 13px;
  padding: 18px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease;
}

.tag:hover {
  transform: translateY(-2px);
}

.tag.bullish {
  background: linear-gradient(135deg, #fca5a5, #ef4444);
  color: white;
}

.tag.bearish {
  background: linear-gradient(135deg, #86efac, #22c55e);
  color: white;
}

.tag-label {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 4px;
  opacity: 0.9;
}

.tag-value {
  font-size: 18px;
  font-weight: 600;
}

/* Responsive */
@media (max-width: 1200px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .analysis-panel {
    grid-row: 1;
  }
}

@media (max-width: 768px) {
  .search-container {
    min-width: 100%;
  }
  
  .stock-info-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  
  .stock-title {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  
  .analysis-tags {
    grid-template-columns: 1fr;
  }
}
</style>
