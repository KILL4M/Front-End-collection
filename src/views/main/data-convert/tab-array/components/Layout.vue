<template>
  <div class="panel-group">
    <div class="panel-group-left item">
      <div class="code">
        <div class="title">前</div>
        <div class="content">
          <slot name="before">
            <pre>{{ beforeData }}</pre>
          </slot>
        </div>
      </div>

      <div class="code">
        <div class="title">后</div>
        <div class="content">
          <slot name="after">
            <pre>{{ afterData }}</pre>
          </slot>
        </div>
      </div>
    </div>

    <div class="panel-group-right item">
      <div class="title">点击题目 处理数据&&打印前后数据</div>

      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['beforeData', 'afterData'],
};
</script>

<style lang="scss" scoped>
pre {
  white-space: pre-wrap;
}

.panel-group {
  display: flex;
  gap: 10px;
  margin: 5px;
  height: 100%;
  .item {
    min-width: 150px;
    background: #FFFFFF;
    box-shadow: 0px 2px 8px 0px rgba(212, 223, 237, 0.5);
    border-radius: 4px;
  }
  .title {
    height: 30px;
    border-bottom: 1px solid black;
    text-align: center;
    font-size: 15px;
    line-height: 30px;
    white-space: pre-line;
  }
  .content {
    padding: 10px;
  }
  &-left {
    width: 33%;
    display: flex;
    justify-content: space-between;
    /* height: 100%; */
    & > div:first-child {
      border-right: 1px solid black;
    }
    .code {
      width: 50%;
    }
    .content {
      height: 100%;
      overflow: auto;

      scrollbar-width: none;
      &::-webkit-scrollbar {
      }
    }
  }
  &-right {
    flex: 1;
  }
}
</style>