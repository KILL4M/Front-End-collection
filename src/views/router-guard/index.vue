<template>
  <div>
    <h1>vue-router guard</h1>

    <div>
      <router-link to="/router-guard">root</router-link> |
      <router-link to="/router-guard?id=one">one</router-link> |
      <router-link to="/router-guard?id=two">two</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'router-guard',
  data() {
    return {
      data: [],
    }
  },
  // 刚进入路由时触发
  beforeRouteEnter(to, from, next) {
    console.log('[enter]', to.fullPath);
    next(vm => vm.getData());
  },
  // 路由更新时触发（发生在路由组件被复用时）
  beforeRouteUpdate(to ,from, next) {
    console.log('[update]', to.fullPath);
    next();
  },
  methods: {
    getData() {
      this.data = [1, 2, 3];
      console.log('get data', this.data);
    },
  },
}
</script>
