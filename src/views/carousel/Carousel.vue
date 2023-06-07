<template>
  <div class="my-carousel">
    <div class="my-carousel__content">
      <el-carousel
        ref="refCarousel"
        indicator-position="none"
        v-bind="$attrs"
        v-on="$listeners"
        @change="handleChange"
      >
        <el-carousel-item v-for="(item, index) in list" :key="index">
          <slot name="default" :item="item"></slot>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="my-carousel__footer">
      <div class="my-carousel__footer-left">
        <slot name="footer" :item="list[active]">title</slot>
      </div>
      <div class="my-carousel__footer-indicator">
        <span
          class="dot"
          :class="{ active: active === i - 1 }"
          v-for="i in list.length"
          :key="i"
          @click="handleToggle(i - 1)"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-carousel',
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      active: 0,
    }
  },
  methods: {
    handleChange(index) {
      this.active = index
      this.$emit('change', index)
    },
    handleToggle(index) {
      this.$refs.refCarousel && this.$refs.refCarousel.setActiveItem(index)
    },
  },
}
</script>

<style lang="scss" scoped>
.my-carousel {
  &__content {

  }
  &__footer {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    gap: 20px;
    background-color: #fff;
    &-left {
      flex: 1;
    }
    &-indicator {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #ccc;
        &.active {
          background: blue;
        }
      }
    }
  }
}
</style>
