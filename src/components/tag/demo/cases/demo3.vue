<template>
  <div class="ui-example-child ui-example-child-tag ui-example-child-tag-3">
    <tag size="large" shape="square" fill-color="rgba(0,0,0,0)" type="fill" font-weight="bolder" font-color="#333">￥3600</tag>
    <tag size="small" shape="square" fill-color="rgba(0,0,0,0)" type="fill" font-weight="bolder" font-color="#333">￥300</tag>
  </div>
</template>

<script>import {Tag} from '@csii/vx-mobile'

export default {
  name: 'tag-demo',
  /* DELETE */
  title: '阳文',
  titleEnUS: 'Characters cut in relief',
  /* DELETE */
  components: {
    Tag,
  },
}
</script>
