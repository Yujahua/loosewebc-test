<template>
  <div class="ui-example-child ui-example-child-steps ui-example-child-steps-4">
    <ui-steps
      :steps="steps"
      :current="currentStep"
      transition
    >
    </ui-steps>
  </div>
</template>

<script>import {Steps} from '@csii/vx-mobile'

export default {
  name: 'steps-demo',
  components: {
    [Steps.name]: Steps,
  },
  data() {
    return {
      steps: [
        {
          name: '登录',
        },
        {
          name: '开通',
        },
        {
          name: '验证',
        },
        {
          name: '成功',
        },
      ],
      currentStep: 0,
    }
  },
  mounted() {
    this.currentStep = 1.5
  },
}
</script>
