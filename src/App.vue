<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.$storage.setItem('userInfo', { age: 30, name: 'jack' });
    console.log('user=>', this.$storage.getItem('userInfo'));
    this.$storage.clearAll();
  },
};
</script>

<style></style>
