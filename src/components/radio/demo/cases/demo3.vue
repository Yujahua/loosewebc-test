<template>
  <div class="ui-example-child ui-example-child-radio ui-example-child-radio-3">
    <ui-radio-group v-model="favorites">
      <ui-radio name="watermelon" label="西瓜"/>
      <ui-radio name="apple" label="苹果" />
      <ui-radio name="banana" label="香蕉" />
      <ui-radio name="orange" label="橙子" />
      <ui-radio name="tomato" label="西红柿" disabled />
    </ui-radio-group>
  </div>
</template>

<script>
import {ref} from 'vue'
import {Radio, RadioGroup} from '@csii/vx-mobile'

export default {
  name: 'radio-demo',
  /* DELETE */
  title: '单选项组',
  titleEnUS: 'Radio group',
  align: 'left',
  /* DELETE */
  components: {
    [Radio.name]: Radio,
    [RadioGroup.name]: RadioGroup,
  },
  setup() {
    const favorites = ref('apple')
    return {
      favorites,
    }
  },
}

</script>
