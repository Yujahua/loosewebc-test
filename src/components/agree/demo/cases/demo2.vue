<template>
  <div class="ui-example-child ui-example-child-agree ui-example-child-2">
    <ui-agree
      v-model="agreeConf.checked"
      :disabled="agreeConf.disabled"
      :size="agreeConf.size"
      @change="onChange(agreeConf.name, agreeConf.checked, $event)"
    >
      本人承诺投保人已充分了解本保险产品，并保证投保信息的真实性，理解并同意
    </ui-agree>
	</div>
</template>

<script>
import {reactive} from 'vue'
import {Agree} from '@csii/vx-mobile'

export default {
  name: 'agree-demo',
  /* DELETE */
  title: '选中不可用状态',
  titleEnUS: 'Selected and unavailable state',
  height: 120,
  /* DELETE */
  components: {
    [Agree.name]: Agree,
  },
  setup() {
    const agreeConf = reactive({
      checked: true,
      name: 'agree2',
      size: 'md',
      disabled: true,
      introduction: '选中不可用状态',
    })
    const onChange = function(name, checked) {
      console.log(`agree name = ${name} is ${checked ? 'checked' : 'unchecked'}`)
    }
    return {
      agreeConf,
      onChange,
    }
  },
}

</script>
