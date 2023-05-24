<template>
  <div class="panel">
    <div class="panel-tabs">
      <Tabs v-model="type">
        <TabPane label="树" name="tree" />
        <TabPane label="对象数组" name="arrayObj" />
      </Tabs>
    </div>

    <div class="panel-content">
      <TabArrayTree v-if="type==='tree'" />
      <TabArrayObject v-else-if="type==='arrayObj'" />
    </div>
  </div>
</template>

<script>
import TabArrayTree from "./tab-array-tree";
import TabArrayObject from "./tab-array-object";
// import PanelContent from "@/components/PanelContent";

export default {
  components: {
    TabArrayTree,
    TabArrayObject
    // PanelContent,
  },
  data() {
    return {
      type: 'tree',
    };
  },
};
</script>

<style lang="scss" scoped>
.panel {
  display: flex;
  flex-direction: column;
  height: 100%;
  &-tabs {
  }
  &-content {
    overflow: hidden;
    flex: 1;
  }
}

::v-deep {
  .ivu-tabs-bar {
    border-bottom: none;
  }
}
</style>
