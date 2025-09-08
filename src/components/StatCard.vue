<template>
  <div
    class="stat-card flow-circular-regular"
    :class="[
      `variant-${variant}`,
      { 'is-clickable': clickable }
    ]"
  >
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'positive', 'negative', 'neutral'].includes(value)
  },
  clickable: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.stat-card {
  padding: 0.75rem;
  border-radius: 10px;
  min-width: 80px;
  text-align: center;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: fit-content;
}
</style>
