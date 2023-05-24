<template>
  <Layout
    :before-data="beforeData"
    :after-data="afterData"
  >
  <div
      v-for="(item, index) in solutionMap"
      :key="index"
      @click="run(item)"
    >
      Demo {{ index + 1 }}: {{ item.description }}
    </div>
  </Layout>
</template>

<script>
import Layout from '../components/Layout'
import * as solution from './solution'

export default {
  components: {
    Layout,
  },
  data() {
    return {
      beforeData: solution.dataSource,
      afterData: null,
      solutionMap: solution.solutionMap,
    };
  },
  methods: {
    run(item) {
      this.afterData = item.action(this.beforeData)
    }
  },
};
</script>
