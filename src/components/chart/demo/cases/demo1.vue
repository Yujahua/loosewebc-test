<template>
  <div class="ui-example-child ui-example-chart-child">
    <ui-chart
      :size="['7rem', '4rem']"
      :max="60"
      :min="0"
      :step="10"
      :lines="5"
      :format="format"
      :labels="['周一', '周二', '周三', '周四', '周五', '周六', '周日']"
      :datasets="[
        {
          color: '#5e64ff',
          width: 1,
          theme: 'heat',
          values: [8, 15, 20, 23, 20, 30, 32, 38, 36, 40, 50, 55, 52]
        }
      ]"
    />
	</div>
</template>

<script>
import {} from 'vue'
import {Chart} from '@csii/vx-mobile'

export default {
  name: 'chart-demo',
  /* DELETE */
  title: '渐变折线',
  titleEnUS: 'Gradient fold line',
  describe: '',
  /* DELETE */
  components: {
    [Chart.name]: Chart,
  },
  setup() {
    const format = val => {
      return val + '%'
    }
    return {format}
  },
}

</script>

<style lang="stylus" scoped>
  svg
    display block
    margin 0 auto
    width 7rem
    height 4rem
</style>
