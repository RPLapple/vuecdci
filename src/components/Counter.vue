<template>
  <div class="hello">
    <h1>當前點擊次數{{ count }}</h1>
    <button @click="increment">點我加1</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count += 1;
    },
  },
};
</script>
