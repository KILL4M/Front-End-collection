<template>
  <Layout
    :before-data="beforeData"
    :after-data="afterData"
  >
    <Tabs v-model="active">
      <TabPane
        v-for="item in solutionMap"
        :key="item.category"
        :label="item.category"
        :name="item.category"
      />
    </Tabs>

    <div
      v-for="(item, index) in activeSolution"
      :key="index"
      @click="run(item)"
    >
      <div>Demo {{ index + 1 }}: {{ item.description }}</div>
    </div>

    <div>
      <Input v-model="sourceCode" type="textarea" :rows="20" placeholder="Enter something..." />
    </div>

    <Button @click="runCode">Run</Button>
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
      active: '',
      beforeData: solution.dataSource,
      afterData: "",
      solutionMap: solution.solutionMap,
      sourceCode: '',
    };
  },
  computed: {
    activeSolution() {
      return this.solutionMap.filter(item => item.category === this.active)
    }
  },
  mounted() {
    this.active = this.solutionMap[0].category
  },
  methods: {
    run(item) {
      this.sourceCode = item.sourceCode
    },
    runCode() {
      var wrap = s => "{ return " + s + " };"
      const func = new Function(wrap(this.sourceCode))
      this.afterData = func.call(null).call(null, this.beforeData)
    }
  },
};
</script>
