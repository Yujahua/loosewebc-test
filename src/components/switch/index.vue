<template>
  <div
    class="ui-switch"
    :class="[
      disabled ? 'disabled' : '',
      value ? 'active' : '']"
    @click="onChange($event)">
  </div>
</template>

<script>export default {
  name: 'ui-switch',

  props: {
    value: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, {emit}) {
    // MARK: events handler, 如 $_onButtonClick
    const onChange = e => {
      if (props.disabled) {
        return false
      }
      emit('input', !props.value)
      emit('change', e)
    }
    return {
      onChange,
    }
  },
}
</script>

<style lang="stylus">
.ui-switch
  box-sizing border-box
  position relative
  width 80px
  height 48px
  border-radius 48px
  background-color switch-fill-inverse
  &.disabled
    opacity switch-item-color-disabled
  &::before, &::after
    content ""
    position absolute
    transition transform .3s
  &::before
    top 0
    left 0
    width 80px
    height 48px
    border-radius 24px
    background-color switch-fill-inverse
  &::after
    top 4px
    left 4px
    width 40px
    height 40px
    background-color switch-handle-color
    border-radius 50%
  &.active
    background-color switch-fill
  &.active::before
      transform scale(0)
  &.active::after
      transform translateX(32px)
</style>
