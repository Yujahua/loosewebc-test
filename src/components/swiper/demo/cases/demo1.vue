<template>
  <div class="ui-example-child ui-example-child-swiper ui-example-child-swiper-1">
    <ui-swiper
      @before-change="beforeChange"
      @after-change="afterChange"
      ref="swiper1"
      :default-index="1"
      :dragable="false"
      :autoplay="5000"
      transition="slideY">
      <ui-swiper-item :key="$index" v-for="(item, $index) in simples">
        <a href="javascript:void(0)"
          class="banner-item"
          :style="{'background': `${item.color}`}">{{item.text}}</a>
      </ui-swiper-item>
    </ui-swiper>
  </div>
</template>

<script>
import {reactive} from 'vue'
import {Swiper, SwiperItem} from '@csii/vx-mobile'
import simple from '@csii/vx-mobile/components/swiper/demo/data/simple'

export default {
  name: 'swiper-demo',
  /* DELETE */
  title: '纵向轮播',
  titleEnUS: 'Vertical rotation',
  describe: '纵向，默认显示第2屏（index 1），不显示导航点，不可拖动，滚动间隔为5秒',
  describeEnUS:
    'Vertically, the second screen (index 1) is displayed by default, navigation points are not displayed, and dragging is not possible. The scroll interval is 5 seconds',
  message:
    '@before-change: from: <span id="valueSwiper5">0</span>, to: <span id="valueSwiper6">0</span><br/>@after-change: from: <span id="valueSwiper7">0</span>, to: <span id="valueSwiper8">0</span>',
  /* DELETE */
  components: {
    [Swiper.name]: Swiper,
    [SwiperItem.name]: SwiperItem,
  },
  setup() {
    let simples = reactive(simple)
    const setValue = (id, value) => {
      document.querySelector(id) && (document.querySelector(id).innerHTML = value)
    }
    const beforeChange = (from, to) => {
      setValue('#valueSwiper5', from)
      setValue('#valueSwiper6', to)
    }
    const afterChange = (from, to) => {
      setValue('#valueSwiper7', from)
      setValue('#valueSwiper8', to)
    }
    return {
      beforeChange,
      afterChange,
      simples,
    }
  },
}

</script>

<style lang="stylus">
.ui-example-child-swiper-1
  height 250px
  .banner-item
    float left
    width 100%
    height 100%
    line-height 250px
    text-align center
    font-size 28px
    color #FFF
    box-align center
    align-items center
    box-pack center
    justify-content center
    text-decoration-line none
</style>
