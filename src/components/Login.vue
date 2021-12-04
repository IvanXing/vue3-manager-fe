<template>
  <div>
    <h1>登录界面</h1>
    <Welcome msg="jack" />
    <el-button @click="goHome">回首页</el-button>
  </div>
</template>

<script>
import Welcome from './Welcome.vue';
export default {
  name: 'Login',
  components: { Welcome },
  // mounted() {
  //   this.$request({
  //     method: 'get',
  //     url: '/login',
  //     data: {
  //       name: 'jack',
  //     },
  //   }).then((res) => {
  //     console.log(res);
  //   });
  //   this.$request
  //     .get('/login', { name: 'jack' }, { mock: true, loading: true })
  //     .then((res) => {
  //       console.log(res);
  //     });
  // },
  methods: {
    goHome() {
      this.$router.push('/welcome');
    },
  },
};
</script>

<style scoped></style>
