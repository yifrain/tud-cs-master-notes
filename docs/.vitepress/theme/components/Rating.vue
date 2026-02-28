<script setup>
defineProps({
  score: {
    type: Number,
    required: true
  },
  reviewer: String,
  date: String,
  reason: String
})
</script>

<template>
  <div class="rating-block">
    <h3><slot /></h3>
    <div class="stars">
      <span v-for="n in 5" :key="n">
        {{ n <= score ? '★' : '☆' }}
      </span>
    </div>
    <p><strong>Reviewer:</strong> {{ reviewer }}</p>
    <p><strong>Date:</strong> {{ date }}</p>
    <p><strong>Reason:</strong> {{ reason }}</p>
  </div>
</template>

<style scoped>
.stars {
  font-size: 20px;
  color: #f5a623;
}

.rating-block {
  margin: 0.5rem 0;        /* 控制上下外边距 */
  padding: 0rem 1rem;    /* 上下 0.5rem，左右 1rem */
  border: 0.1rem solid #eee;
  border-radius: 8px;
}
</style>