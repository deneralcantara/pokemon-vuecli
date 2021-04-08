import { shallowMount } from '@vue/test-utils'
import App from './App.vue'

describe('App.vue', () => {
  test('Is this a instance of Vue', () => {
    const wrapper = shallowMount(App, {
      stubs: ['router-view']
    })
    expect(wrapper.exists()).toBeTruthy()
  })
})