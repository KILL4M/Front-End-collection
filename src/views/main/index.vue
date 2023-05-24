<template>
  <div class="main">
    <div class="main-header">
      <div class="title">数据处理</div>

      <Tabs v-model="type">
        <TabPane
          v-for="item in tabList"
          :key="item.id"
          :label="item.text"
          :name="item.type"
          />
      </Tabs>
    </div>

    <div class="main-content">
      <component :is="activatedComponent"></component>
    </div>
  </div>
</template>

<script>
import TabArray from './data-convert/tab-array/index.vue'
import TabObject from './data-convert/tab-object/index.vue'
import TabString from './data-convert/tab-string/index.vue'

export default {
  components: {
    TabArray,
    TabObject,
    TabString
  },
  data() {
    return {
      type: 'TabArray',
      tabList: [{
          id: 1,
          type: "TabArray",
          text: "数组"
        },
        {
          id: 2,
          type: "TabObject",
          text: "对象"
        },
        {
          id: 3,
          type: "TabString",
          text: "字符串"
        }
      ]
    }
  },
  computed: {
    activatedComponent() {
      return this.type
    }
  },
};
</script>

<style lang="scss" scoped>
.main {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
  &-header {
    position: sticky;
    top: 0;
    background-color: #fff;
    .title {
      text-align: center;
      font-size: 20px;
    }
  }
  &-content {
    height: calc(100% - 81px - 20px);
  }
}

::v-deep {
  .ivu-tabs-bar {
    border-bottom: none;
  }
}
</style>
