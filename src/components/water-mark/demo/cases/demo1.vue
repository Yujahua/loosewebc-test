<template>
  <div class="ui-example-child ui-example-child-water-mark-0">
    <ui-water-mark
      class="text-container"
      spacing="10vw"
    >
      <p class="text">
        通过<b>作用域插槽</b>的坐标属性(coord)可以对水印行列进行定制
      </p>
      <p class="text">
        通过<b>作用域插槽</b>的坐标属性(coord)可以对水印行列进行定制
      </p>
      <p class="text">
        通过<b>作用域插槽</b>的坐标属性(coord)可以对水印行列进行定制
      </p>
      <template v-slot:watermark="props">
        <span v-if="props.coord.row % 2 "> 奇数行</span>
        <span v-else>偶数行</span>
      </template>
    </ui-water-mark>
	</div>
</template>

<script>
import {WaterMark} from '@csii/vx-mobile'

export default {
  name: 'water-mark-demo',
  /* DELETE */
  title: '使用插槽',
  titleEnUS: 'Using slots',
  /* DELETE */
  components: {
    [WaterMark.name]: WaterMark,
  },
}

</script>

<style lang="stylus">
.ui-example-child-water-mark-0
  .text-container
    padding 32px
    background #FFF
  .text
    margin-bottom 20px
    line-height 1.5
    font-size 24px
    text-indent 2em
</style>