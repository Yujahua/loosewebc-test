<template>
  <div class="ui-example icon">
    <section class="ui-example-section" v-for="(demo, index) in demos" :key="index">
      <div class="ui-example-title" v-html="demo.title || '基础'"></div>
      <div class="ui-example-descibe" v-html="demo.descibe"></div>
      <div class="ui-example-content">
        <component :is="demo"></component>
      </div>
    </section>
	</div>
</template>

<script>
import createDemoModule from '../../../../examples/create-demo-module'
import Demo0 from './cases/demo0'
import Demo1 from './cases/demo1'
import Demo2 from './cases/demo2'

export default {...createDemoModule('icon', [Demo0, Demo1, Demo2])}

</script>

<style lang="stylus">
.ui-example-child-icon
  padding-top 20px
  background #FFF
  clearfix()
  .ui-example-item, .ui-example-item-s
    float left
    width 25%
    height 100px
    padding 15px 0
    color #333
    text-align center
    .ui-icon
      margin 0 auto
      color #111A34
    p
      text-align center
      font-size font-body-normal
      color #999
  .ui-example-item-s
    width 25%
</style>
