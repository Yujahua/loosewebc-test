<template>
  <div class="ui-example-child ui-example-child-drop-menu ui-example-child-drop-menu-2">
    <ui-drop-menu :data="data" :default-value="['1', '8']" />
    <div class="content">正文区域</div>
  </div>
</template>

<script>
import {ref, reactive} from 'vue'
import {DropMenu} from '@csii/vx-mobile'

export default {
  name: 'drop-menu-demo',
  /* DELETE */
  title: '禁用下拉菜单',
  titleEnUS: 'Drop-down menu with disabled item',
  height: 500,
  /* DELETE */
  components: {
    [DropMenu.name]: DropMenu,
  },
  setup() {
    const isContentShow = ref(false)
    const data = reactive([
      {
        text: '排量',
        options: [
          {
            value: '0',
            text: '1.6L',
          },
          {
            value: '1',
            text: '1.8L',
          },
          {
            value: '2',
            text: '2.0L',
            disabled: true,
          },
          {
            value: '3',
            text: '1.2T',
          },
          {
            value: '4',
            text: '1.4T',
          },
          {
            value: '5',
            text: '1.6T',
          },
        ],
      },
      {
        text: '变速箱',
        disabled: true,
        options: [
          {
            value: '7',
            text: '手动挡',
          },
          {
            value: '8',
            text: '自动挡',
          },
          {
            value: '9',
            text: '手自一体',
          },
        ],
      },
    ])
    return {
      isContentShow,
      data,
    }
  },
}

</script>
