<template>
  <div>
    <h1>Demo - Carousel</h1>

    <div style="width: 500px; border: 1px solid #ccc">
      <Carousel
        :list="list"
        trigger="click"
        height="300px"
      >
        <template #default="{ item }">
          <div>
            <img style="width: 100%" :src="item.url" />
          </div>
        </template>

        <template #footer="{ item }">
          <h3>{{ item.title }}</h3>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script>
import Carousel from './Carousel.vue'
import url1 from './imgs/pnpm-pkg-link.jpeg'
import url2 from './imgs/webpack_devtool.png'
import url3 from './imgs/元素居中方案.webp'

export default {
  name: 'Demo',
  components: {
    Carousel,
  },
  data() {
    return {
      list: [
        { id: 1, title: 'aaaaa', url: url1 },
        { id: 2, title: 'bbbbb', url: url2 },
        { id: 3, title: 'ccccc', url: url3 },
      ]
    }
  },
}
</script>
