import Vue from 'vue'
import {Check, CheckGroup, CheckBox, CheckList} from '@csii/vx-mobile'
import sinon from 'sinon'
import {shallowMount, mount} from '@vue/test-utils'

describe('Check - Operation', () => {
  let wrapper

  afterEach(() => {
    wrapper && wrapper.destroy()
  })

  test('check click event', () => {
    let value = false
    wrapper = shallowMount(Check, {
      propsData: {
        value,
      },
      listeners: {
        input(val) {
          value = val
          wrapper.setProps({value})
        },
      },
    })
    const eventSpy = sinon.spy(wrapper.vm, '$emit')
    const check = wrapper.find('.ui-check')

    check.trigger('click')
    expect(eventSpy.calledWith('input')).toBe(true)
    expect(value).toBe(true)
    check.trigger('click')
    expect(value).toBe(false)
  })

  test('check disabled', () => {
    let clicked = false
    wrapper = shallowMount(Check, {
      propsData: {
        disabled: true,
      },
      listeners: {
        input(val) {
          clicked = true
        },
      },
    })
    const eventSpy = sinon.spy(wrapper.vm, '$emit')

    wrapper.find('.ui-check').trigger('click')
    expect(eventSpy.calledWith('input')).toBe(false)
    expect(clicked).toBe(false)
  })

  test('check group', () => {
    Vue.component(Check.name, Check)
    let value = ['a']
    wrapper = mount(CheckGroup, {
      propsData: {
        value,
      },
      slots: {
        default: ['<ui-check name="a"/>', '<ui-check name="b"/>'],
      },
      listeners: {
        input(val) {
          value = val
          wrapper.setProps({value})
        },
      },
    })

    const checks = wrapper.findAll('.ui-check')
    expect(checks.at(0).classes('is-checked')).toBe(true)

    checks.at(1).trigger('click')
    expect(value).toEqual(['a', 'b'])
    checks.at(0).trigger('click')
    expect(value).toEqual(['b'])
  })

  test('checkbox click event', () => {
    let value = false
    wrapper = mount(CheckBox, {
      propsData: {
        value,
      },
      listeners: {
        input(val) {
          value = val
          wrapper.setProps({value})
        },
      },
    })

    const eventSpy = sinon.spy(wrapper.vm, '$emit')
    const checkBox = wrapper.find('.ui-check-box')

    checkBox.trigger('click')
    expect(eventSpy.calledWith('input')).toBe(true)
    expect(value).toBe(true)
    checkBox.trigger('click')
    expect(value).toBe(false)
  })

  test('checkbox group', () => {
    Vue.component(CheckBox.name, CheckBox)
    let value = ['a']
    wrapper = mount(CheckGroup, {
      propsData: {
        value,
      },
      slots: {
        default: ['<ui-check-box name="a"/>', '<ui-check-box name="b"/>'],
      },
      listeners: {
        input(val) {
          value = val
          wrapper.setProps({value})
        },
      },
    })

    const checks = wrapper.findAll('.ui-check-box')
    expect(checks.at(0).classes('is-checked')).toBe(true)

    checks.at(1).trigger('click')
    expect(value).toEqual(['a', 'b'])
    checks.at(0).trigger('click')
    expect(value).toEqual(['b'])
  })

  test('checkbox disabled', () => {
    let clicked = false
    wrapper = shallowMount(CheckBox, {
      propsData: {
        disabled: true,
      },
      listeners: {
        input(val) {
          clicked = true
        },
      },
    })
    const eventSpy = sinon.spy(wrapper.vm, '$emit')

    wrapper.find('.ui-check-box').trigger('click')
    expect(eventSpy.calledWith('input')).toBe(false)
    expect(clicked).toBe(false)
  })

  test('checklist', () => {
    let value = ['apple']
    wrapper = mount(CheckList, {
      propsData: {
        options: [{value: 'apple', label: '苹果'}, {value: 'watermelon', label: '西瓜'}],
        value,
      },
      listeners: {
        input(val) {
          value = val
          wrapper.setProps({value})
        },
      },
    })

    const items = wrapper.findAll('.ui-cell-item')
    expect(items.at(0).classes('is-checked')).toBe(true)

    items.at(1).trigger('click')
    expect(value).toEqual(['apple', 'watermelon'])
    items.at(0).trigger('click')
    expect(value).toEqual(['watermelon'])
  })
})
