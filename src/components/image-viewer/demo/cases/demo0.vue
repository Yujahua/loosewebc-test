<template>
  <div class="ui-example-child ui-example-child-image-reader">
    <div>
      <ul>
        <template>
          <li v-for="(item, index) in imgs" @click="showViewer(index, $event)" :key="index">
            <div class="img"
              :style="`background: url(${item}) center no-repeat;background-size:cover;`">
            </div>
          </li>
        </template>
      </ul>
    </div>
    <ui-image-viewer
      v-model="isViewerShow"
      :list="imgs"
      :has-dots="true"
      :initial-index="viewerIndex">
    </ui-image-viewer>
  </div>
</template>

<script>
import {reactive, toRefs} from 'vue'
import {ImageViewer} from '@csii/vx-mobile'

export default {
  name: 'image-viewer-demo',
  /* DELETE */
  message: '请在移动设备中扫码预览',
  messageEnUS: 'Please scan QR code and preview on mobile device',
  height: 500,
  /* DELETE */
  components: {
    [ImageViewer.name]: ImageViewer,
  },
  setup() {
    const state = reactive({
      isViewerShow: false,
      viewerIndex: 0,
      imgs: [
        'http://img-hxy021.didistatic.com/static/strategymis/insurancePlatform_spu/uploads/27fb7f097ca218d743f816836bc7ea4a',
        'http://manhattan.didistatic.com/static/manhattan/insurancePlatform_spu/uploads/c2912793a222eb24b606a582fd849ab7',
        'http://img-hxy021.didistatic.com/static/strategymis/insurancePlatform_spu/uploads/6ee5a0ba9340ca452cbc827902e76be0',
        'http://img-hxy021.didistatic.com/static/strategymis/insurancePlatform_spu/uploads/d751dd4487e265de3b8587f504eee2c3',
      ],
    })
    const showViewer = index => {
      state.viewerIndex = index
      state.isViewerShow = true
    }
    return {
      ...toRefs(state),
      showViewer,
    }
  },
}

</script>

<style lang="stylus" scoped>
.ui-example-child-image-reader
  float left
  width 100%
  ul
    float left
    width 100%
    li
      position relative
      float left
      width 22%
      padding-bottom 22%
      margin-left 2%
      margin-top 2%
      border-sizing border-box
      border-radius 2px
      overflow hidden
      list-style none
      .img
        position absolute
        width 100%
        height 100%
</style>
